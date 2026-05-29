import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A successful day is the day when I managed to prioritize enough self-care activities to have a balanced day despite wearing many hats.</p>\n<p><strong>Examples of self-care activities:</strong> cooking, being with friends, cleanup, naps, exercise, walks, playing with my dog, journaling, stretching, reading for fun, expressing myself online, listening to just enough interesting stuff to get me going — and then really listening to myself about what I have to say about it.</p>\n<p>The key tension: wearing many hats (home tasks, family, work) while still carving out enough inward-facing time to stay centered. The formula isn’t about doing less — it’s about threading self-care through everything else rather than waiting until everything else is done.</p>\n<p>This is itself a little system. Not complicated. Just something that, once named, you can notice when it’s missing.</p>";

				const frontmatter = {"title":"The Successful Work-From-Home Day Formula","date":"2026-01-14","tags":["productivity","systems","balance","workflow"],"description":"A successful day is when you thread enough self-care through everything else to stay centered — not waiting until all the work is done."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/successful-wfh-day.md";
				const url = undefined;
				function rawContent() {
					return "\nA successful day is the day when I managed to prioritize enough self-care activities to have a balanced day despite wearing many hats.\n\n**Examples of self-care activities:** cooking, being with friends, cleanup, naps, exercise, walks, playing with my dog, journaling, stretching, reading for fun, expressing myself online, listening to just enough interesting stuff to get me going — and then really listening to myself about what I have to say about it.\n\nThe key tension: wearing many hats (home tasks, family, work) while still carving out enough inward-facing time to stay centered. The formula isn't about doing less — it's about threading self-care through everything else rather than waiting until everything else is done.\n\nThis is itself a little system. Not complicated. Just something that, once named, you can notice when it's missing.\n";
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
