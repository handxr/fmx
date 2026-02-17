# figmamake CLI - Design Document

## Overview

A CLI tool built with Bun + Ink that takes a directory containing a Figma Make `.zip` (code) and `.make` (assets) file pair, and produces a clean, self-contained React + Vite + Tailwind app with all `figma:asset/` imports resolved to real files.

## Input Format

Figma Make exports two files:
- **`.zip`** - Contains the React app source code (components, styles, config). Includes `figma:asset/{hash}.ext` imports that reference images.
- **`.make`** - A zip archive containing assets in `images/` (files named by hash, no extension), plus `meta.json`, `canvas.fig`, and AI chat data.

## CLI Interface

```bash
figmamake <dir>              # output dir = source file base name
figmamake <dir> -o my-app    # custom output directory name
```

### Input Validation
- `<dir>` must exist and be a directory
- Must contain exactly one `.zip` and one `.make` with the same base name
- If output directory already exists: error with suggestion to use `-o` or remove it

## Project Structure

```
figmamake/
  package.json          # bin: { figmamake: "./src/cli.tsx" }
  tsconfig.json
  src/
    cli.tsx             # Entry point - parse args, render <App/>
    app.tsx             # Ink main component - orchestrate pipeline
    pipeline/
      extract.ts        # Extract .zip and .make
      analyze.ts        # Analyze imports and dependencies
      transform.ts      # Rewrite figma:asset imports, tree-shake
      write.ts          # Write output directory
    ui/
      Spinner.tsx       # Spinner component
      StepList.tsx      # Step list with states
      Summary.tsx       # Final summary
```

## Pipeline

### Phase 1: Extraction
- Extract `.zip` to temp dir (`/tmp/figmamake-{random}/code/`)
- Extract `.make` to temp dir (`/tmp/figmamake-{random}/assets/`)
- Only `images/` from `.make` is relevant; ignore `canvas.fig`, `ai_chat.json`, `blob_store/`, etc.

### Phase 2: Dependency Analysis
- Starting from `src/main.tsx` as entry point, recursively walk imports to build the full dependency tree
- Use regex to parse imports (patterns: `import ... from "..."` and `from "..."`)
- Resolve aliases (`@/` -> `src/`)
- Identify which `.tsx/.ts` files from the zip are reachable from the entry point
- Collect all `figma:asset/{hash}.ext` references found in reachable files
- Mark unreachable files for deletion (e.g., unused shadcn/ui components)

### Phase 3: Transformation
- For each reachable file containing `figma:asset/{hash}.ext`:
  - Look up the hash in `images/` from the .make
  - Detect real file type (PNG, GIF, JPG, SVG) via magic bytes
  - Copy to `public/assets/{hash}.{real_ext}`
  - Replace `import varName from "figma:asset/{hash}.ext"` with `const varName = "/assets/{hash}.{real_ext}"`
- Clean `package.json`:
  - Move `react` and `react-dom` from peerDeps to deps
  - Remove deps only used by deleted files (compare imports of deleted vs kept files)
  - Remove `peerDependenciesMeta` and `pnpm.overrides` sections if no longer applicable

### Phase 4: Write Output
- Create output directory
- Copy only reachable files maintaining directory structure
- Copy used assets to `public/assets/`
- Write cleaned `package.json`
- Copy `index.html`, `vite.config.ts`, `postcss.config.mjs`, style files

## UI (Ink)

### During Execution

```
 figmamake v1.0.0

  Processing: Disponibilidad rapida (Mobile)

  ✓ Files extracted
  ✓ Dependencies analyzed (12 files used, 54 removed)
  ◌ Transforming imports...
  ○ Writing output directory
```

Legend: `✓` = completed, `◌` = in progress (spinner), `○` = pending

### Final Summary

```
  ✓ App generated at ./Disponibilidad rapida (Mobile)/

  Files:   12 copied, 54 removed
  Assets:   4 copied, 19 discarded
  Deps:    15 kept, 48 removed

  Next: cd "Disponibilidad rapida (Mobile)" && bun install && bun dev
```

## Error Handling
- Missing `.zip` or `.make`: clear error listing found files and what's missing
- `figma:asset/{hash}` referenced in code but not in `.make`: warning (not fatal), keep original import, notify user
- Output directory already exists: error suggesting `-o` flag or manual removal

## Key Decisions
- **Assets go to `public/assets/`** with absolute URL replacement (no Vite processing)
- **Tree-shaking at file level only** - no AST-level dead code elimination inside files
- **Dependency cleanup in package.json** - remove unused npm packages
- **No auto-install** - user runs `bun install` manually
- **All CLI output in English**
- **react/react-dom moved to regular dependencies** for self-contained app

## Tech Stack
- **Runtime:** Bun
- **CLI Framework:** Ink (React for CLI)
- **Arg Parsing:** meow or Bun native
- **Zip Handling:** Bun's native unzip or `extract-zip`
- **File Type Detection:** magic bytes check (first few bytes of file)
