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

> Full plugin list and metadata: [`plugins.json`](plugins.json) — now with enhanced search and filtering

---

## Enhanced Discovery

This repository includes **cs3-search.py** — a fuzzy search and filter tool for finding plugins by name, description, category, or tag.

### Search Examples

```bash
# Fuzzy search (handles typos)
python3 cs3-search.py "twink"

# Category filtering  
python3 cs3-search.py "" --category gay

# Tag filtering
python3 cs3-search.py "" --tag bear --limit 3

# Combined search + filters
python3 cs3-search.py "bareback" --category gay --tag anal --limit 5
```

### Available Categories & Tags

Categories: `gay`, `lesbian`, `transgender`, `bisexual`, `adult`  
Tags include: `gay`, `lesbian`, `trans`, `bisexual`, `twink`, `bear`, `milf`, `teen`, `interracial`, `bareback`, `creampie`, `anal`, `oral`, `bdsm`, `solo`, `vr`, `cam`, `nsfw`, and many more.

Run `python3 cs3-search.py --help` for full usage.

---

## The Vibe

You know the type. Clean repacks. No bloat. No mystery meat. Just `classes.dex` + `manifest.json` zipped proper, validated against the schema before they hit `final_builds/`.

Nineteen builds. One `status: 0` placeholder (Universal Morphe — we'll get to it). The rest are `status: 1` and they work.

If you're here, you already know what `GayStream` and `GayKinkyPorn` are. You know why `Xhamster` has Vietnamese metadata. You know the drill.

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
| `plugins.json` | repo root | Source of truth — versions, sizes, metadata + searchable categories/tags |
| `cs3_search.py` | repo root | Fuzzy search and filter tool for plugin discovery |
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