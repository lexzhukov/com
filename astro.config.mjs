import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lexzhukov.com',
  integrations: [tailwind(), alpinejs(), sitemap(), icon(), robotsTxt()],
});
