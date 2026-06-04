import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Accept a quoted string or a YAML-parsed date (PagesCMS may write either);
    // normalize to a "yyyy-MM-dd" string so templates can keep treating it as text.
    date: z.coerce.date().transform((d) => d.toISOString().slice(0, 10)),
    tags: z.array(z.string()),
    description: z.string().optional(),
    // draft: true hides the article from every listing, route, and tag page.
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
