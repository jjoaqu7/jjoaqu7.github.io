# Portfolio brief

This file carries decisions between sessions. Keep explicit preferences,
tentative directions and unanswered questions distinct. Record new answers
here instead of relying on chat memory. Change reusable rules only when the
answer establishes a reusable preference.

## Confirmed direction

Source: the owner's portfolio-agent setup request, interview answers and corrections,
2026-10-29.

- The portfolio should have consistent page architecture, language, tone and
  general cadence.
- The workflow must be agent-agnostic and usable in both Claude Code and Codex.
  Maintain one shared skill, rules and brief, with thin native discovery files.
- Prefer showing through images and videos, with text supporting the story.
  The owner has more media than is necessarily on the current pages.
- Apply the guidance when and where relevant; different projects cannot all
  support the same content.
- The audience includes both hiring and research readers. Cater to a
  nonexpert or newcomer, even when a specialist is also reading. Do not assume
  knowledge of the underlying field.
- Use a shared core sequence, with optional sections and project-specific
  headings.
- The core sequence is **problem -> my contribution -> visual results -> how**.
  The problem statement should be the first substantive prose readers encounter. Start
  with a concise one-sentence purpose/problem, explain what the owner did or
  contributed, then go directly into the result images and video. Explain
  methods, equations and technical material afterward.
- Readers should recognize research problem solving, practical system building
  and connections between experiments and software. The owner also asked the
  agent to identify further strengths supported by their work.
- Choose the first example and subsequent project work according to the CV
  and recency. The owner rejected choosing the contact-angle project for its
  convenient media. They plan to add more material later; keep priorities
  revisable rather than hardcoding a permanent queue.
- The selected voice example is plain-language storytelling that introduces
  the problem, then personal action. The owner preferred the second example
  below and described it as appropriate storytelling for a webpage and its
  short description.
- Build the portfolio agent and refine it through questions first. This setup
  task does not include rewriting the project pages.
- Preserve the owner's wording for narrow edits and distinguish necessary
  corrections from optional style changes, as recorded in root `AGENTS.md`.

## Provisional direction

- **Writing person:** Direct first person is the starting point. The owner
  said they were unsure but thought direct writing made sense for their own
  page, then selected the problem-led example using "I". Use that concrete
  example as the voice anchor; sentence length, degree of informality and the
  overall text budget still need calibration. Personal versus team attribution
  must remain accurate regardless.

## Selected voice anchor

The owner preferred this example on 2026-10-29:

> When a droplet vibrates, its contact angle changes too quickly to measure by
> hand. I used high-speed video to follow those changes frame by frame.

Carry over its plain language, problem-to-action progression and natural first
person. It is a tone sample, not a selected first project or a factual claim
that every project should copy. Preserve the progression from problem to
personal action before the visual results. Explain "contact angle" for a
newcomer if developing this particular page.

## Reader takeaways supported by the work

The first three themes were endorsed by the owner. The additional themes below
are editorial inferences from the current CV and project records, as requested.
Use them selectively, through concrete actions and evidence. They do not mean
that every project demonstrates every strength or that all team work was the
owner's contribution.

| Theme | Supporting work in the current records |
| --- | --- |
| Solve research problems | Electrowetting condensation research; ARIA for literature review and research planning |
| Build practical systems | Device fabrication, drive electronics, control software and experiments; deployed research and course tools |
| Connect experiments with software | High-speed droplet imaging, contact-angle analysis and coalescence tracking |
| Carry an idea through modelling, fabrication and testing | The linked electrowetting model, fabrication, electronics and condensation projects |
| Make measurements inspectable | Contact-angle frame inspection and diagnostic outputs; cardiac-image and signal review using existing MATLAB software |
| Work within real equipment constraints | Fabrication adapted to the in-house facility; integration with an existing lab wind tunnel |
| Collaborate and mentor | Co-developed Prof Notes AI, team capstone work, and student/intern mentoring recorded in the CV |
| Explain technical work to others | Teaching assistant work, invited seminar, research talks and posters |

Sources for these themes: `src/data/profile.ts` and the corresponding project
pages. Verify underlying evidence when developing specific public claims.

## CV and recency as the selection basis

- Use a newer owner-supplied CV when provided. Otherwise the current site CV is
  rendered by `src/pages/cv.astro` from `src/data/profile.ts` and publication
  records; a downloadable copy is at `public/files/ramirez-medina-cv.pdf`.
- The current CV leads research experience with ongoing MASc work at SEiL:
  electrowetting condensation and ARIA. It next lists the November to December
  2025 INPHYNI internship and earlier undergraduate research appointments.
  This is the current CV context, not a confirmed ranking of every page.
- The project records also include 2026 droplet-analysis work and 2026 outputs
  from ongoing research. Consider the latest supported activity and the CV
  context, not only each project's initial start date. Resolve material
  conflicts instead of inventing an end date or treating missing dates as new.
- No first complete example is selected. When that work is requested, derive
  the choice from the latest CV and recency. New material can change the queue.
- This selection policy does not itself change homepage ordering or project
  `order` values. A site-ordering task should apply the same rationale within
  the owner's requested scope.

## Current site context

Observed in the repository on 2026-10-29. These facts are not approved style
examples or a list of verified project claims.

- Eleven project folders share one Astro renderer and content schema.
- The shared page includes title, role, organization, summary, tags, optional
  lead media, Markdown body and optional facts, links, status and credits.
- Current body structures vary: for example, INPHYNI uses Context and Method;
  Prof Notes AI uses Idea, How it works and My part; acoustic focusing has a
  longer experimental narrative and calculation.
- Existing media includes experimental footage, microscopy, measurement
  overlays, plots, apparatus photographs, software architecture figures and
  fabrication diagrams. Some setup images are explicitly AI-retouched.
- Media provenance is recorded in `docs/portfolio-media-sources.md` and
  `assets.manifest.json`. Known source folders can be inspected when relevant
  to an authorized media task; do not assume every external path is available.
- No existing page has been chosen as the voice or architecture standard.

## Site structure preferences

Source: the owner's homepage, navigation and wrapping review request on
2026-10-29. These decisions also apply to the relevant shared site components.

- Keep selected work on the homepage and the full list on the dedicated
  Projects page. Remove the redundant homepage More projects section.
- Remove the generic skills-list sentence below the Projects heading; the
  project groups and individual descriptions provide the useful context.
- Give Contact its own page. Use quiet text links from the homepage and shared
  navigation, with email and professional profiles consolidated on Contact.
- Use more of the available desktop width and avoid extra narrow limits on
  publication entries. Keep small-screen layouts responsive and long-form
  explanation readable.

## Remaining interview topics

Ask only questions that remain useful after the recorded answers. Use concrete
examples and avoid making the owner repeat known project facts.

- Should detailed methods and equations in the how section be visible by
  default or presented as optional expandable detail? Their position after
  results is already settled.
- How brief should the main story feel? Use an actual opening and section
  sample to decide, rather than assigning a word limit without a reference.
- What should the agent avoid in language, beyond the existing wording checks?
  Are there favourite phrases or pages that sound like the owner?
- Which additional local media collections should be considered when the
  current assets leave a storytelling gap? What must remain private?
- Should short demonstration clips play on request or loop automatically?
  How should additional figures and detailed explanations be presented?

## Agreed architecture and flexible details

1. **Problem:** A concise purpose/problem statement first, understandable to a
   newcomer. The title and role can identify the project above it; avoid an
   unrelated preamble before the problem.
2. **My contribution:** A concise explanation of what the owner personally did
   or contributed, directly after the problem. Separate personal work from
   the team's work and from inherited equipment or software.
3. **Results:** Go straight into images or video showing what happened, what
   was built or what is demonstrated so far. Use enough explanation to tell a newcomer what to
   notice. Keep material conditions and qualifications beside the evidence.
4. **How:** The approach and decisions, followed by equations, detailed methods
   and technical material where the project supports them.

These are agreed narrative stages, not mandatory literal heading names.
Optional background, related work, supporting links and credits can be placed
where they serve the story without reversing the core sequence.

Keep contribution clear again near individual results when needed; the initial
contribution explanation belongs after the problem. No fixed section names,
number of figures, text budget, autoplay rule or requirements for lessons and
future work have been agreed.

## Completed project updates

- **2026-10-29**: Updated `electrowetting-force-model` (`src/content/projects/electrowetting-force-model/index.md`) to integrate the dual rationale from the droplet-imaging heat-transfer manuscript (`image_processing_ht_manuscript.docx`): the first-order 2D analytical model in Python (Shapely) was used for pre-fabrication photomask layout and chevron hand-off thresholds, while 3D finite-element electro-quasistatic simulations in COMSOL Multiphysics 6.3 across 206 positions were used to rationalize experimental observations of droplet collection potential wells. Validated via the matched-mesh water-minus-air subtraction technique and benchmarked against Pham et al.'s analytical series-capacitance model. Follows the agreed core sequence: problem statement first, personal contribution second, visual results third, and technical formulation fourth.
- **2026-10-29**: Updated `electrowetting-condensation` (`src/content/projects/electrowetting-condensation/index.md`) using thesis background from `MASc_dir/`. Formatted strictly to the core sequence: problem statement first (NCG diffusion resistance and vapor depletion layer), personal contribution second (distinguishing custom dual-mechanism surface, microfabrication, switching board, and experiments from inherited lab wind-tunnel hardware), visual coarsening results third (star collection vs. chevron transport, 46 s shedding time, IHTC-18 poster), and operating platform fourth.
- **2026-10-29**: Updated `electrowetting-drive-electronics` (`src/content/projects/electrowetting-drive-electronics/index.md`) using thesis Section 1.5.4 drafts from `MASc_dir/circuit/`. Formatted to the core sequence: problem statement first (switching capacitive microelectrodes without unenergized floating states or current spikes), personal contribution second (schematic, KiCad board, damping calculations, firmware and GUI), visual architecture third (3D PCB render, channel schematic, top copper layout), and electrical design fourth (active grounding via Form A/B relays, series resistor damping for 3.3-6.0 nF row loads, 37 mA surge limiting, chip pigtail bonding with silver epoxy, and 200 ms break-before-make firmware).
- **2026-10-29**: Updated `electrowetting-device-fabrication` (`src/content/projects/electrowetting-device-fabrication/index.md`) using cleanroom recipes and screening notes from `MASc_dir/fabrication/`. Formatted to the core sequence: problem statement first (continuous hydrophobic top surface with thin dielectric breakdown constraints), personal contribution second (mask layout, 7-step process development at YMF, multi-checkpoint probe-station screening, and O2 plasma ash reset), visual hardware third (cleanroom photo of diced 25x15 mm chips, stack cross-section, mask layout, process schematics), and process engineering fourth (LPCVD/PECVD parameters, I-V screening checkpoints A/B/C for antenna-effect/charging damage, and fluorine-free surface reset). All four Cluster 1 MASc projects are now updated and aligned.

## Next calibration artifact

When a complete example is requested, consult the latest CV and project dates
to select it. Draft the problem statement, contribution, visual result sequence
and how section in that order. Pair each asset with the point it communicates.
Use that sample to refine the guidance before broader application. Keep it in
working material unless a page-editing task is requested. Additional project
material can be incorporated when the owner provides it.
