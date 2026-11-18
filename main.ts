// news-image-20261118 v3 entry (Node 22, standard library only).
// The poster for Wednesday 18 November 2026 is the entry.png beside this
// file (composed at build time: masthead + Kerch Bridge hero + 10 stories).
// This program copies it to /output/entry.png, deterministically.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);
// Sanity check: the copy must be byte-identical in size to the source.
if (statSync(src).size !== statSync(dst).size) {
  throw new Error('entry.png copy size mismatch');
}
