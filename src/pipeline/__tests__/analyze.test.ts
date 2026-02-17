import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { analyze } from "../analyze.js";

const TEST_DIR = join("/tmp", "fmx-test-analyze");
const srcDir = join(TEST_DIR, "src");

beforeEach(async () => {
  await mkdir(srcDir, { recursive: true });
});

afterEach(async () => {
  await rm(TEST_DIR, { recursive: true, force: true });
});

describe("analyze", () => {
  it("traces imports from main.tsx entry point", async () => {
    await writeFile(join(srcDir, "main.tsx"), `import { App } from "./App";\n`);
    await writeFile(join(srcDir, "App.tsx"), `export function App() { return null; }\n`);
    await writeFile(join(srcDir, "Unused.tsx"), `export function Unused() { return null; }\n`);

    const result = await analyze(TEST_DIR);
    expect(result.reachableFiles.has("src/main.tsx")).toBe(true);
    expect(result.reachableFiles.has("src/App.tsx")).toBe(true);
    expect(result.unreachableFiles.has("src/Unused.tsx")).toBe(true);
  });

  it("detects figma:asset imports", async () => {
    await writeFile(
      join(srcDir, "main.tsx"),
      `import hero from "figma:asset/abc123.png";\nexport default hero;\n`
    );

    const result = await analyze(TEST_DIR);
    expect(result.figmaAssets.has("abc123")).toBe(true);
    expect(result.figmaAssets.get("abc123")).toBe("png");
  });

  it("resolves @/ alias imports", async () => {
    await mkdir(join(srcDir, "components"), { recursive: true });
    await writeFile(join(srcDir, "main.tsx"), `import { Button } from "@/components/Button";\n`);
    await writeFile(join(srcDir, "components", "Button.tsx"), `export function Button() { return null; }\n`);

    const result = await analyze(TEST_DIR);
    expect(result.reachableFiles.has("src/components/Button.tsx")).toBe(true);
  });
});
