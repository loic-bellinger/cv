import type { AstroUserConfig } from "astro";

export type Locales = NonNullable<AstroUserConfig["i18n"]>["locales"];

export const LOCALES = ["en", "fr"] as const satisfies Locales;

// Equivalent to Astro's locale normalization: strings become codes, objects contribute their `codes` union.
type NormalizeLocales<T extends Locales> = {
  [K in keyof T]: T[K] extends string
    ? T[K]
    : T[K] extends { codes: readonly string[] }
      ? T[K]["codes"][number]
      : never;
}[number];

export type LocaleCode = NormalizeLocales<typeof LOCALES>;

export const DEFAULT_LOCALE = "en" as const satisfies LocaleCode;
