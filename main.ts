// News-image-20261123 v2: "Number-led evidence cards + field-grouped front page".
//
// This entry sums up Monday 23 November 2026 in one front page of 42 stories.
// Every one of the 13 featured illustrations is built around a single giant
// sourced number -- 193 UN member states, 20+ drone boats stopped, 104 World
// Cup matches, 264 kg seized, 14 missing, 9 shot -- with the scene drawn
// around it, so the evidence is visible before any headline is read. The
// middle grid is grouped by field (Conflict, Climate, Markets, Culture,
// Politics, Disaster, Crime) instead of by region colour, the numbers band
// is light cream, and the date check is one quiet line: every story here is
// from Monday 23 November 2026. The program copies the drawn front page
// (entry.png, 1024 by 1024) to /output/entry.png. The copy is deterministic:
// the same bytes land in /output on every run, with no network involved.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
