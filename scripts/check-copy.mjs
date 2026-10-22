// Enforces the site's wording rules before every build (npm run build runs this first).
// Errors stop the build. Warnings are printed for a human to review.
//
// Rules come from the verified fact sheet:
//   - no em-dashes anywhere
//   - say "electrowetting", never "EWOD"
//   - never "micro-scale", "thermal systems" or "two-phase flow"
//   - never state or imply an MASc end date
//   - no colons in prose sentences (warning only; titles of cited papers are allowed)

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const SCAN = ['src'];
const EXT = /\.(md|mdx|astro|ts|yaml|yml|svg)$/;

const ERRORS = [
  { re: /\u2014/, why: 'em-dash' },
  { re: /\bEWOD\b|electrowetting[- ]on[- ]dielectric/i, why: 'say "electrowetting", not EWOD' },
  { re: /micro-scale/i, why: '"micro-scale" is not used' },
  { re: /thermal systems/i, why: '"thermal systems" is not used' },
  { re: /two-phase flow/i, why: '"two-phase flow" does not describe this work' },
  { re: /\b(defen[cs]e|graduation|graduating|graduates?\s+(in|by)|completion|expected\s+(to\s+)?(finish|complete|graduate|defend))\b[^\n]{0,40}\b20[2-9]\d\b/i, why: 'possible MASc end date' },
  { re: /\bMASc\b[^\n]{0,60}\bto (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)?\s?20[2-9]\d\b/i, why: 'MASc dates must end in "present"' },
];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (EXT.test(name)) yield p;
  }
}

let errors = 0;
let warnings = 0;

for (const top of SCAN) {
  for (const file of walk(join(ROOT, top))) {
    const rel = relative(ROOT, file).replaceAll('\\', '/');
    const lines = readFileSync(file, 'utf8').split(/\r?\n/);
    let inFrontmatter = false;
    let fmCount = 0;

    lines.forEach((line, i) => {
      for (const { re, why } of ERRORS) {
        if (re.test(line)) {
          console.error(`ERROR ${rel}:${i + 1}  ${why}\n      ${line.trim().slice(0, 140)}`);
          errors++;
        }
      }

      // Colon check, Markdown prose only.
      if (!rel.endsWith('.md')) return;
      if (line.trim() === '---' && fmCount < 2) {
        fmCount++;
        inFrontmatter = fmCount === 1;
        return;
      }
      if (inFrontmatter || line.startsWith('#') || line.startsWith('![') || line.startsWith('[![')) return;
      const prose = line
        .replace(/\]\([^)]*\)/g, '](link)') // link targets
        .replace(/https?:\/\/\S+/g, 'url')
        .replace(/\d:\d/g, '0'); // times and ratios like 1:31
      if (/[A-Za-z)]: /.test(prose)) {
        console.warn(`warn  ${rel}:${i + 1}  colon in prose\n      ${line.trim().slice(0, 140)}`);
        warnings++;
      }
    });
  }
}

if (errors) {
  console.error(`\ncheck-copy: ${errors} error(s), ${warnings} warning(s). Fix the errors before building.`);
  process.exit(1);
}
console.log(`check-copy: ok (${warnings} warning(s))`);
