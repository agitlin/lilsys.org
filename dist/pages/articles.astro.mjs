import { b as createComponent, r as renderComponent, i as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BbymTkdn.mjs';
import { g as getCollection } from '../chunks/_astro_content_BzXOh1PM.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articles = (await getCollection("articles")).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Articles" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 2rem;">Articles</h1> <ul class="article-list"> ${articles.map((article) => renderTemplate`<li class="article-item"> <h2><a${addAttribute(`/articles/${article.slug}`, "href")}>${article.data.title}</a></h2> <div class="article-meta">${article.data.date}</div> ${article.data.description && renderTemplate`<p class="article-desc">${article.data.description}</p>`} <div class="tag-cloud" style="margin-top: 0.5rem;"> ${article.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag}`, "href")} class="tag">${tag}</a>`)} </div> </li>`)} </ul> ` })}`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/articles/index.astro", void 0);

const $$file = "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
