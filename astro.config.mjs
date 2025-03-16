// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mefederico.github.io',  // Reemplaza "tu-usuario" con tu nombre de usuario de GitHub
  base: '/reduce-price',  // Reemplaza con el nombre de tu repositorio (o elimina esta línea si usas un dominio personalizado)
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
