import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../config';
import { byDateDesc } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).sort(byDateDesc);
  return rss({
    title: 'Embedded Consultants — engineering notes',
    description: 'Notes on PCB design, parts and taking electronic products to production. Novi Sad, Serbia.',
    site: context.site ?? site.url,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: [post.data.category],
    })),
    customData: '<language>en</language>',
  });
}
