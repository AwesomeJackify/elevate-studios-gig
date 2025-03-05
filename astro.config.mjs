// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  adapter: netlify(),
});