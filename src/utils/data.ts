import {
  type CollectionEntry,
  type CollectionKey,
  getCollection,
  getEntry,
} from "astro:content";
import { i18nConfig } from "@i18n/config.ts";

/**
 * Helper to normalize locale and fetch a single entry
 */
export async function getEntryDataByLocale<C extends CollectionKey>(
  collection: C,
  astroLocale: string | undefined,
): Promise<CollectionEntry<C>["data"]> {
  const locale = i18nConfig.normalizeLocale(astroLocale);
  const entry = await getEntry(collection, locale);
  if (!entry)
    throw new Error(
      `Could not load collection "${collection}" for locale: ${locale}`,
    );
  return entry.data;
}

/**
 * Helper to fetch a collection filtered by locale prefix
 */
export async function getCollectionByLocale<C extends CollectionKey>(
  collection: C,
  astroLocale: string | undefined,
) {
  const locale = i18nConfig.normalizeLocale(astroLocale);
  const prefix = `${locale}/`;
  return getCollection(collection, ({ id }) => id.startsWith(prefix));
}
