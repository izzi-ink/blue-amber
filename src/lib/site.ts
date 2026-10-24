export const SITE = {
  name: 'Izzi Ink',
  tagline: 'Thoughts, doodles and experiments',
  description: 'The sketchbook of Izzi Koning: drawings, writing and design experiments, straight from the Moleskine.',
  github: 'https://github.com/izzi-ink',
  ilzeKoning: 'https://ilzekoning.com/',
};

export const NAV = [
  { href: '/sketchbook', label: 'Sketchbook' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
];

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
