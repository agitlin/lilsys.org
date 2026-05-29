import { c as createAstro, b as createComponent, r as renderComponent, i as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BbymTkdn.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BzXOh1PM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://lilsys.org");
async function getStaticPaths() {
  const articles = await getCollection("articles");
  const tags = [...new Set(articles.flatMap((a) => a.data.tags))];
  return tags.map((tag) => ({
    params: { tag },
    props: { articles: articles.filter((a) => a.data.tags.includes(tag)).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()) }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { articles } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `#${tag}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="tag-page-title">Articles tagged <span>#${tag}</span></h1> <p style="color: var(--muted); margin-bottom: 2rem;">${articles.length} article${articles.length !== 1 ? "s" : ""}</p> <ul class="article-list"> ${articles.map((article) => renderTemplate`<li class="article-item"> <h2><a${addAttribute(`/articles/${article.slug}`, "href")}>${article.data.title}</a></h2> <div class="article-meta">${article.data.date}</div> ${article.data.description && renderTemplate`<p class="article-desc">${article.data.description}</p>`} </li>`)} </ul> <a href="/tags" class="back-link">← All tags</a> ` })}`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/tags/[tag].astro", void 0);

const $$file = "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
