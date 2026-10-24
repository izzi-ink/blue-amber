export const SITE = {
  name: 'Izzi Ink',
  tagline: 'Thoughts, doodles and experiments',
  description: 'The sketchbook of Izzi Koning: drawings, writing and design experiments, straight from the Moleskine.',
  instagram: 'https://www.instagram.com/izzidoodles/',
  github: 'https://github.com/izzi-ink',
  ilzeKoning: 'https://ilzekoning.com/',
  sugarStarCandy: 'https://sugarstarcandy.space/',
  book: {
    title: 'The Soulcage has a Mirror: Reflections on Consciousness',
    url: 'https://www.amazon.com/dp/B0DFDSVWSD',
  },
};

export const NAV = [
  { href: '/sketchbook', label: 'Sketchbook' },
  { href: '/paintbox', label: 'Paintbox' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
];

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
