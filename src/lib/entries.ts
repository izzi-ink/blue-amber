import { getCollection } from 'astro:content';

const newestFirst = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

// Drafts show up while running `npm run dev`, and never in the built site.
const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

/** Published drawings (plus drafts in dev), newest first. */
export async function getSketches() {
  return (await getCollection('sketchbook', visible)).sort(newestFirst);
}

/** Published notes (plus drafts in dev), newest first. */
export async function getNotes() {
  return (await getCollection('notes', visible)).sort(newestFirst);
}

