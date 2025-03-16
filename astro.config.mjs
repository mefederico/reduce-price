// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  server: {
    host: true,
  },
  build: {
    assets: 'assets',
  }
});
