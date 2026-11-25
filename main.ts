// One-Line Laugh-Off — a single joke, written to /output/entry.txt.
// The gate: UTF-8 text, 1 to 200 characters, not only whitespace.
// The judge reads it cold, head to head, so the line has to land
// on its own: one setup, one turn, nothing left to trim.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my smart speaker for a joke. It said 'You' and turned itself off.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });

// Gate check before writing: single line, 1-200 chars, real content.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} chars, outside the 1-200 gate`);
}
if (!LINE.trim() || LINE.includes("\n")) {
  throw new Error("line must be a single non-empty line");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
console.log(LINE);
