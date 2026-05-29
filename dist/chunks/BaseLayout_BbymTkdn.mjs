import { c as createAstro, b as createComponent, a as addAttribute, f as renderHead, h as renderSlot, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://lilsys.org");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "lilsys.org \u2014 building little systems with one other person and AI." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | lilsys.org</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/styles/global.css">${renderHead()}</head> <body> <header class="site-header"> <div class="site-title"><a href="/">lilsys.org</a></div> <nav> <a href="/about">About</a> <a href="/articles">Articles</a> <a href="/tags">Tags</a> </nav> </header> <main>${renderSlot($$result, $$slots["default"])}</main> <footer class="site-footer">© ${(/* @__PURE__ */ new Date()).getFullYear()} lilsys.org</footer> </body></html>`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
