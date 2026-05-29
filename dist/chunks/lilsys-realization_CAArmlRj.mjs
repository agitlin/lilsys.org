import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>My realization: what I am doing today at work is what it’s going to be. Good context is what you want to hear from an LLM more often. Stay there. Get things done. Get better.</p>\n<p><strong>Lilsys is a way for people to stay in tech, to get together, to get things done and to get better at the new skill set.</strong></p>\n<p>The new skill set is not just coding — it’s knowing how to work <em>with</em> AI. How to prompt well, how to structure context, how to use tools like Claude Code and MCP servers, how to stay relevant as the landscape shifts under your feet.</p>\n<p>Lilsys is the community version of that. Not a course. Not a bootcamp. A <em>way</em> — of staying in, staying sharp, and doing it together.</p>";

				const frontmatter = {"title":"Lilsys — What It Actually Is","date":"2026-05-06","tags":["community","ai","workflow","philosophy"],"description":"Not a course. Not a bootcamp. A way of staying in tech, staying sharp, and doing it together."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/lilsys-realization.md";
				const url = undefined;
				function rawContent() {
					return "\nMy realization: what I am doing today at work is what it's going to be. Good context is what you want to hear from an LLM more often. Stay there. Get things done. Get better.\n\n**Lilsys is a way for people to stay in tech, to get together, to get things done and to get better at the new skill set.**\n\nThe new skill set is not just coding — it's knowing how to work *with* AI. How to prompt well, how to structure context, how to use tools like Claude Code and MCP servers, how to stay relevant as the landscape shifts under your feet.\n\nLilsys is the community version of that. Not a course. Not a bootcamp. A *way* — of staying in, staying sharp, and doing it together.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
