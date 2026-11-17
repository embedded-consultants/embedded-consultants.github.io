import type { CollectionEntry } from 'astro:content';

export function byDateDesc(a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>): number {
  return b.data.date.getTime() - a.data.date.getTime();
}

export function readingMinutes(markdown: string | undefined): number {
  if (!markdown) return 1;
  const text = markdown.replace(/[#>*_\[\]()`]/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Belgrade',
  }).format(date);
}
