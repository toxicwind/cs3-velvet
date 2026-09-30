# gayxxx-sovereign

CloudStream CS3 plugin repository — 20 plugins repacked from validated DEX, served as a CloudStream v3 repository manifest.

![type: cloudstream-repo](https://img.shields.io/badge/type-cloudstream--repo-blue)
![plugins: 20](https://img.shields.io/badge/plugins-20-green)
![scope: private](https://img.shields.io/badge/scope-private-red)

## Install

Add to CloudStream as a repository:

```
https://raw.githubusercontent.com/toxicwind/gayxxx-sovereign/main/repo.json
```

CloudStream reads `repo.json`, follows the `pluginLists` entry to
`plugins.json`, and offers all 20 plugins for install.

## What's here

| Path | Contents |
|------|----------|
| `repo.json` | Repository manifest (name, description, `pluginLists`) — the URL you add to CloudStream |
| `plugins.json` | Plugin list — 20 plugins with download URLs and metadata |
| `builds/` | Packaged `.cs3` plugin files |
| `final_builds/` | Final verified `.cs3` packages |
| `extracted/` | Decompiled plugin sources (analysis only) |
| `EXTRACTION_REPORT.md` | Full decompilation & extraction report (2026-05-25, 19 plugins processed) |
| `cs3_inspector.py` | Inspector for `.cs3` packages |
| `AGENTS.md` | Operating rules for agents working in this repo |

## Provenance

Every plugin was repacked from a valid DEX (ZIP containing `classes.dex`)
and verified against the CloudStream v3 repository schema before packaging.
The extraction report documents the decompilation of each plugin: Java URLs,
regex patterns, and plugin API keys recovered from the bytecode.

## Notes

- Private repo — media streaming manifest for the Sovereign estate.
- No license file — all rights reserved.
