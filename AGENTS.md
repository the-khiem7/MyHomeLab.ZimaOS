# AGENTS

## Purpose

This is a bilingual English and Vietnamese Hugo documentation template for First Cloud Journey. Keep every task focused on the website's content, audience, evidence, assets, and rendered quality.

## Project Facts

- **Hugo:** 0.162.0 extended.
- **Theme:** `hugo-theme-learn` is vendored and tracked in this repository. It is not a Git submodule.
- **Configuration:** `config/_default/hugo.toml` is production configuration; `config/development/hugo.toml` is local preview configuration.
- **Deployment:** `.github/workflows/hugo.yml` publishes GitHub Pages from `main`.
- **Theme changes:** never edit `themes/hugo-theme-learn/`; create an exact-path override under `layouts/`.
- **Trusted content:** `markup.goldmark.renderer.unsafe = true` is intentional. Site content is published through Git by trusted contributors, not by visitors through the website.

## Task Classifier

### Default workflow: author Hugo content directly

Use this workflow unless the task clearly supplies source material that needs processing first.

1. Read relevant pages and establish the page's audience, purpose, placement, and evidence.
2. Write the English page first, then its Vietnamese pair.
3. Keep structure, front matter, links, visible labels, and media aligned across both languages.
4. Update images, shortcodes, navigation weight, and other page details only when they support the content.
5. Build and inspect the rendered result in both languages before completion.

Do not require, create, or search `raw/` merely because a task edits Hugo content. Content republished from an AWS workshop follows this same workflow.

### Optional source-processing branch: detect `raw/` when needed

Use `raw/` only when the task includes an exported AI conversation, original screenshots, source images, OCR, cropping, or image conversion. Treat files under `raw/` as immutable source material. Process only the images needed to support the published page; do not run OCR or crop tooling for text-only work.

## Content Structure and Languages

- Organize content as a Hugo page tree. A folder with `_index.md` is a section or branch bundle.
- Create paired files in the same location: `*.md` for English and `*.vi.md` for Vietnamese.
- English is canonical: write it first, then translate all visible content, including headings and image alt text. Do not translate paths, filenames, or code blocks.
- Use proper Vietnamese diacritics.
- Prefer stable lowercase, hyphenated folder and file names.
- A regular page may be `name.md` or `name/_index.md`; choose a folder only when it improves content organization, not to store publishable images.

Example tree:

```text
content/
  _index.md
  _index.vi.md
  01-section-name/
    _index.md
    _index.vi.md
    some-page/
      _index.md
      _index.vi.md
static/images/
  section-name/
    architecture-overview.webp
tools/diagrams/
  architecture-overview.py
```

### Front matter

Every published page needs `title`, `date`, and `weight`. Use `pre` for sidebar numbering instead of placing numbers in `title`.

```md
---
title: "Page Title"
date: 2026-08-07
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---
```

| Field | Required | Rule |
| --- | --- | --- |
| `title` | Yes | Visible page title; do not put sidebar numbering here. |
| `date` | Yes | Creation or publication date in `YYYY-MM-DD`. |
| `weight` | Yes | Sibling order; lower values appear first. |
| `chapter` | No | Keep `false` unless a chapter-style layout is explicitly required. |
| `pre` | No | Sidebar number or prefix, such as `" <b> 1.1. </b> "`. |
| `draft` | No | Remove or set to `false` when publishing. |
| `menuTitle` | No | Short sidebar title when the visible title is too long. |

## Writing Rules

- Use normal Markdown headings and begin long pages with a short introductory paragraph.
- Keep related content together, but do not create folders merely to hold published images.
- Use the `children` shortcode when a section should list child pages.
- Use `{{< ref "path/to/page" >}}` for internal Hugo page links instead of hard-coded output URLs.
- Preserve source attribution, official URLs, and uncertainty when reshaping supplied material. Do not invent workshop outcomes or technical evidence.

## Assets and Diagrams

All project-published images live in `static/images/<topic>/`, with lowercase, hyphenated filenames. Use Markdown paths beginning with `/images/`:

```md
![Architecture overview](/images/cloud-journey/architecture-overview.webp)
```

Hugo's image render hook converts these paths with `relURL`, so they work on both a root domain and a GitHub Pages repository path.

- Store Python scripts for Mingrammer Diagrams in `tools/diagrams/`.
- Store all generated image output, screenshots, crops, and static illustrations in `static/images/<topic>/`.
- Do not place new publishable images in `_diagrams`, `_static`, or another page bundle support folder.
- Keep global fonts under `static/fonts/`; do not move vendored theme assets.
- Use WebP for web-served screenshots when practical; retain original PNG source only in `raw/` when source provenance matters.
- Keep image paths stable after publication.

### Diagram rules

- Prefer reproducible diagrams when a relationship is easier to understand visually.
- Match layout to the relationship: use straight arrows for `1 -> n` and hub-and-spoke diagrams; use orthogonal connectors only for dependency chains, layered architecture, or genuine space constraints.
- Keep the Python source in `tools/diagrams/`, commit the generated published image under `static/images/<topic>/`, and use a filename describing what the diagram proves.

### Screenshot rules

Apply these rules only when the task actually contains screenshots or source images:

- Keep original console capture as PNG in `raw/` when provenance matters; never modify it.
- Crop the published image to one main point, or two tightly related points. Remove unrelated browser chrome, blank space, and console panels unless they provide necessary orientation.
- Prefer WebP for the published crop and use stable, descriptive, lowercase, hyphenated filenames.
- Split a dense screenshot into focused images when it proves multiple independent points.
- Reuse the same published image for English and Vietnamese pages when the visual evidence is identical.
- Store a reproducible crop specification beside the relevant diagram script only when the crop is non-trivial or likely to be repeated.

## Shortcodes and Markdown

Prefer existing shortcodes over raw HTML. Do not use raw HTML `<img>` tags; use Markdown images with `/images/...`.

| Shortcode | Required form |
| --- | --- |
| `children` | `{{% children description="true" /%}}` |
| `notice` | `{{% notice info %}}` on its own line, content, then one `{{% /notice %}}` |
| `expand` | `{{% expand "Title" %}}` on its own line, content, then one `{{% /expand %}}` |
| `tabs` / `tab` | `{{< tabs >}}` with nested `{{< tab name="..." >}}` and matching `<` closing tags |
| `attachments` | `{{% attachments /%}}` |
| `ref` | `{{< ref "path/to/page" >}}` |
| `ghcontributors` | `{{< ghcontributors "repo-url" >}}` |
| `mermaid` | `{{< mermaid >}}` with matching `<` closing tag |

Rules:

- Use `%` notation only for shortcodes whose inner content must be rendered as Markdown: `notice`, `expand`, and `children`.
- Use `<` notation for `tabs`, `tab`, and `mermaid`.
- A paired shortcode has exactly one opening tag and one matching closing tag. Put opening and closing tags on their own lines, with one blank line outside the whole block.
- Use a self-closing shortcode on one line.
- Never mix `%` and `<` notation for a paired call.
- Never use fenced Mermaid code blocks; only the Mermaid shortcode creates the renderable Mermaid container.

Examples:

```md
{{% notice info %}}
Important content goes here.
{{% /notice %}}
```

```md
{{< mermaid >}}
graph LR
  A-->B
  B-->C
{{< /mermaid >}}
```

## Sidebar Authors

The sidebar always identifies First Cloud Journey. Personal authors are configured globally in `params.authors`.

When a task adds or materially edits website content and the personal author list is empty, ask the user for the display name before completion. Do not infer a name from Git history, a GitHub account, or a previous session.

## Responsive Content Quality

Mobile users must be able to scroll vertically without the document overflowing horizontally. When authoring content:

- keep images, Mermaid diagrams, tables, code blocks, videos, and embeds within the content width;
- allow wide tables, code, and diagrams to scroll inside their own component;
- avoid fixed widths and unbroken long strings; and
- verify the rendered page at mobile widths after structural, asset, shortcode, or CSS changes.

## Appearance Modes

The site supports Light, Dark, and System appearance modes. System is the default and follows the reader's operating-system preference; an explicit Light or Dark choice is stored only in that reader's browser. Keep page content compatible with both modes: do not rely on a white background for legibility, do not use inverted-color filters, and verify Mermaid, notices, tables, code, and embedded media in both themes when changing their rendering.

## Page Creation and Completion Checklist

When creating a page:

1. Create the English page and matching Vietnamese page together.
2. Add aligned front matter with `title`, `date`, and `weight`.
3. Set `pre` only when sidebar numbering is useful; remove `draft` before publishing.
4. Put new published images under `static/images/<topic>/`; put diagram scripts under `tools/diagrams/`.
5. Check both page URLs, language variants, navigation order, asset paths, and internal references.

Before completing a content task:

- [ ] English and Vietnamese content is present and aligned.
- [ ] Front matter, `weight`, and optional `pre` are correct.
- [ ] Published images use `/images/...`; no raw HTML image tags or page-bundle image folders were added.
- [ ] Shortcodes use the documented notation and matching tags.
- [ ] Screenshots are focused and optimized when applicable.
- [ ] The page is usable at mobile widths without document-level horizontal overflow.
- [ ] `hugo --gc --minify` succeeds.

## Completion Rules for Future Content Work

For a task that adds or restructures website content:

1. Update the English `README.md` to describe the website's real purpose, audience, topics, attribution, and public URL. Do not turn it into developer clone, DevContainer, or Hugo-run instructions.
2. If `gh` is installed and authenticated and `origin` is a GitHub remote, publish a concise English repository description based on the updated site content with `gh repo edit --description`.
3. Publishing repository metadata through `gh` is not a Git commit or push. Do not commit or push source changes automatically.

These rules do not require changing the README or repository description for template-only maintenance that has no website content to describe.

## Validation

Run a production build before completion:

```bash
hugo --gc --minify
```

For content changes, also confirm both language variants, image paths, internal links, shortcode structure, and mobile rendering. For image-processing work, confirm that only intended output is published under `static/images/`.

Useful local commands:

```bash
hugo server -D
hugo --gc --minify
hugo new some-section/some-page/_index.md
python3 tools/diagrams/<diagram-name>.py
```

After using `hugo new`, create the matching `.vi.md` file, add `weight`, and publish only after handling the generated `draft` field.

## Templating Rules

When changing layouts, partials, or shortcodes:

1. Do not modify `themes/hugo-theme-learn/`; override the exact relative path in `layouts/`.
2. Follow Hugo lookup order: `layouts/` overrides `themes/hugo-theme-learn/layouts/`.
3. Preserve English fallbacks for localized template strings.
4. Test rendered output instead of assuming a template-only change is safe.

### Existing override map

| Override | Purpose |
| --- | --- |
| `layouts/partials/logo.html` | AWS sidebar logo. |
| `layouts/partials/menu-footer.html` | Last-updated, organization, and global authors. |
| `layouts/partials/custom-footer.html` | Conditional Cloudflare Web Analytics beacon. |
| `layouts/partials/custom-header.html` and `footer.html` | Early appearance selection and Mermaid re-rendering. |
| `layouts/404.html` | Theme-aware 404 page and appearance control. |
| `layouts/_default/_markup/render-image.html` | GitHub Pages-safe `/images/...` rendering. |
| `layouts/shortcodes/children.html` | Enhanced sorting and child descriptions. |
| `layouts/shortcodes/notice.html`, `expand.html`, `mermaid.html` | Whitespace-safe shortcode rendering. |

## Commit Convention

Use conventional commits only when the user separately authorizes a commit.
