import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each entry is a folder: src/content/<collection>/<slug>/index.md, with its images beside it.
const folders = (base: string) =>
  glob({ pattern: '*/index.md', base, generateId: ({ entry }) => entry.split('/')[0] });

// Drawings: pencil, Bic and monochrome ink only. `image` is the finished piece;
// `pencil` is the optional Moleskine original.
const sketchbook = defineCollection({
  loader: folders('./src/content/sketchbook'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string(),
      image: image(),
      alt: z.string(),
      pencil: image().optional(),
      pencilAlt: z.string().optional(),
      medium: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

// Writing: essays, poems, half-formed thoughts.
// `origin` marks notes first published elsewhere, like the old Sugar Star Candy astronomy blog.
const notes = defineCollection({
  loader: folders('./src/content/notes'),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    origin: z.enum(['sugar-star-candy']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { sketchbook, notes };
