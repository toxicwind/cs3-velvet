# cs3-velvet — CloudStream plugin repository

A CloudStream extension repository. 20 plugins, 19 validated builds.

[![repo: cs3-velvet](https://img.shields.io/badge/repo-cs3--velvet-6e56cf?style=for-the-badge)](https://github.com/toxicwind/cs3-velvet)
[![plugins: 20](https://img.shields.io/badge/plugins-20-green?style=for-the-badge)](#contents)
[![type: cloudstream-repo](https://img.shields.io/badge/type-cloudstream--repo-blue?style=for-the-badge)](#install)

## Install

1. Open CloudStream → **Settings → Extensions → Add repository**
2. Paste:

   ```
   https://raw.githubusercontent.com/toxicwind/cs3-velvet/main/repo.json
   ```

3. CloudStream reads `repo.json`, follows it to `plugins.json`, and offers every plugin for one-tap install. Updates land automatically when the manifests change.

## Contents

19 validated builds ship in `final_builds/` — each repacked from a DEX that passed inspection. One additional build in `builds/` is **not validated**; install it only if you know what you're doing.

Plugin details (names, versions, languages, download URLs) live in `plugins.json` — that's the source of truth the app reads.

## What's here

| Path | Role |
|---|---|
| `repo.json` | Repository manifest — the URL you add to CloudStream; points at `plugins.json` |
| `plugins.json` | Plugin list: name, version, language, authors, tvTypes, download URL, file size |
| `final_builds/` | 19 validated `.cs3` plugins (the shippable artifacts) |
| `builds/` | Intermediate builds, including one unvalidated package |
| `extracted/` | Decompiled plugin sources (analysis only — never installed) |
| `cs3_inspector.py` | Read-only forensic DEX inspector (stdlib only) |
| `EXTRACTION_REPORT.md` | Full decompilation & extraction report (2026-05-25): per-plugin URL hits, regex patterns, extracted keys |
| `AGENTS.md` | Repo conventions for agents working here |

The pipeline, end to end:

```mermaid
flowchart LR
    SRC[source APKs/plugins] --> EXTRACT[decompile → extracted/]
    EXTRACT --> INSPECT[cs3_inspector.py<br/>read-only DEX forensics<br/>urls · patterns · keys]
    INSPECT -->|validated| REPACK[repack → final_builds/*.cs3]
    REPACK --> MANIFEST[plugins.json<br/>name · version · url · size]
    MANIFEST --> REPO[repo.json<br/>manifestVersion 1]
    REPO --> CS[CloudStream<br/>adds repo → installs plugins]
```

Each `plugins.json` entry carries: `name`, `internalName`, `description`, `iconUrl`, `apiVersion`, `url` (the `.cs3` download), `fileSize`, `version`, `language`, `authors`, `tvTypes`, `status`, `repositoryUrl`.

## Verify it yourself

Inspect a plugin without installing anything:

```bash
python3 cs3_inspector.py final_builds/<plugin>.cs3
```

Every `.cs3` is a ZIP containing `classes.dex`. The inspector only reads — it never executes plugin code.

## Security

- Treat any `.cs3` from outside `final_builds/` as untrusted until it passes the same inspection pipeline.
- `extracted/` sources are decompiled for analysis; they are not install artifacts.

## License

MIT where marked.
