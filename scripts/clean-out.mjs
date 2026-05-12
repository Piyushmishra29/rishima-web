#!/usr/bin/env node
/**
 * Strips Next.js RSC payload debug artifacts from the static export.
 *
 * Removes:
 *   - __next.*.txt files (RSC stream prerenders)
 *   - <route>/index.txt files (companion text payloads)
 *
 * Keeps everything else intact. Runs after `next build`.
 */

import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "out";

let removed = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const s = statSync(full);
    if (s.isDirectory()) {
      walk(full);
      continue;
    }
    const remove =
      (name.startsWith("__next.") && name.endsWith(".txt")) ||
      name === "index.txt";
    if (remove) {
      unlinkSync(full);
      removed += 1;
    }
  }
}

try {
  walk(OUT_DIR);
  console.log(`✓ clean-out: removed ${removed} debug payloads from ${OUT_DIR}/`);
} catch (err) {
  if (err.code === "ENOENT") {
    console.warn(`! clean-out: ${OUT_DIR}/ not found — did you run 'next build'?`);
    process.exit(0);
  }
  throw err;
}
