import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** Static HTML shells. Real posts live at the lowercase Hugo slugs. */
const REDIRECT_PATHS = new Set([
  '/privacy-policy/',
  '/contact/',
  '/howwedoit/',
  '/portfolio/',
  '/blog/IS32FL3202_review/',
  '/blog/TCKE9_review/',
  '/blog/IS32Fl3202_review/',
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
