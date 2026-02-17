import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { resolveDeps } from "../resolve-deps.js";

const TEST_DIR = join("/tmp", "fmx-test-resolve-deps");
const codeDir = TEST_DIR;
const srcDir = join(TEST_DIR, "src");

beforeEach(async () => {
  await mkdir(srcDir, { recursive: true });
});

afterEach(async () => {
  await rm(TEST_DIR, { recursive: true, force: true });
});

describe("resolveDeps", () => {
  it("strips @version suffixes from import specifiers and rewrites files", async () => {
    await writeFile(
      join(srcDir, "App.tsx"),
      [
        'import { motion } from "framer-motion";',
        'import { toast } from "sonner@2.0.3";',
        'import { Slot } from "@radix-ui/react-slot@1.1.2";',
        'import { cva } from "class-variance-authority@0.7.1";',
        "export function App() { return null; }",
      ].join("\n")
    );
    await writeFile(
      join(codeDir, "package.json"),
      JSON.stringify({
        name: "test",
        dependencies: { "framer-motion": "*", react: "^18.3.1", "react-dom": "^18.3.1" },
        devDependencies: { vite: "6.3.5", "@vitejs/plugin-react-swc": "^3.10.2" },
        scripts: { dev: "vite", build: "vite build" },
      })
    );

    const reachableFiles = new Set(["src/App.tsx"]);
    const result = await resolveDeps(codeDir, reachableFiles);

    const content = await readFile(join(srcDir, "App.tsx"), "utf-8");
    expect(content).toContain('from "sonner"');
    expect(content).toContain('from "@radix-ui/react-slot"');
    expect(content).toContain('from "class-variance-authority"');
    expect(content).toContain('from "framer-motion"');
    expect(content).not.toContain("@2.0.3");
    expect(content).not.toContain("@1.1.2");
    expect(content).not.toContain("@0.7.1");
    expect(result.importsFixed).toBe(3);
  });

  it("adds missing deps to package.json using version from imports", async () => {
    await writeFile(
      join(srcDir, "App.tsx"),
      [
        'import { toast } from "sonner@2.0.3";',
        'import { Slot } from "@radix-ui/react-slot@1.1.2";',
        'import { motion } from "framer-motion";',
        "export function App() { return null; }",
      ].join("\n")
    );
    await writeFile(
      join(codeDir, "package.json"),
      JSON.stringify({
        name: "test",
        dependencies: { "framer-motion": "*", react: "^18.3.1", "react-dom": "^18.3.1" },
        devDependencies: { vite: "6.3.5" },
        scripts: { dev: "vite" },
      })
    );

    const reachableFiles = new Set(["src/App.tsx"]);
    const result = await resolveDeps(codeDir, reachableFiles);

    const pkg = JSON.parse(await readFile(join(codeDir, "package.json"), "utf-8"));
    expect(pkg.dependencies.sonner).toBe("^2.0.3");
    expect(pkg.dependencies["@radix-ui/react-slot"]).toBe("^1.1.2");
    expect(pkg.dependencies["framer-motion"]).toBe("*"); // kept existing
    expect(result.depsAdded).toBe(2);
  });

  it("resolves wildcard versions when version found in imports", async () => {
    await writeFile(
      join(srcDir, "App.tsx"),
      'import { motion } from "framer-motion@11.18.0";\nexport default motion;\n'
    );
    await writeFile(
      join(codeDir, "package.json"),
      JSON.stringify({
        name: "test",
        dependencies: { "framer-motion": "*", react: "^18.3.1" },
      })
    );

    const reachableFiles = new Set(["src/App.tsx"]);
    const result = await resolveDeps(codeDir, reachableFiles);

    const pkg = JSON.parse(await readFile(join(codeDir, "package.json"), "utf-8"));
    expect(pkg.dependencies["framer-motion"]).toBe("^11.18.0");
    expect(result.wildcardResolved).toBe(1);
  });

  it("removes versioned aliases from vite.config.ts and keeps @ alias", async () => {
    await writeFile(
      join(srcDir, "App.tsx"),
      'import { useState } from "react";\nexport function App() { return null; }\n'
    );
    await writeFile(
      join(codeDir, "package.json"),
      JSON.stringify({ name: "test", dependencies: { react: "^18.3.1" } })
    );
    await writeFile(
      join(codeDir, "vite.config.ts"),
      [
        "import { defineConfig } from 'vite';",
        "import react from '@vitejs/plugin-react-swc';",
        "import path from 'path';",
        "",
        "export default defineConfig({",
        "  plugins: [react()],",
        "  resolve: {",
        "    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],",
        "    alias: {",
        "      'sonner@2.0.3': 'sonner',",
        "      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',",
        "      'lucide-react@0.487.0': 'lucide-react',",
        "      '@': path.resolve(__dirname, './src'),",
        "    },",
        "  },",
        "  build: {",
        "    target: 'esnext',",
        "    outDir: 'build',",
        "  },",
        "  server: {",
        "    port: 3000,",
        "    open: true,",
        "  },",
        "});",
      ].join("\n")
    );

    const reachableFiles = new Set(["src/App.tsx"]);
    const result = await resolveDeps(codeDir, reachableFiles);

    const viteConfig = await readFile(join(codeDir, "vite.config.ts"), "utf-8");
    expect(viteConfig).not.toContain("sonner@2.0.3");
    expect(viteConfig).not.toContain("@radix-ui/react-slot@1.1.2");
    expect(viteConfig).not.toContain("lucide-react@0.487.0");
    expect(viteConfig).toContain("'@'");
    expect(viteConfig).toContain("path.resolve");
    expect(result.viteAliasesCleaned).toBe(3);
  });

  it("generates basic vite.config.ts when missing", async () => {
    await writeFile(
      join(srcDir, "App.tsx"),
      'import { useState } from "react";\nexport function App() { return null; }\n'
    );
    await writeFile(
      join(codeDir, "package.json"),
      JSON.stringify({ name: "test", dependencies: { react: "^18.3.1" } })
    );
    // No vite.config.ts

    const reachableFiles = new Set(["src/App.tsx"]);
    await resolveDeps(codeDir, reachableFiles);

    const viteConfig = await readFile(join(codeDir, "vite.config.ts"), "utf-8");
    expect(viteConfig).toContain("defineConfig");
    expect(viteConfig).toContain("react()");
    expect(viteConfig).toContain("'@'");
  });

  it("generates package.json from scratch when missing", async () => {
    await writeFile(
      join(srcDir, "main.tsx"),
      [
        'import { createRoot } from "react-dom/client";',
        'import App from "./App.tsx";',
      ].join("\n")
    );
    await writeFile(
      join(srcDir, "App.tsx"),
      [
        'import { motion } from "framer-motion@11.18.0";',
        'import { clsx } from "clsx";',
        "export default function App() { return null; }",
      ].join("\n")
    );
    // No package.json created

    const reachableFiles = new Set(["src/main.tsx", "src/App.tsx"]);
    const result = await resolveDeps(codeDir, reachableFiles);

    expect(result.packageJsonGenerated).toBe(true);
    const pkg = JSON.parse(await readFile(join(codeDir, "package.json"), "utf-8"));
    expect(pkg.dependencies.react).toBeDefined();
    expect(pkg.dependencies["react-dom"]).toBeDefined();
    expect(pkg.dependencies["framer-motion"]).toBe("^11.18.0");
    expect(pkg.dependencies.clsx).toBe("*");
    expect(pkg.devDependencies.vite).toBeDefined();
    expect(pkg.scripts.dev).toBe("vite");
  });
});
