#!/usr/bin/env bun
/**
 * velvet-test — TDD harness for velvet CS3 providers.
 *
 * Imports the CS3 SDK (TestingUtils) through java-bridge, compiles each
 * provider's extracted jadx source against the SDK + deps, then runs the
 * SAME tests the app's built-in "Test Providers" screen runs:
 *   testHomepage → getMainPage() must return non-empty rows
 *   testSearch   → search() must return results
 *   testLoad     → load() must resolve a SearchResponse
 *   testLinkLoading → loadLinks() must find playable sources
 *
 * Usage:
 *   bun velvet-test.ts [providerName...]   (default: all in velvet/extracted)
 *   bun velvet-test.ts --list
 */
import { createRequire } from "node:module";
import { readdirSync, existsSync, mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const require = createRequire(import.meta.url);
const ROOT = import.meta.dir;
const VELVET = join(ROOT, "..", "velvet");
const EXTRACTED = join(VELVET, "extracted");
const SDK = join(ROOT, "..", "tools", "sdk");
const DEPS_DIR = join(SDK, "deps");
const BUILD_DIR = join(ROOT, "..", "tools", "build", "providers");

const args = process.argv.slice(2);
const only = args.filter((a) => !a.startsWith("-"));
const listOnly = args.includes("--list");

function classpathJars(): string[] {
  const jars: string[] = [];
  for (const f of readdirSync(SDK)) if (f.endsWith(".jar")) jars.push(join(SDK, f));
  if (existsSync(DEPS_DIR)) {
    for (const f of readdirSync(DEPS_DIR)) if (f.endsWith(".jar")) jars.push(join(DEPS_DIR, f));
  }
  return jars;
}

function compileProvider(name: string, classpath: string): string | null {
  const srcDir = join(EXTRACTED, name, "java", "sources");
  if (!existsSync(srcDir)) return null;
  const outDir = join(BUILD_DIR, name);
  mkdirSync(outDir, { recursive: true });
  const files = spawnSync("find", [srcDir, "-name", "*.java"], { encoding: "utf8" }).stdout.trim().split("\n").filter(Boolean);
  if (!files.length) return null;
  const javac = spawnSync("/usr/lib/jvm/java-21-openjdk/bin/javac", [
    "-d", outDir,
    "-cp", classpath,
    "-source", "8", "-target", "8",
    "-nowarn",
    ...files,
  ], { encoding: "utf8", timeout: 120_000 });
  if (javac.status !== 0) {
    console.error(`[${name}] javac FAILED:\n${javac.stderr.slice(0, 1500)}`);
    return null;
  }
  return outDir;
}

async function main(): Promise<void> {
  const jb = require("java-bridge");
  const jars = classpathJars();
  const classpath = jars.join(":");
  console.log(`SDK jars: ${jars.length} (${classpath.length} chars)`);

  if (listOnly) {
    for (const d of readdirSync(EXTRACTED)) console.log(d);
    return;
  }

  const providers = only.length ? only : readdirSync(EXTRACTED).filter((d) =>
    existsSync(join(EXTRACTED, d, "java", "sources")));
  console.log(`Providers to test: ${providers.join(", ")}`);

  jb.appendClasspath(jars);
  await jb.ensureJvm();

  const TestingUtils = await jb.importClass("com.lagradost.cloudstream3.utils.TestingUtils");
  console.log("TestingUtils loaded:", typeof TestingUtils);

  for (const name of providers) {
    const outDir = compileProvider(name, classpath);
    if (!outDir) continue;
    // Append the compiled provider classes to the classpath
    jb.appendClasspath(outDir);
    console.log(`[${name}] compiled, ready for TestingUtils tests`);
    // TODO: instantiate the provider's MainAPI subclass (manifest.json pluginClassName)
    // and run testHomepage/testSearch via the coroutine entry point.
  }
}

await main();