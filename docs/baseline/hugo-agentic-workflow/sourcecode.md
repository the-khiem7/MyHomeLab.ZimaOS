---
baseline_schema: "2.0"
pack: "hugo-agentic-workflow"
document: "sourcecode"
status: "active"
updated: "2026-08-07"
code_ref: "uncommitted"
---

# Implementation Map

## Authoring contract

`AGENTS.md` is the durable policy source. It defines task selection, bilingual content requirements, static image paths, shortcode syntax, authors, README/metadata behavior for future content, and validation.

## Render path

Markdown `![alt](/images/topic/file.webp)` is handled by `layouts/_default/_markup/render-image.html`. For `/images/` destinations it removes the leading slash and calls `relURL`, preserving GitHub Pages repository base paths. The former section-only string converter was removed from the list template and children shortcode.

## Output and integration points

- `static/images/authoring/static-image-example.svg` is the migrated asset-contract example used by both language pages.
- `layouts/shortcodes/notice.html`, `expand.html`, and `mermaid.html` override theme implementations and trim boundary whitespace. The existing tab and children overrides do the same where they consume inner content.
- `layouts/partials/menu-footer.html` renders `params.organization` and `params.authors`.
- `layouts/partials/custom-footer.html` conditionally emits the Cloudflare beacon from `params.cloudflareWebAnalyticsToken`.
- `static/css/theme-workshop.css` keeps media bounded and gives wide code, Mermaid, and mobile tables local horizontal scrolling.
