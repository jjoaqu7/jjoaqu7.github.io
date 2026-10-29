# Portfolio rules

## Scope and decision status

Apply these rules to portfolio project work where they help the requested
task. The owner's current request sets scope. Shared architecture does not
require equal length, identical assets or a section that lacks useful content.

Use `brief.md` for editorial choices. Its confirmed preferences are the source
of truth for the portfolio's direction; provisional choices remain adjustable.
Existing repository conventions below describe the current implementation,
not additional preferences inferred from the owner. Update them when an
authorized change replaces that implementation.

Keep this rule set shared across Claude Code, Codex and other agents. Store
provider-specific discovery or UI settings in adapters; do not fork the rules
or rely on a specific model's tools for editorial decisions.

## Project priorities and reader takeaways

- Use the latest owner-supplied CV and project chronology when choosing what
  to work on first. If no newer CV is supplied, consult the site's CV source
  and project records. Prioritize current and recent work in that context;
  do not use file modification times or available media as a proxy for recency.
- Revisit priorities when the owner adds work. Do not treat an early voice
  sample, a project's start date or its current `order` field as a permanent
  work queue. Do not reorder the site merely because the instruction setup
  defines this selection rule.
- Let evidence show research problem solving, practical system building and
  connections between experiments and software. Additional themes in the
  brief can guide selection where supported; they are not a mandatory list of
  claims for every project.

## Architecture

- Keep one shared page architecture. Reuse the existing Astro project renderer
  and schema instead of duplicating page layouts per project.
- Follow the confirmed core sequence:
  **problem -> my contribution -> visual results -> how**.
  Make the problem the first substantive prose, with a concise one-sentence
  opening that orients a newcomer. Immediately explain what the owner did or
  contributed, then go directly into the result images or video. Explain the
  detailed method, equations and implementation afterward. Allow
  project-specific headings and optional sections.
- The shared renderer places `summary` and automatic lead media before the
  Markdown body. Account for this when planning the opening: a problem heading
  in the body does not make the problem first if a different preamble or lead
  visual already precedes it. Similarly, the role metadata alone does not
  replace the contribution explanation before results. Reuse or adapt the
  shared behavior within scope.
- Interpret "results" according to the available evidence. A working artifact,
  demonstrated behavior or clearly labelled preliminary observation can lead
  that section. Do not invent a performance claim for an ongoing project, or
  add lessons, metrics or limitations merely to fill a template.
- Make the purpose and the owner's role easy to find. For collaborative work,
  distinguish what the project achieved from what the owner personally did.
  State the contribution after the problem, and reinforce attribution where
  individual result claims need it. Do not add a separate Credits section.
- Avoid repeating the same explanation in the summary, body, caption and
  facts sidebar. Each can serve a different reading need.
- Preserve page URLs and project relationships unless the task requires a
  change. Related projects can link to deeper explanations instead of repeating
  a complete fabrication, theory or electronics story.

## Writing and cadence

- Write for both hiring and research readers, including newcomers. Establish
  what the project does and why it matters before expecting specialist
  knowledge. Explain necessary terminology in plain language near first use.
- Retain technical precision. Introduce an equation or detailed method with
  the question it answers, and explain the meaning of the result. Place deeper
  technical material in the how section after visual results. Include essential
  conditions or qualifications next to a result when needed to interpret it.
- Use the brief's selected voice example: a plain-language problem followed by
  the action taken. Use "I" for evidenced personal work and "we" only for
  clearly attributed collaborative work. Avoid converting every sentence to
  first person mechanically. The full voice and cadence remain open to further
  calibration through examples.
- Build a consistent cadence with focused paragraphs, concrete verbs and
  nearby visuals. Let the reader's question determine detail; no fixed word
  count or media-to-text ratio has been agreed.
- Keep calendar chronology in work-period metadata, displayed as Month Year
  when the month is known. Do not repeat calendar dates, slide dates or
  presentation chronology in project narratives, captions or status text.
  Publication records retain their bibliographic dates. Do not invent a month
  for a year-only source or infer a degree end date.
- Omit autobiographical verification phrases such as "I recall" and "based
  on recollection" from public copy. State supported observations directly;
  label calculations as estimates or illustrative assumptions where needed,
  or omit an unsupported detail instead of turning it into a measured fact.
- Preserve wording and terminology for narrow edits. When a rewrite is
  requested, change structure or style as needed within that scope and explain
  the substantive editorial choices.
- Distinguish factual, logical, evidentiary and grammatical corrections from
  optional style suggestions. Avoid unsupported praise, inflated impact claims
  and generic claims of innovation or success.

## Show through media

- Prefer existing project images and videos when they communicate the point
  better than another paragraph. A visual needs a purpose, not a quota.
- Inspect the actual asset before making a claim about its contents. If it
  cannot be viewed or played, state that limitation when it affects the work;
  a filename alone does not establish what happened.
- Place media beside the explanation it supports. Keep captions concise and
  describe what the image shows. Include technical conditions only when they
  are needed to interpret it; avoid editing history and generic assurances.
- Keep enough text to explain motivation, design decisions, personal
  contribution and the meaning of a result. Visual preference does not remove
  the need for those explanations.
- Distinguish real measurements and demonstration footage from process
  schematics, illustrative calculations, archived examples and AI-retouched
  images. Do not present an illustration or generated visual as experimental
  evidence. Keep editing history and provenance in the internal media-source
  notes. Do not add public "AI-retouched", "AI-edited", "unaltered" or
  "no AI" boilerplate to captions or alt text. Preserve selected assets unless
  the owner requests a replacement, and flag other editing-history text in
  the source notes when reviewing it.
- Preserve scale bars, axes, units, legends and relevant context. Cropping or
  annotation must not remove information needed to interpret a result.
- Keep original research files unchanged. Consult the media-source notes and
  manifest before importing; preserve or extend the established allowlist and
  record source and meaningful transformations in the relevant records.
- Use descriptive alt text. Keep plots, schematics and interfaces legible on
  small screens, preserving their full content when cropping would mislead.
  Provide video labels and an accessible way to understand the essential
  observation, plus captions or a transcript for meaningful speech.
- Preserve user controls and reduced-motion support where present. Autoplay,
  looping and preferred presentation style have not yet been standardized.
  Verify playback speed from the source; the current shared lead-video caption
  automatically says "sped up", which must not be copied as a fact for a new
  clip without checking it.

## Evidence and attribution

- Ground numbers, status, chronology and contribution claims in the owner's
  statements or identifiable source material. Existing page copy is useful
  context, not independent verification of a disputed fact.
- Keep recorded measurements, recalled estimates and model predictions
  distinct. Do not turn qualitative observations into quantified performance,
  or a diagnostic example into validation of the full method.
- For uncertainty that affects a claim, qualify it near the claim or omit the
  unsupported claim. Keep editorial questions in the working brief or chat;
  do not publish internal verification notes as page content.
- Never infer authorship, project completion, publication acceptance or a
  presentation venue from a filename or folder date.

## Current repository constraints

- Content: `src/content/projects/<slug>/index.md`; shared renderer:
  `src/pages/projects/[slug].astro`; schema: `src/content.config.ts`.
- The schema defines required metadata and permitted values. Keep `coverAlt`
  when a cover exists. `showCover: false` hides automatic lead media when the
  figure appears in the body. Images alongside the Markdown can use relative
  paths; public video URLs start at `/media/`.
- Review shared-template changes across affected projects. Do not add required
  metadata unless there is a real shared need and existing pages are handled.
- `scripts/check-copy.mjs` currently rejects em dashes, "EWOD" and its expanded
  spelling, "micro-scale", "thermal systems", "two-phase flow", and language
  that suggests an MASc end date. Say "electrowetting". Review its warnings
  about colons in prose. Do not infer degree completion from today's date.
- Keep manuscripts in preparation in project status; publication records must
  satisfy the repository's publication conventions. Verify a status change
  rather than promoting it during a wording cleanup.
- Before using an asset or detailed source record publicly, follow the
  existing privacy audit and reproduction conventions. Import only relevant
  allowlisted material, not entire source directories.

## Verification

- For content, component, schema or styling changes, run `npm run build`, then
  `npm run audit`. Do not weaken either check to make a change pass. Report
  pre-existing failures separately from failures caused by the task.
- For layout or media changes, inspect affected rendered pages at desktop and
  narrow widths when a browser is available. Check readability, full figure
  context, captions and playback. If visual verification is unavailable,
  disclose that limit.
- For instruction-only changes, validate skill frontmatter, UI metadata and
  referenced paths. Check that confirmed and provisional choices are kept
  separate. A site build is unnecessary for these files.
