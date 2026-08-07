---
baseline_schema: "2.0"
pack: "hugo-agentic-workflow"
document: "introduction"
status: "active"
updated: "2026-08-07"
code_ref: "uncommitted"
---

# Hugo Agentic Workflow

## Scope

This pack records the uncommitted refactor of the Hugo template's agent guidance, published-image convention, shortcode hardening, analytics hook, and mobile overflow safeguards.

## Current truth

- `AGENTS.md` makes direct Hugo content authoring the default workflow.
- `raw/` is optional and is used only for supplied AI exports, original images, OCR, crop, or conversion work.
- Published project images use `static/images/<topic>/`; Mingrammer Python scripts use `tools/diagrams/`.
- Markdown images use `/images/...` and a local render hook applies Hugo `relURL` for GitHub Pages repository paths.
- The site has an organization default of First Cloud Journey and an initially empty global author list.
- Universal Analytics was removed. Cloudflare Web Analytics is rendered only when its Hugo parameter is populated.

## Constraints

- The repository is a template. This maintenance task must not alter `README.md` or publish a GitHub repository description.
- Future content work, not template-only work, must update the English README and publish repository metadata with `gh` when available.
- The Learn theme is vendored, not a submodule. Theme changes remain local overrides under `layouts/`.
- Do not commit or push automatically.
