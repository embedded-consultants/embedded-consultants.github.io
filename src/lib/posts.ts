import { getCollection, type CollectionEntry } from 'astro:content';

export const TEAM = 'Embedded Consultants Engineering Team';

export function byDateDesc(a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>): number {
  return b.data.date.getTime() - a.data.date.getTime();
}

/** A post is public once its publish instant has passed. Future files stay out of the build. */
export function isPublished(date: Date, now = new Date()): boolean {
  return date.getTime() <= now.getTime();
}

export async function publishedPosts(now = new Date()): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog');
  return posts.filter((post) => isPublished(post.data.date, now)).sort(byDateDesc);
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
