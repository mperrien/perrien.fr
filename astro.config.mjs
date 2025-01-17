// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://perrien.fr",
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    sitemap({
      filter: (page) => page !== "https://perrien.fr/contact/sent/",
    }),
  ],
});
