# jjoaqu7.github.io

Personal site of Joaquin Ramirez-Medina, built with [Astro](https://astro.build) 5 and published to GitHub Pages.

## Run it locally

```
npm install        # once
npm run dev        # live preview at http://localhost:4321, reloads on save
npm run build      # wording check + build into dist/
npm run audit      # privacy check of dist/
npm run preview    # serve the built dist/
```

Astro 5 runs on Node 20. Upgrading to Astro 7 later needs Node 22.22 or newer.

## Personalize the portfolio

The main site uses the classic, light portfolio layout. Compare the five palettes
at `/style-lab/colorways/`. Set `defaultColorway` in `src/data/colorways.ts` to
`slate-blue`, `forest`, `navy`, `clay`, or `plum` to change the default everywhere.
For a temporary full-site preview, use `/?colorway=forest` (or another palette id).

To add a headshot, place the image at `public/images/headshot.jpg`, then set
`profile.headshot` in `src/data/profile.ts` to `/images/headshot.jpg`. An empty
value displays the placeholder. The portrait uses a 190 by 220 crop.

The introduction describes the current MASc research without assuming the degree
has been completed. Lab affiliations and supervision information remain in the CV.

## Add a project

1. Make a folder `src/content/projects/<short-name>/`.
2. Put `index.md` in it, plus any images.
3. Start `index.md` with this block (copy it from an existing project):

```yaml
---
title: Short descriptive title
summary: One or two sentences for the card on the home page.
period: grad          # grad or undergrad, sets the "All work" group
track: research       # research or software, sets the home page column
start: 2025-01        # YYYY or YYYY-MM
end: present          # YYYY, YYYY-MM or present
role: What you did
org: Lab or company
tags: [a, b, c]
cover: ./cover.jpg    # optional, needs coverAlt
coverAlt: What the image shows
order: 10             # position in its home page column, lower comes first
facts:                # optional "At a glance" box
  - label: Result
    value: Something checkable
links:                # optional
  - label: Paper
    href: https://doi.org/...
status: Optional line, e.g. a manuscript in preparation.
---
```

4. Write the page below the block in Markdown. For a figure, put the image on one line and an italic caption on the next line:

```markdown
![What the image shows](./figure.png)
*Caption text.*
```

Several image lines in a row, followed by one caption line, become a grid.

Keep captions focused on what the image shows. Record editing history and media
provenance in `docs/portfolio-media-sources.md`. Project pages do not have a
Credits section. Keep project chronology in the work-period metadata rather
than repeating calendar dates in the main narrative and captions.

The build stops with a clear message if a field is missing or a date is malformed. Set `draft: true` to hide a page without deleting it.

## Add a paper, talk or media mention

Append an entry to `src/data/publications.yaml`. Only published work goes there; manuscripts in preparation belong in the `status` line of their project. Set `selected: true` to show it on the home page and `project: <short-name>` to link it to a project page.

## CV page and PDF

Education, positions, teaching, awards and skills live in `src/data/profile.ts`. The PDF at `public/files/ramirez-medina-cv.pdf` is printed from the `/cv/` page (see "Regenerate the CV PDF" below), so update the page first.

### Regenerate the CV PDF

With `npm run preview` running:

```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --no-pdf-header-footer --print-to-pdf=public\files\ramirez-medina-cv.pdf http://127.0.0.1:4321/cv/
```

Then build again.

## Images and video from the research folders

`assets.manifest.json` lists every file the site takes from `MASc_dir`, `resume_cv`, `ew_analytical` and other folders, with any edits (resizing, re-encoding, text fixes in SVGs). Nothing else is copied. To refresh them:

```
python scripts/import_assets.py              # everything
python scripts/import_assets.py poster       # only entries whose target contains "poster"
```

Needs Python with Pillow and PyMuPDF, plus ffmpeg for video (the manifest points at the copy bundled in `droplet-imaging/.venv`).

## Wording rules

`scripts/check-copy.mjs` runs before every build and stops it on em-dashes, "EWOD", "micro-scale", "thermal systems", "two-phase flow", or anything that looks like an MASc end date. It also warns about colons in prose.

## Deploy

Pushing to `main` on GitHub runs `.github/workflows/deploy.yml`, which builds, audits and publishes to https://jjoaqu7.github.io. In the repository settings, Pages must be set to "GitHub Actions" as the source.
