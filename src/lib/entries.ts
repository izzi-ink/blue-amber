import { getCollection } from 'astro:content';

const newestFirst = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

/** Published drawings, newest first. */
export async function getSketches() {
  return (await getCollection('sketchbook', ({ data }) => !data.draft)).sort(newestFirst);
}

/** Published notes, newest first. */
export async function getNotes() {
  return (await getCollection('notes', ({ data }) => !data.draft)).sort(newestFirst);
}
