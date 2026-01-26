// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { i18nConfig } from "./src/i18n/config";

export default defineConfig({
  site: "https://example.com",
  i18n: {
    locales: i18nConfig.codes,
    defaultLocale: i18nConfig.defaultLocale,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: i18nConfig.sitemap,
    }),
  ],
});
