import type { CollectionEntry } from "astro:content";

export function sortExperience(items: CollectionEntry<"experience">[]) {
  return [...items].sort((a, b) => {
    const aEnd = a.data.end ? a.data.end.valueOf() : Number.POSITIVE_INFINITY;
    const bEnd = b.data.end ? b.data.end.valueOf() : Number.POSITIVE_INFINITY;

    if (bEnd !== aEnd) return bEnd - aEnd;
    return b.data.start.valueOf() - a.data.start.valueOf();
  });
}

export function sortEducation(items: CollectionEntry<"education">[]) {
  return [...items].sort((a, b) => b.data.end.valueOf() - a.data.end.valueOf());
}
