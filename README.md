# Velvet — CS3 plugin repository

A CloudStream extension repository. 20 plugins — 19 repacked from validated DEX, 1 placeholder pending validation.

## Install

1. CloudStream → **Settings → Extensions → Add repository**
2. Paste:

   ```
   https://raw.githubusercontent.com/toxicwind/cs3-velvet/main/repo.json
   ```

3. Install extensions from the repository's plugin list.

## Plugins

The full list lives in [plugins.json](plugins.json) — 20 entries, `status: 1` active, `status: 0` placeholder.

19 builds were repacked from validated DEX (`classes.dex` verified before packaging). One entry (Universal Morphe) is a placeholder marked inactive until its build is validated.

## Repack notes

- `.cs3` files are zips of `classes.dex` + `manifest.json`.
- `final_builds/` holds the canonical builds; `plugins.json` is the source of truth for versions and file sizes.
- `cs3_inspector.py` validates packaged plugins against their embedded manifests.
