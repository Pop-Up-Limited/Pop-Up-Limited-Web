// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const SITE_URL = 'https://pop-up-limited.github.io/Pop-Up-Limited-Web'; // TODO: replace if your GitHub username or repo differs
const SITE_BASE = '/Pop-Up-Limited-Web/'; // TODO: ensure this matches your GitHub Pages repo name
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