import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { validateInput } from "../validate.js";

const TEST_DIR = join("/tmp", "fmx-test-validate");

beforeEach(async () => {
  await mkdir(TEST_DIR, { recursive: true });
});

afterEach(async () => {
  await rm(TEST_DIR, { recursive: true, force: true });
});

describe("validateInput", () => {
  it("throws if directory does not exist", async () => {
    await expect(validateInput("/tmp/nonexistent-dir-fmx")).rejects.toThrow(
      "Directory not found"
    );
  });

  it("throws if no .zip or .make files found", async () => {
    await writeFile(join(TEST_DIR, "random.txt"), "hello");
    await expect(validateInput(TEST_DIR)).rejects.toThrow(
      "No .zip or .make files found"
    );
  });

  it("throws if .zip exists but no .make", async () => {
    await writeFile(join(TEST_DIR, "project.zip"), "");
    await expect(validateInput(TEST_DIR)).rejects.toThrow(
      "No .make file found"
    );
  });

  it("throws if .make exists but no .zip", async () => {
    await writeFile(join(TEST_DIR, "project.make"), "");
    await expect(validateInput(TEST_DIR)).rejects.toThrow(
      "No .zip file found"
    );
  });

  it("throws if no matching pair", async () => {
    await writeFile(join(TEST_DIR, "foo.zip"), "");
    await writeFile(join(TEST_DIR, "bar.make"), "");
    await expect(validateInput(TEST_DIR)).rejects.toThrow(
      "No matching .zip/.make pair"
    );
  });

  it("returns matched pair and output dir", async () => {
    await writeFile(join(TEST_DIR, "project.zip"), "");
    await writeFile(join(TEST_DIR, "project.make"), "");
    const result = await validateInput(TEST_DIR);
    expect(result.zipPath).toBe(join(TEST_DIR, "project.zip"));
    expect(result.makePath).toBe(join(TEST_DIR, "project.make"));
    expect(result.baseName).toBe("project");
    expect(result.outputDir).toBe(join(TEST_DIR, "project"));
  });

  it("respects output override", async () => {
    await writeFile(join(TEST_DIR, "project.zip"), "");
    await writeFile(join(TEST_DIR, "project.make"), "");
    const result = await validateInput(TEST_DIR, "my-app");
    expect(result.outputDir).toBe(join(TEST_DIR, "my-app"));
  });

  it("throws if output dir already exists", async () => {
    await writeFile(join(TEST_DIR, "project.zip"), "");
    await writeFile(join(TEST_DIR, "project.make"), "");
    await mkdir(join(TEST_DIR, "project"));
    await expect(validateInput(TEST_DIR)).rejects.toThrow(
      "Output directory already exists"
    );
  });
});
