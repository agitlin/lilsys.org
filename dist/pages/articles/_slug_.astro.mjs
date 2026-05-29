import { c as createAstro, b as createComponent, r as renderComponent, i as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BbymTkdn.mjs';
import { g as getCollection } from '../../chunks/_astro_content_BzXOh1PM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://lilsys.org");
async function getStaticPaths() {
  const articles = await getCollection("articles");
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { article } = Astro2.props;
  const { Content } = await article.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": article.data.title, "description": article.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="article-header"> <h1>${article.data.title}</h1> <p class="meta">${article.data.date}</p> </div> <div class="prose"> ${renderComponent($$result2, "Content", Content, {})} </div> <div class="article-tags"> <h3>Tags</h3> <div class="tag-cloud"> ${article.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag}`, "href")} class="tag">${tag}</a>`)} </div> </div> <a href="/articles" class="back-link">← All articles</a> ` })}`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/articles/[slug].astro", void 0);

const $$file = "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/articles/[slug].astro";
const $$url = "/articles/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
