# Contributing to fmx

## Setup

```bash
git clone <repo-url>
cd fmx
bun install
```

## Development

```bash
# Run directly (development)
bun src/cli.tsx ./test-export

# Build
bun run build

# Run built version
node dist/cli.js ./test-export

# Run tests
bun run test

# Type check
bun run typecheck
```

## Project structure

```
src/
├── cli.tsx              # Entry point, arg parsing
├── app.tsx              # Ink app, orchestrates pipeline
├── pipeline/
│   ├── validate.ts      # Input validation
│   ├── extract.ts       # Zip extraction
│   ├── analyze.ts       # Import tracing, tree-shaking
│   ├── transform.ts     # Asset resolution, dep cleanup
│   ├── fix-styles.ts    # CSS fixes for Figma Make quirks
│   ├── write.ts         # Output writer
│   └── __tests__/       # Tests for each module
└── ui/
    ├── StepList.tsx      # Progress display
    └── Summary.tsx       # Final output summary
```

## Pull requests

1. Fork and create a branch from `main`
2. Add tests for new functionality
3. Make sure `bun run test` and `bun run typecheck` pass
4. Keep PRs focused — one feature or fix per PR
