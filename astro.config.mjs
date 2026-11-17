import { existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const root = dirname(fileURLToPath(import.meta.url));
const blogDir = join(root, 'src/content/blog');
const hasPosts = existsSync(blogDir) && readdirSync(blogDir).some((name) => name.endsWith('.md'));

/** Redirect shells stay out of the sitemap. /blog/ is a redirect while the collection is empty. */
const REDIRECT_PATHS = new Set([
  '/privacy-policy/',
  '/contact/',
  '/howwedoit/',
  '/portfolio/',
  '/blog/pcb-library-management/',
  '/blog/is32fl3202_review/',
  '/blog/tcke9_review/',
  '/blog/post-opening/',
  '/blog/IS32FL3202_review/',
  '/blog/TCKE9_review/',
  '/blog/IS32Fl3202_review/',
  ...(hasPosts ? [] : ['/blog/']),
]);

export default defineConfig({
  site: 'https://embedded-consultants.com',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !REDIRECT_PATHS.has(new URL(page).pathname),
    }),
  ],
});
