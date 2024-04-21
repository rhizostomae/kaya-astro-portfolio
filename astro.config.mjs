import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  build: {
    format: 'file'
  },
  site: 'https://rhizostomae.github.io',
  base: '/kaya-astro-portfolio'
});