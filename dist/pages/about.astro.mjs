import { b as createComponent, r as renderComponent, i as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BbymTkdn.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose"> <div class="article-header"><h1>About</h1></div> <p>Lilsys is not a course. Not a bootcamp. A <em>way</em> — of staying in tech, staying sharp, and doing it together.</p> <p>The premise: AI didn't make experienced developers obsolete. It changed the job. The new skill set is knowing how to work <em>with</em> AI — how to prompt well, structure context, use tools like Claude Code and MCP servers, and stay relevant as the landscape shifts under your feet.</p> <p>Lilsys is built around one core idea: a little system, built with one other person and AI, can accomplish more than either of you could alone. The key word is <em>little</em>. Not a platform. Not a company. A system that does one thing well.</p> <p>The writing here is about building those systems — the technical moves, the mindset, the workflow, and the community that makes it sustainable.</p> </article> ` })}`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/about.astro", void 0);

const $$file = "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
