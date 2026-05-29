import { b as createComponent, r as renderComponent, i as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BbymTkdn.mjs';
import { $ as $$TagCloud } from '../chunks/TagCloud_BZkiHxya.mjs';
import { g as getCollection } from '../chunks/_astro_content_BzXOh1PM.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allArticles = await getCollection("articles");
  const tagCounts = {};
  allArticles.forEach((a) => a.data.tags.forEach((t) => {
    tagCounts[t] = (tagCounts[t] || 0) + 1;
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tags" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 0.75rem;">All Tags</h1> <p style="color: var(--muted); margin-bottom: 1.5rem;">${Object.keys(tagCounts).length} topics across ${allArticles.length} articles.</p> ${renderComponent($$result2, "TagCloud", $$TagCloud, { "tags": tagCounts })} ` })}`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/tags/index.astro", void 0);

const $$file = "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
