import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { transform } from "../transform.js";
import type { AnalysisResult } from "../analyze.js";

const TEST_DIR = join("/tmp", "fmx-test-transform");
const codeDir = join(TEST_DIR, "code");
const assetsDir = join(TEST_DIR, "assets");

// PNG magic bytes
const PNG_HEADER = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

beforeEach(async () => {
  await mkdir(join(codeDir, "src"), { recursive: true });
  await mkdir(join(assetsDir, "images"), { recursive: true });
});

afterEach(async () => {
  await rm(TEST_DIR, { recursive: true, force: true });
});

describe("transform", () => {
  it("rewrites figma:asset imports to public asset paths", async () => {
    const hash = "deadbeef01";
    await writeFile(
      join(codeDir, "src", "Hero.tsx"),
      `import heroImg from "figma:asset/${hash}.png";\nexport default heroImg;\n`
    );
    await writeFile(join(assetsDir, "images", hash), PNG_HEADER);
    await writeFile(join(codeDir, "package.json"), JSON.stringify({ dependencies: { react: "^18" } }));

    const analysis: AnalysisResult = {
      reachableFiles: new Set(["src/Hero.tsx"]),
      unreachableFiles: new Set(),
      figmaAssets: new Map([[hash, "png"]]),
      totalFiles: 1,
    };

    const result = await transform(codeDir, assetsDir, analysis);
    const transformed = result.transformedFiles.get("src/Hero.tsx");
    expect(transformed).toContain(`const heroImg = "/assets/${hash}.png"`);
    expect(result.assetMappings).toHaveLength(1);
    expect(result.assetMappings[0].realExt).toBe("png");
  });

  it("warns when asset file not found", async () => {
    const missingHash = "aabbccdd00";
    await writeFile(
      join(codeDir, "src", "Hero.tsx"),
      `import heroImg from "figma:asset/${missingHash}.png";\nexport default heroImg;\n`
    );
    await writeFile(join(codeDir, "package.json"), JSON.stringify({ dependencies: { react: "^18" } }));

    const analysis: AnalysisResult = {
      reachableFiles: new Set(["src/Hero.tsx"]),
      unreachableFiles: new Set(),
      figmaAssets: new Map([[missingHash, "png"]]),
      totalFiles: 1,
    };

    const result = await transform(codeDir, assetsDir, analysis);
    expect(result.warnings.length).toBeGreaterThan(0);
    expect(result.warnings[0]).toContain(missingHash);
  });

  it("cleans package.json and moves peerDeps", async () => {
    await writeFile(
      join(codeDir, "src", "App.tsx"),
      `import { useState } from "react";\nexport function App() { return null; }\n`
    );
    await writeFile(
      join(codeDir, "package.json"),
      JSON.stringify({
        dependencies: { "unused-lib": "^1.0" },
        peerDependencies: { react: "^18", "react-dom": "^18" },
      })
    );

    const analysis: AnalysisResult = {
      reachableFiles: new Set(["src/App.tsx"]),
      unreachableFiles: new Set(),
      figmaAssets: new Map(),
      totalFiles: 1,
    };

    const result = await transform(codeDir, assetsDir, analysis);
    expect(result.cleanedPackageJson.dependencies.react).toBeDefined();
    expect(result.cleanedPackageJson.dependencies["react-dom"]).toBeDefined();
    expect(result.cleanedPackageJson.dependencies["unused-lib"]).toBeUndefined();
    expect(result.cleanedPackageJson.peerDependencies).toBeUndefined();
    expect(result.depsRemoved).toBe(1);
  });
});
