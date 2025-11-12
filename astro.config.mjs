// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const SITE_URL = 'https://product-photo-generator.com';
const SITE_BASE = '/'; // Custom domain uses root path
const SITE_ORIGIN = new URL(SITE_URL).origin;
const SITE_HOSTNAME = new URL(SITE_URL).hostname;

export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,
  integrations: [
    sitemap(),
    robotsTxt({
      host: SITE_HOSTNAME,
      sitemap: [new URL('sitemap-index.xml', SITE_URL).href],
      policy: [{ userAgent: '*', allow: '/' }]
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});