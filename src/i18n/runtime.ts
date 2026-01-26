import { getRelativeLocaleUrl } from "astro:i18n";
import { i18nConfig, type LocaleCode } from "./config";

export const i18n = {
  ...i18nConfig,

  use(astroLocale: string | undefined) {
    const locale = i18nConfig.normalizeLocale(astroLocale) as LocaleCode;

    const otherLocales = i18nConfig.codes.filter((c) => c !== locale);

    function href(path: string) {
      return getRelativeLocaleUrl(locale, path);
    }

    function hrefTo(targetLocale: LocaleCode, pathname: string) {
      const segments = pathname.split("/").filter(Boolean);

      if (segments[0] === locale) segments.shift();

      return getRelativeLocaleUrl(targetLocale, segments.join("/"));
    }

    function formatDate(
      date: Date,
      options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" },
    ) {
      return new Intl.DateTimeFormat(locale, options).format(date);
    }

    return {
      href,
      hrefTo,
      formatDate,
      otherLocales,
    } as const;
  },
} as const;
