import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../config';
import { publishedPosts } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await publishedPosts();
  return rss({
    title: 'Embedded Consultants — engineering notes',
    description: 'Notes on electronics product development, PCB design, and taking a product to production.',
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
