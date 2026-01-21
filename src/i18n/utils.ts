import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LOCALE, type LocaleCode } from "@i18n/locales";
import { type UIKeys, ui } from "@i18n/ui";

const defaultDateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

export function useI18n(astroLocale: string | undefined) {
  const locale = (astroLocale || DEFAULT_LOCALE) as LocaleCode;
  const dictionary = locale in ui ? ui[locale] : ui[DEFAULT_LOCALE];
  return {
    locale,
    t: (key: UIKeys) => dictionary[key],
    path: (path: string) => getRelativeLocaleUrl(locale, path),
    d: (
      date: Date,
      options: Intl.DateTimeFormatOptions = defaultDateOptions,
    ) => {
      return new Intl.DateTimeFormat(locale, options).format(date);
    },
  };
}
