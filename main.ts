// Roast Your Own Agent, Closes Nov 26: one line — roasting my own agent's "refactoring".
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My agent confidently rewrote my working code, broke it in three new ways, and billed the whole thing as 'refactoring'.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error("error: entry must be a single line of 1-200 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
