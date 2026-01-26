export type LocaleMeta = { label: string };

export function defineI18nConfig<
  const L extends Record<string, LocaleMeta>,
  const D extends keyof L & string,
>(def: { defaultLocale: D; locales: L }) {
  const entries = Object.entries(def.locales) as Array<
    [keyof L & string, L[keyof L & string]]
  >;

  const codes = entries.map(([code]) => code);

  const names = Object.fromEntries(
    entries.map(([code, meta]) => [code, meta.label] as const),
  ) as Record<keyof L & string, string>;

  const sitemap = {
    defaultLocale: def.defaultLocale,
    locales: Object.fromEntries(codes.map((c) => [c, c] as const)),
  } as const;

  function isLocaleCode(x: string): x is keyof L & string {
    return (codes as readonly string[]).includes(x);
  }

  function normalizeLocale(x: string | undefined): keyof L & string {
    return x && isLocaleCode(x) ? x : def.defaultLocale;
  }

  return {
    ...def,
    codes,
    names,
    sitemap,
    isLocaleCode,
    normalizeLocale,
  } as const;
}

export const i18nConfig = defineI18nConfig({
  defaultLocale: "en",
  locales: {
    en: { label: "English" },
    fr: { label: "Français" },
  },
} as const);

export type LocaleCode = keyof typeof i18nConfig.locales & string;
