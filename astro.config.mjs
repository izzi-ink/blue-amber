// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

// Drawings moved to the Paintbox used to live under /sketchbook; keep those links working.
const drawings = './src/content/sketchbook';
const paintboxRedirects = Object.fromEntries(
  readdirSync(drawings)
    .filter((slug) => /^category: paintbox$/m.test(readFileSync(`${drawings}/${slug}/index.md`, 'utf8')))
    .map((slug) => [`/sketchbook/${slug}`, `/paintbox/${slug}`]),
);

export default defineConfig({
  site: 'https://izzi.ink',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  // Keep links to the old blog URLs working.
  redirects: {
    '/blog': '/notes',
    ...paintboxRedirects,
    '/looking-up-at-antares': '/notes/looking-up-at-antares',
  },
});
