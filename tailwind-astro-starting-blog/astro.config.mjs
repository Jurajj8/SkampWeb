import { defineConfig } from 'astro/config';
import tailwindcss from 'tailwindcss';

// https://astro.build/config
export default defineConfig({
  base: '/',
  site: 'https://Jurajj8.github.io/SkampWeb/',
  output: 'static',

  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "resources/[name]-[hash][extname]", // ✅ CSS & JS do `resources/`
          entryFileNames: "resources/[name]-[hash].js",
        },
      },
    },
  },

  build: {
    format: "directory", // ✅ Dôležité! Vynúti generovanie `index.html`
    ssr: false, // 🔥 Zakáže generovanie SSR súborov
  }
});