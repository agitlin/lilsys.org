import { getCollection, type CollectionEntry } from 'astro:content';

export const ABOUT_TAG = 'about';

type Article = CollectionEntry<'articles'>;

const byDateDesc = (a: Article, b: Article) =>
  new Date(b.data.date).getTime() - new Date(a.data.date).getTime();

/**
 * Articles for public listings: not hidden (draft) and not the About page.
 * Used by the index, articles list, article routes, and tag pages so that
 * hidden and About-tagged entries never leak into normal browsing.
 */
export async function getPublishedArticles(): Promise<Article[]> {
  const all = await getCollection('articles');
  return all
    .filter((a) => !a.data.draft && !a.data.tags.includes(ABOUT_TAG))
    .sort(byDateDesc);
}

/** tag -> count, computed from published articles only (so `about` never shows). */
export async function getTagCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  for (const a of await getPublishedArticles()) {
    for (const t of a.data.tags) counts[t] = (counts[t] || 0) + 1;
  }
  return counts;
}

/**
 * The single About article — the one visible article tagged `about`.
 * Throws at build time if more than one qualifies, turning "one About per
 * site" into a hard rule that fails CI rather than silently shipping two.
 */
export async function getAboutArticle(): Promise<Article | undefined> {
  const all = await getCollection('articles');
  const about = all.filter((a) => !a.data.draft && a.data.tags.includes(ABOUT_TAG));
  if (about.length > 1) {
    throw new Error(
      `Only one visible article may carry the "${ABOUT_TAG}" tag; found ${about.length}: ` +
        about.map((a) => a.slug).join(', '),
    );
  }
  return about[0];
}
