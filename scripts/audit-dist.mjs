// Privacy audit of the built site (run after `npm run build`).
// Fails if anything private from the research folders shows up in dist/.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const DIST = join(ROOT, 'dist');

// Text that must never be published: phone number, collaborator correspondence,
// vendor quotes, internal facility pages and planning notes.
const FORBIDDEN = [
  /562[-. ]?1526/,
  /\bsajeer\b/i,
  /\bjerome\b/i,
  /rogue valley/i,
  /confluence/i,
  /\bquote\b/i,
  /YMF_Trion/i,
  /I2I|Idea-to-Innovation/i,
  /ARIA Interactive/i,
  /needs verification|were not reported|not specified in the manuscript/i,
  /\bEWOD\b/,
  /—/,
];

const TEXT = /\.(html|css|js|svg|xml|txt|json)$/;
const MAX_BYTES = 5 * 1024 * 1024;

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else yield p;
  }
}

let problems = 0;
let count = 0;
let total = 0;

for (const file of walk(DIST)) {
  const rel = relative(DIST, file).replaceAll('\\', '/');
  const size = statSync(file).size;
  count++;
  total += size;
  if (size > MAX_BYTES) {
    console.error(`LARGE  ${rel}  ${(size / 1048576).toFixed(1)} MB`);
    problems++;
  }
  if (!TEXT.test(rel)) continue;
  const text = readFileSync(file, 'utf8');
  for (const re of FORBIDDEN) {
    const m = text.match(re);
    if (m) {
      console.error(`FOUND  ${rel}  ${re}  "...${text.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, ' ')}..."`);
      problems++;
    }
  }
}

console.log(`audit: ${count} files, ${(total / 1048576).toFixed(1)} MB in dist/`);
if (problems) {
  console.error(`audit: ${problems} problem(s)`);
  process.exit(1);
}
console.log('audit: ok');
