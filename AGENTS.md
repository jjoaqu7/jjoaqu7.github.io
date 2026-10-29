# Working preferences

- Give candid, evidence-based assessments. Do not agree with the user, supervisors, reviewers, or other authorities merely to be agreeable. Explain disagreements and uncertainty; do not manufacture criticism to sound candid.
- When reviewing or editing writing, distinguish necessary factual, logical, evidentiary, and grammatical corrections from optional stylistic changes. Preserve the user's wording, terminology, structure, and surrounding text unless a change is requested or necessary. Explain why each substantive change is needed or improves the text.
- Pass these preferences to delegated agents, including agents that do not inherit the full conversation.

# Portfolio agent

For planning, writing, editing, reviewing or implementing project pages in this
repository, use the `portfolio-agent` skill at
`skills/portfolio-agent/SKILL.md`. Read it directly if it is not listed in
the current session's skill catalog. Also use it when refining the portfolio
agent's instructions or interviewing the user about portfolio preferences.

The portfolio agent owns consistency of page architecture, writing and visual
storytelling within the requested task. This is a repository-local role and
workflow; it does not require spawning a separate agent.

The shared skill's `references/rules.md` contains the editorial and implementation
rules. Its `references/brief.md` records confirmed preferences, provisional
choices and open questions. Keep those states distinct and update the brief
when the user provides answers. Apply the rules where relevant to the project;
do not force every page to contain the same material.

Project pages serve both hiring and research audiences, including readers with
no prior knowledge of the topic. Use a shared core sequence with optional
sections and project-specific headings. Prefer images and videos that carry
the explanation, supported by concise text. The agreed sequence is problem
first, personal contribution next, visual results immediately afterward, then
how it works and technical detail. Use
plain-language, problem-led storytelling with personal action where relevant;
the brief holds the selected voice example and remaining calibration choices.

Choose project work and examples using the current CV and recency. Read the
latest supplied CV, or the site's CV sources when no newer version is supplied.
Do not pick a first project because its media is easiest to use, and do not
hardcode a permanent queue while the owner is still adding work.

These instructions govern project work and shared components that affect it.
Do not extend project-page editorial rules to the CV, publications, personal
gallery or unrelated work without a relevant task.

# Shared workflow across tools

`AGENTS.md` and `skills/portfolio-agent/` are the shared instructions for any
agent that can read repository files. Keep portfolio behavior and decisions in
these files, independent of model, provider, tool names or invocation syntax.

- Codex discovers the thin adapter at `.agents/skills/portfolio-agent/SKILL.md`.
- Claude Code imports this file through root `CLAUDE.md` and discovers the thin adapter at `.claude/skills/portfolio-agent/SKILL.md`.
- Both skill adapters point to `skills/portfolio-agent/SKILL.md`; they do not maintain separate rules or briefs. Tool-specific UI metadata belongs only in its adapter directory.
- Other agents can start by reading this file and the shared skill directly. Use the host's available file, image, browser and shell tools; no particular provider or plugin is required to follow the editorial workflow.

Discovery references: [Claude Code imports](https://code.claude.com/docs/en/memory#import-additional-files),
[Claude Code skills](https://code.claude.com/docs/en/skills#choose-where-skills-load)
and [Codex skill discovery](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills).

# Repository context

- Project content lives in `src/content/projects/<slug>/index.md`, with local images alongside it.
- `src/pages/projects/[slug].astro` renders the shared page; `src/content.config.ts` defines the content schema. Prefer the existing shared architecture.
- Consult `docs/portfolio-media-sources.md` and `assets.manifest.json` for media provenance and import sources. Inspect relevant assets before describing what they show.
- The site CV is rendered by `src/pages/cv.astro` from `src/data/profile.ts` and publication records; the downloadable copy is `public/files/ramirez-medina-cv.pdf`. Prefer a newer owner-supplied CV when available and resolve material chronology conflicts before ordering work.
- Preserve existing terminology and degree-status constraints enforced by `scripts/check-copy.mjs`. Do not disable checks to accommodate new copy.
- For site content or implementation changes, run `npm run build`, then `npm run audit`. For instruction-only changes, validate the skill and its references; a site build is unnecessary.
- Pushing to `main` triggers GitHub Pages deployment. Setting up this agent does not include a push or publication.
