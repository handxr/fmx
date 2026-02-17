import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { fixStyles } from "../fix-styles.js";

const TEST_DIR = join("/tmp", "fmx-test-fix-styles");

beforeEach(async () => {
  await mkdir(join(TEST_DIR, "src", "styles"), { recursive: true });
});

afterEach(async () => {
  await rm(TEST_DIR, { recursive: true, force: true });
});

describe("fixStyles", () => {
  it("adds root height rules to theme.css", async () => {
    const css = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n";
    await writeFile(join(TEST_DIR, "src", "styles", "theme.css"), css);

    const transformedFiles = new Map<string, string>();
    const reachableFiles = new Set<string>();

    const result = await fixStyles(transformedFiles, reachableFiles, TEST_DIR);
    expect(result.totalFixes).toBe(1);
    expect(transformedFiles.get("src/styles/theme.css")).toContain("#root");
    expect(transformedFiles.get("src/styles/theme.css")).toContain("height: 100%");
  });

  it("skips theme.css if root height already present", async () => {
    const css = "#root {\n  height: 100%;\n}\n";
    await writeFile(join(TEST_DIR, "src", "styles", "theme.css"), css);

    const transformedFiles = new Map<string, string>();
    const reachableFiles = new Set<string>();

    const result = await fixStyles(transformedFiles, reachableFiles, TEST_DIR);
    expect(result.totalFixes).toBe(0);
  });

  it("applies fixes to already-transformed content", async () => {
    const css = "@tailwind base;\n";
    await writeFile(join(TEST_DIR, "src", "styles", "theme.css"), "original");

    const transformedFiles = new Map<string, string>();
    transformedFiles.set("src/styles/theme.css", css);
    const reachableFiles = new Set<string>();

    const result = await fixStyles(transformedFiles, reachableFiles, TEST_DIR);
    expect(result.totalFixes).toBe(1);
    const output = transformedFiles.get("src/styles/theme.css")!;
    expect(output).toContain("@tailwind base");
    expect(output).toContain("#root");
  });
});
