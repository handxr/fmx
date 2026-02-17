# OSS Security Review - Fix-and-Ship

**Date:** 2026-02-17
**Status:** Approved

## Summary

Security audit of fmx before npm publication. No critical or high issues found.

## Findings

| Severity | Issue | Fix |
|----------|-------|-----|
| Medium | `unzipper@^0.12.3` unmaintained (~3yr) | No active CVEs. Monitor, replace post-v1. |
| Low | Hardcoded `/tmp` path | Replace with `os.tmpdir()` |
| Low | `Math.random()` for temp dir names | Replace with `crypto.randomUUID()` |

## Changes (Enfoque A)

**File:** `src/pipeline/extract.ts`

1. Add imports: `tmpdir` from `node:os`, `randomUUID` from `node:crypto`
2. Replace temp dir creation: `join(tmpdir(), \`fmx-${randomUUID()}\`)`

No other changes needed. Project is clean for publication.
