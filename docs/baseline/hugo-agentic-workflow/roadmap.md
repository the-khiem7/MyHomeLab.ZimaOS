---
baseline_schema: "2.0"
pack: "hugo-agentic-workflow"
document: "roadmap"
status: "active"
updated: "2026-08-07"
code_ref: "uncommitted"
---

# Roadmap

| Phase | Status | Evidence | Next action |
| --- | --- | --- | --- |
| Generalize agent workflow | complete | `AGENTS.md` now distinguishes direct authoring from optional source processing | Review wording during the next real content task |
| Align Hugo environments | complete | CI, DevContainer, and Dockerfile pin Hugo Extended 0.162.0 | Keep host Hugo aligned when convenient |
| Enforce image and shortcode contracts | complete | Render hook, shortcode overrides, migrated sample image, and 0.162.0 build checks | Apply the convention to future content |
| Prepare analytics and authors | complete | Conditional Cloudflare footer and global author rendering are present | Supply analytics token or personal author only when requested |
| Responsive verification | active | CSS safeguards were added; static and production builds pass | Perform visual mobile QA at 320, 375, and 390 px in a functioning browser environment |

## Final evidence

- Hugo Extended 0.162.0 built EN and VI output successfully.
- The authored-image sample rendered with the GitHub Pages repository subpath.
- No Universal Analytics marker remained; the Cloudflare beacon rendered zero times without a token and once with a verification token.
- Temporary EN/VI shortcode fixtures rendered notice, expand, tabs, and Mermaid successfully, then were removed.
- `git diff --check` passed.

## Known warning

Builds still emit deprecation warnings from vendored Learn theme calls to `.Site.Data`, `.Site.Languages`, and `.Language.LanguageName`. They do not currently fail builds.
