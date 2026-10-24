# Izzi Ink

The sketchbook at [izzi.ink](https://izzi.ink): drawings, notes and design experiments.

It uses the same "notebook" design system as [ilzekoning.com](https://ilzekoning.com) (cream dotted paper, black
cover, elastic band, index cards), loosened up with a blue ballpoint accent, handwritten headings and taped,
slightly crooked cards. All design tokens live in `src/styles/tokens.css`.

## Adding a drawing

Make a folder in `src/content/sketchbook/` and put the images next to an `index.md`:

```
src/content/sketchbook/my-drawing/
├── index.md
├── ink.webp       # the finished piece
└── pencil.jpg     # optional: the Moleskine photo
```

```md
---
title: My drawing
date: 2026-10-24
description: One line about it.
image: ./ink.webp
alt: What the drawing shows, for people who can't see it.
pencil: ./pencil.jpg          # optional; adds the "pencil → ink" comparison
pencilAlt: The pencil sketch.  # optional
medium: Pencil, then blue ballpoint
tags: [portrait]
---

A few words about it, if you like.
```

Images can be any size or format; Astro resizes and compresses them at build time.

## Adding a note

Same idea in `src/content/notes/<slug>/index.md`, with `title`, `date`, `description` and `tags`. Tag a note `poem`
to set it as a poem.

Set `draft: true` on any entry to hide it from the built site. Drafts still show (with a "draft" label) when you
run `npm run dev`, so you can see them in place before publishing. The drawings imported from Instagram start out
as drafts.

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Install dependencies (Node 22.12+)       |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the site to `./dist/`              |
| `npm run preview` | Preview the build                        |

## Credits

Flux Architect font by Clayton Cowan (freeware; see `public/fonts/flux-architect-LICENSE.txt`).
