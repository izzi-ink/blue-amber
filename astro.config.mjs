// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

export default defineConfig({
  site: 'https://izzi.ink',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  // Keep links to the old blog URLs working.
  redirects: {
    '/blog': '/notes',
    '/my-hero': '/notes/my-hero',
    '/the-ordinary-hero': '/notes/the-ordinary-hero',
    '/looking-up-at-antares': '/notes/looking-up-at-antares',
  },
});
