#!/usr/bin/env bun
import { render, Text } from "ink";
import meow from "meow";

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

render(<Text>figmamake v1.0.0 - input: {cli.input[0]}</Text>);
