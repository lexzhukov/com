import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lexzhukov.com',
  integrations: [
    partytown(),
    react(),
    sitemap(),
    tailwind(),
    icon(),
    robotsTxt(),
  ],
});
