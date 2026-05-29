import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>For a new job, a number of things worth establishing:</p>\n<ul>\n<li><strong>Architecture of the product</strong> — clear, documented, owned</li>\n<li><strong>Prototypes</strong> — always have a working solution ready</li>\n<li><strong>Development box setup list</strong> — what to install fresh</li>\n<li><strong>EC2 instance setup list</strong> — what to provision</li>\n<li><strong>Docker containers to use</strong></li>\n<li><strong>MCP servers to leverage</strong></li>\n<li><strong>Best practice for AI DX workflow</strong> — to promote and iterate on</li>\n<li><strong>NotebookLM</strong> as a knowledge management platform</li>\n<li><strong>Python best practices</strong> for modules, packages, app architecture</li>\n<li><strong>Testing vision</strong>: unit, integration, user acceptance, CI/CD pipelines</li>\n<li><strong>Vision for new hires</strong> — interviewing approach</li>\n</ul>\n<p>The goal is not to do all of this before day one. Life does not end when the job starts. It improves further.</p>\n<p>This is a little system: the architecture wishlist. Not a to-do list to complete — a set of dials to gradually tune toward where you want them to be.</p>";

				const frontmatter = {"title":"Job Architecture Wishlist","date":"2026-04-12","tags":["architecture","systems","ai","workflow"],"description":"What a personal architecture of work looks like — the things worth establishing at the start of any new role."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/job-architecture-wishlist.md";
				const url = undefined;
				function rawContent() {
					return "\nFor a new job, a number of things worth establishing:\n\n- **Architecture of the product** — clear, documented, owned\n- **Prototypes** — always have a working solution ready\n- **Development box setup list** — what to install fresh\n- **EC2 instance setup list** — what to provision\n- **Docker containers to use**\n- **MCP servers to leverage**\n- **Best practice for AI DX workflow** — to promote and iterate on\n- **NotebookLM** as a knowledge management platform\n- **Python best practices** for modules, packages, app architecture\n- **Testing vision**: unit, integration, user acceptance, CI/CD pipelines\n- **Vision for new hires** — interviewing approach\n\nThe goal is not to do all of this before day one. Life does not end when the job starts. It improves further.\n\nThis is a little system: the architecture wishlist. Not a to-do list to complete — a set of dials to gradually tune toward where you want them to be.\n";
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
