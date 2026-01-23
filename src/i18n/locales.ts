import type { AstroUserConfig } from "astro";

export type Locales = NonNullable<AstroUserConfig["i18n"]>["locales"];

export const LOCALES = ["en", "fr"] as const satisfies readonly string[] & Locales;

export type LocaleCode = (typeof LOCALES)[number];

export const DEFAULT_LOCALE = "en" as const satisfies LocaleCode;

export const LOCALE_NAMES: Record<LocaleCode, string> = {
  en: "English",
  fr: "Français",
};

export const SITEMAP_I18N = {
  defaultLocale: DEFAULT_LOCALE,
  locales: Object.fromEntries(LOCALES.map((l) => [l, l] as const)),
} as const;