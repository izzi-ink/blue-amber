import { getCollection, type CollectionEntry } from 'astro:content';

const newestFirst = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

// Drafts show up while running `npm run dev`, and never in the built site.
const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

/** The two sections drawings live in. */
export const CATEGORIES = {
  sketchbook: { name: 'Sketchbook', href: '/sketchbook' },
  paintbox: { name: 'Paintbox', href: '/paintbox' },
} as const;

/** Published drawings (plus drafts in dev), newest first, optionally from one section. */
export async function getSketches(category?: keyof typeof CATEGORIES) {
  const all = await getCollection('sketchbook', visible);
  return all.filter((s) => !category || s.data.category === category).sort(newestFirst);
}

/** A drawing's page, under its section. */
export function drawingHref(sketch: CollectionEntry<'sketchbook'>) {
  return `${CATEGORIES[sketch.data.category].href}/${sketch.id}`;
}

/** Published notes (plus drafts in dev), newest first. */
export async function getNotes() {
  return (await getCollection('notes', visible)).sort(newestFirst);
}

/** How the finished piece was made, for the "pencil → …" labels. */
export function finishLabel(medium?: string) {
  return medium?.toLowerCase().includes('digital') ? 'colour' : 'ink';
}
