#!/usr/bin/env bun
import { render, Text } from "ink";
import meow from "meow";
import { resolve } from "node:path";
import { validateInput } from "./pipeline/validate.js";
import { App } from "./app.js";

const cli = meow(
  `
  Usage
    $ figmamake <dir>

  Options
    -o, --output  Output directory name

  Examples
    $ figmamake ./my-export
    $ figmamake ./my-export -o my-app
`,
  {
    importMeta: import.meta,
    flags: {
      output: {
        type: "string",
        shortFlag: "o",
      },
    },
  }
);

if (cli.input.length === 0) {
  cli.showHelp();
  process.exit(1);
}

const dir = resolve(cli.input[0]);

try {
  const input = await validateInput(dir, cli.flags.output);
  const { waitUntilExit } = render(<App input={input} />);
  await waitUntilExit();
} catch (e: any) {
  render(<Text color="red">Error: {e.message}</Text>);
  process.exit(1);
}
