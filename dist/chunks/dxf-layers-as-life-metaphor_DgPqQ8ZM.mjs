import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>At the heart of a DXF project there is a compiler. Parsing. Lexing. Compiling. Arriving at semantics.</p>\n<p>In a way, arriving at semantics in interview questions is not that different from finding the mamad volume and square footage. You need to become aware of the domain and the different rules at play. Just like there are layers to DXF, there are layers to an interview. The goal is to navigate these layers to arrive at the desired result.</p>\n<p><strong>It’s very interesting that the mandala view of life priorities is parallel to the layer view of DXF. But the proximity in DXF is even more meaningful.</strong></p>\n<p>The layers insight: meaning lives at the intersection of proximity and context. A mamad (safe room) is not just a room — it’s identifiable by wall width (22-42cm), presence of certain architectural elements, and the <em>text written inside it</em> required by code.</p>\n<p>You find the meaning not by scanning everything equally but by knowing which layers to trust, which proximity rules apply, and what the semantic anchors are.</p>\n<p>This is true of DXF files, interviews, and the mandala of life priorities. Build your system with the right layers and the right proximity rules, and the semantics emerge naturally.</p>";

				const frontmatter = {"title":"DXF Layers as a Life Metaphor","date":"2026-03-13","tags":["systems","architecture","philosophy","metaphor"],"description":"Meaning lives at the intersection of proximity and context. True in DXF files, in interviews, and in the mandala of life priorities."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/lilsys.org/src/content/articles/dxf-layers-as-life-metaphor.md";
				const url = undefined;
				function rawContent() {
					return "\nAt the heart of a DXF project there is a compiler. Parsing. Lexing. Compiling. Arriving at semantics.\n\nIn a way, arriving at semantics in interview questions is not that different from finding the mamad volume and square footage. You need to become aware of the domain and the different rules at play. Just like there are layers to DXF, there are layers to an interview. The goal is to navigate these layers to arrive at the desired result.\n\n**It's very interesting that the mandala view of life priorities is parallel to the layer view of DXF. But the proximity in DXF is even more meaningful.**\n\nThe layers insight: meaning lives at the intersection of proximity and context. A mamad (safe room) is not just a room — it's identifiable by wall width (22-42cm), presence of certain architectural elements, and the *text written inside it* required by code.\n\nYou find the meaning not by scanning everything equally but by knowing which layers to trust, which proximity rules apply, and what the semantic anchors are.\n\nThis is true of DXF files, interviews, and the mandala of life priorities. Build your system with the right layers and the right proximity rules, and the semantics emerge naturally.\n";
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
