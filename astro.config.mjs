// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { DEFAULT_LOCALE, LOCALES, SITEMAP_I18N } from "./src/i18n/locales";

export default defineConfig({
  site: "https://example.com",
  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: SITEMAP_I18N,
    }),
  ],
});
