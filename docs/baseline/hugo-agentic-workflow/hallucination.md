---
baseline_schema: "2.0"
pack: "hugo-agentic-workflow"
document: "hallucination"
status: "active"
updated: "2026-08-07"
code_ref: "uncommitted"
---

# Decisions and Open Questions

## Confirmed decisions

- Directly supplied content is the central authoring workflow.
- AWS Workshop material is an example of direct input, not a separate workflow.
- `raw/` is optional and agent-detected.
- Diagram scripts go in `tools/diagrams/`; all generated and published images go in `static/images/<topic>/`.
- Cloudflare Web Analytics replaces Universal Analytics, but remains inactive until a token is configured.
- Sidebar authors are global. First Cloud Journey is always shown; an agent asks before adding a personal author when the list is empty.
- README and GitHub description requirements are future-content rules only. This template refactor does not change either artifact.
- `gh repo edit --description` is a metadata publish action, not a Git commit or push.

## Unverified or open

- Visual mobile behavior at 320, 375, and 390 px is not runtime-verified. Agent-browser sessions stalled in this environment; do not claim browser QA passed.
- The Cloudflare token has not been supplied, so live analytics collection is intentionally unverified.
- No commit can be assigned yet because the inspected code state is uncommitted.
