// The joke about the demo — writes exactly one line to /output/entry.txt.
// The file is the joke, exactly: no trailing newline, no extra text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent wrote the demo, the tests, and the docs — then asked me to review its work, so now I'm the intern.";

// The gate counts Unicode code points: 1 to 280, not only whitespace.
if ([...JOKE].length < 1 || [...JOKE].length > 280) {
  throw new Error("joke must be 1-280 code points");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
