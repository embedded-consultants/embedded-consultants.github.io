import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Publish instant. Later posts are 08:00 Europe/Belgrade. */
    date: z.coerce.date(),
    category: z.string(),
    metaTitle: z.string(),
    ogImage: z.string(),
    author: z.literal('Embedded Consultants Engineering Team'),
    tags: z.array(z.string()),
    updated: z.coerce.date().optional(),
    definition: z.string(),
    takeaways: z.array(z.string()).min(3).max(5),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3).max(4),
  }),
});

export const collections = { blog };
