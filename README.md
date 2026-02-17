# fmx

Turn [Figma Make](https://www.figma.com/make) exports into clean React + Vite + Tailwind apps.

## What it does

Takes a directory containing a Figma Make `.zip` + `.make` export pair and generates a production-ready React app:

- Extracts and resolves all image assets (auto-detects PNG, JPG, GIF, SVG, WebP)
- Rewrites `figma:asset/` imports to standard asset paths
- Tree-shakes unused components (Figma Make exports all shadcn/ui components)
- Cleans `package.json` — removes unused deps, fixes peer dependencies
- Applies CSS fixes for common Figma Make layout issues

## Install

```bash
npm install -g fmx
```

## Usage

```bash
# Basic — output dir matches export name
fmx ./my-figma-export

# Custom output directory
fmx ./my-figma-export -o my-app
```

Then:

```bash
cd my-app
npm install
npm run dev
```

## How it works

```
.zip + .make → validate → extract → analyze → transform → write → clean app
```

1. **Validate** — finds matching `.zip`/`.make` file pair in the directory
2. **Extract** — unzips both archives to a temp directory
3. **Analyze** — traces imports from `main.tsx`, identifies reachable files and assets
4. **Transform** — rewrites asset imports, detects file types via magic bytes, cleans dependencies
5. **Write** — copies only reachable files, resolved assets, and cleaned config to output

## Expected input

A directory containing two files exported from Figma Make:

- `project-name.zip` — React source code with `figma:asset/` imports
- `project-name.make` — image assets archive (zip containing `images/` folder)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
