// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://MwjEnde.github.io',
  base: 'floris_site',
  vite: {
    plugins: [tailwindcss()]
  }
});