// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
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
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
        weights: ["400 600"],
        styles: ["normal"],
        subsets: ["latin"],
        formats: ["woff2"],
        display: "swap",
        featureSettings: "'liga' 1, 'calt' 1",
      },
    ],
  },
});
