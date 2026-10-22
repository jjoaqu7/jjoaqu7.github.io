import { defineCollection, reference, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

// Dates are "YYYY" or "YYYY-MM". The end of a project can also be "present".
const when = z.coerce.string().regex(/^\d{4}(-\d{2})?$/, 'use YYYY or YYYY-MM');

// One folder per project: src/content/projects/<slug>/index.md plus its images.
const projects = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        summary: z.string(),
        period: z.enum(['grad', 'undergrad']),
        track: z.enum(['research', 'software']),
        start: when,
        // Leave end out to hide the dates on the page (used for MASc thesis work, which shows no end date).
        end: z.union([when, z.literal('present')]).optional(),
        role: z.string(),
        org: z.string(),
        tags: z.array(z.string()).default([]),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        // "diagram" shows the cover whole on a light plate; "photo" crops it to fill. SVG covers default to diagram.
        coverStyle: z.enum(['photo', 'diagram']).optional(),
        // Hide automatic lead media when the image is placed in the write-up.
        showCover: z.boolean().default(true),
        // Path of a looping clip under public/, e.g. /media/clip.mp4. The cover is its poster frame.
        video: z.string().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(100),
        facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
        links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
        status: z.string().optional(),
        credits: z.string().optional(),
        draft: z.boolean().default(false),
      })
      .refine((p) => !p.cover || p.coverAlt, { message: 'coverAlt is required when cover is set', path: ['coverAlt'] }),
});

// Papers, preprints, talks, posters and media mentions. Published items only.
const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    kind: z.enum(['paper', 'preprint', 'talk', 'poster', 'media']),
    title: z.string(),
    authors: z.string().optional(),
    venue: z.string(),
    date: when,
    href: z.string().optional(),
    note: z.string().optional(),
    project: reference('projects').optional(),
    selected: z.boolean().default(false),
  }),
});

export const collections = { projects, publications };
