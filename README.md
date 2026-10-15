# Velvet — CS3 Plugin Repository

[![CloudStream](https://img.shields.io/badge/CloudStream-CS3%20v3-57b4e9?style=for-the-badge&labelColor=1a1a2e)](https://github.com/CS-MS/csugar)

> A curated CS3 extension repository — **20 plugins**, 19 repacked from validated DEX, 1 placeholder pending validation.

---

## Quick Install

```yaml
CloudStream → Settings → Extensions → Add Repository
```

Paste the manifest URL:

```
https://raw.githubusercontent.com/toxicwind/cs3-velvet/main/repo.json
```

---

## Plugin Catalog

| Status | Count | Description |
|:------:|:-----:|:------------|
| ✅ Active | 19 | Repacked from verified `classes.dex` |
| ⏳ Pending | 1 | Placeholder — validation in progress |
| **Total** | **20** | |

> Full plugin list and metadata: [`plugins.json`](plugins.json)
> Plugin builds live in [`final_builds/`](final_builds/) — canonical `.cs3` archives.

---

## The Vibe

You know the type. Clean repacks. No bloat. No mystery meat. Just `classes.dex` + `manifest.json` zipped proper, validated against the schema before they hit `final_builds/`.

Nineteen builds. One `status: 0` placeholder (Universal Morphe — we'll get to it). The rest are `status: 1` and they work.

If you're here, you already know what `GayStream` and `GayKinkyPorn` are. You know why `Xhamster` has a Vietnamese locale. You know the drill.

We don't advertise. We just ship `.cs3` files that install and play.

---

## Repack Pipeline

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌────────────┐
│  DEX Decode  │──▶│  Manifest    │──▶│  cs3_pack    │──▶│  Validate  │
│  (jadx)      │   │  Verify      │   │  (.cs3 zip)  │   │  (inspector)│
└─────────────┘    └──────────────┘    └─────────────┘    └────────────┘
                                             │
                                             ▼
                                  ┌──────────────────┐
                                  │  repo.json       │
                                  │  CloudStream API │
                                  │  v3 compliant    │
                                  └──────────────────┘
```

### Artifacts

| File | Location | What it is |
|:-----|:---------|:-----------|
| `.cs3` builds | `final_builds/` | Zipped `classes.dex` + `manifest.json` |
| `plugins.json` | repo root | Source of truth — versions, sizes, metadata |
| `cs3_inspector.py` | repo root | Validates packages against embedded manifests |
| `repo.json` | repo root | CloudStream v3 entry point |

---

## Validation

Every active build passes:

```bash
python3 cs3_inspector.py final_builds/GayStream.cs3
```

Checks: DEX integrity ✅ · Manifest schema ✅ · Size match ✅.

---

*Velvet. Soft. Expensive. You know where to find it.*