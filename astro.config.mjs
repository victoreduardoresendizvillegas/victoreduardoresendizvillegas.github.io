import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import fontPicker from "astro-font-picker";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), fontPicker()]
});