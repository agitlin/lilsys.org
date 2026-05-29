import { c as createAstro, b as createComponent, m as maybeRenderHead, a as addAttribute, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://lilsys.org");
const $$TagCloud = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TagCloud;
  const { tags } = Astro2.props;
  const maxCount = Math.max(...Object.values(tags));
  return renderTemplate`${maybeRenderHead()}<div class="tag-cloud"> ${Object.entries(tags).sort((a, b) => b[1] - a[1]).map(([tag, count]) => renderTemplate`<a${addAttribute(`/tags/${tag}`, "href")}${addAttribute(`tag ${count >= maxCount * 0.6 ? "large" : ""}`, "class")}${addAttribute(`${count} article${count !== 1 ? "s" : ""}`, "title")}> ${tag} </a>`)} </div>`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/components/TagCloud.astro", void 0);

export { $$TagCloud as $ };
