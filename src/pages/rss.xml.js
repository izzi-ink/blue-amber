import rss from '@astrojs/rss';
import { SITE } from '../lib/site';
import { getNotes, getSketches } from '../lib/entries';

export async function GET(context) {
  const notes = (await getNotes()).map((note) => ({
    title: note.data.title,
    description: note.data.description,
    pubDate: note.data.date,
    link: `/notes/${note.id}/`,
  }));
  const sketches = (await getSketches()).map((sketch) => ({
    title: sketch.data.title,
    description: sketch.data.description,
    pubDate: sketch.data.date,
    link: `/sketchbook/${sketch.id}/`,
  }));
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: [...notes, ...sketches].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
  });
}
