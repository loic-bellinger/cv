import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LOCALE, type LocaleCode } from "@i18n/locales";
import { type UIKeys, ui } from "@i18n/ui";

const defaultDateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

function stripLocale(path: string, locale: LocaleCode) {
  // If default locale (and prefixDefaultLocale: false), path is already clean
  if (locale === DEFAULT_LOCALE) return path;

  // Handle root: "/fr" -> "/"
  if (path === `/${locale}`) return "/";

  // Handle subpaths: "/fr/projects" -> "/projects"
  if (path.startsWith(`/${locale}/`)) return path.slice(locale.length + 1);

  return path;
}

export function useI18n(astroLocale: string | undefined) {
  const locale = (astroLocale || DEFAULT_LOCALE) as LocaleCode;
  const dictionary = locale in ui ? ui[locale] : ui[DEFAULT_LOCALE];

  return {
    locale,
    t: (key: UIKeys) => dictionary[key],
    localizePath: (path: string) => getRelativeLocaleUrl(locale, path),
    d: (
      date: Date,
      options: Intl.DateTimeFormatOptions = defaultDateOptions,
    ) => {
      return new Intl.DateTimeFormat(locale, options).format(date);
    },
    translatePath: (targetLocale: LocaleCode, path: string) => {
      return getRelativeLocaleUrl(targetLocale, stripLocale(path, locale));
    },
  };
}
