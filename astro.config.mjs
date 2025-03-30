import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // Asegúrate que esta línea esté presente

export default defineConfig({
  site: 'https://victoreduardoresendizvillegas.github.io',
  base: '/victoreduardoresendizvillegas.github.io',
  integrations: [
    tailwind(),
    react() // Y esta también
  ]
});
