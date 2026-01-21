import { type CollectionKey, getCollection } from "astro:content";
import { DEFAULT_LOCALE } from "@i18n/locales";

export async function getLocaleCollection<C extends CollectionKey>(
  collection: C,
  locale: string | undefined = DEFAULT_LOCALE,
) {
  const prefix = `${locale}/`;
  return getCollection(collection, ({ id }) => id.startsWith(prefix));
}
