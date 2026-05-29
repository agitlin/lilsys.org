import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>There are <strong>utility values</strong> and <strong>core values</strong>. Utility value: learn .NET so I can get a government job in Jerusalem. But the big question is — will I like my life more with that job or less?</p>\n<p>Core values are different: health, friends and family, creative expression, exploration, depth, structure, solitude, connection, joy, nature.</p>\n<p><strong>Each one of the values is an infinite game and should not be a source of crisis.</strong></p>\n<p>Not that external crises should be an automatic cause of internal crises. So if I accept my life the way it is today I can keep iterating to improve it.</p>\n<p>In the gym of life I am working on perfect sets of perfect reps. I want to be present, introspective, intentional. I want someone good in my corner. I want to get better at this and be honest with myself and useful to others.</p>\n<p>It doesn’t mean I can’t choose aspirational goals. They just need to fall into one of the baskets and balance well with other things.</p>\n<p>The little system for this: when you notice you are in crisis about something, ask — is this a utility value or a core value? If it’s utility, find a substitute. If it’s core, you’re playing an infinite game. Play accordingly.</p>";

				const frontmatter = {"title":"Center Hustle and Core Values","date":"2026-01-13","tags":["values","systems","philosophy","community"],"description":"Utility values vs. core values — and why each core value is an infinite game that should not be a source of crisis."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/center-hustle-core-values.md";
				const url = undefined;
				function rawContent() {
					return "\nThere are **utility values** and **core values**. Utility value: learn .NET so I can get a government job in Jerusalem. But the big question is — will I like my life more with that job or less?\n\nCore values are different: health, friends and family, creative expression, exploration, depth, structure, solitude, connection, joy, nature.\n\n**Each one of the values is an infinite game and should not be a source of crisis.**\n\nNot that external crises should be an automatic cause of internal crises. So if I accept my life the way it is today I can keep iterating to improve it.\n\nIn the gym of life I am working on perfect sets of perfect reps. I want to be present, introspective, intentional. I want someone good in my corner. I want to get better at this and be honest with myself and useful to others.\n\nIt doesn't mean I can't choose aspirational goals. They just need to fall into one of the baskets and balance well with other things.\n\nThe little system for this: when you notice you are in crisis about something, ask — is this a utility value or a core value? If it's utility, find a substitute. If it's core, you're playing an infinite game. Play accordingly.\n";
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
