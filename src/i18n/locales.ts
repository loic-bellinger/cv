import type { AstroUserConfig } from "astro";

export type Locales = NonNullable<AstroUserConfig["i18n"]>["locales"];

export const LOCALES = ["en", "fr"] as const satisfies Locales;

type I18nConfig = NonNullable<AstroUserConfig<typeof LOCALES>["i18n"]>;

export const DEFAULT_LOCALE =
  "en" as const satisfies I18nConfig["defaultLocale"];
