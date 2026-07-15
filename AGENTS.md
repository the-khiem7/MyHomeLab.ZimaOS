# AGENTS: MyHomeLab ZimaOS repository rules

> Audience: developers and agents working in this repository.
>
> Purpose: define repository-wide operating rules, safety boundaries,
> documentation conventions, and verification expectations.

## Repository role

This repository is the configuration and knowledge base for a ZimaOS homelab.
It contains reusable documentation and Docker Compose definitions for services
managed on ZimaOS or CasaOS.

Keep repository-wide policy in this file. Put topic-specific technical guidance
in a dedicated document and reference it from here.

## Specialized guidance

| Area | Canonical document |
| --- | --- |
| CasaOS / ZimaOS `x-casaos` metadata | [`X-CASAOS.md`](X-CASAOS.md) |
| SSH access architecture | [`docs/ssh-access.md`](docs/ssh-access.md) |
| Local SSH endpoints and verified values | `docs/ssh-access.secret.md` |

Read the relevant specialized document before changing that area. Do not copy
its complete contents back into `AGENTS.md`.

## Scope and change discipline

- Make only changes required by the active request.
- Preserve unrelated user changes in a dirty worktree.
- Do not modify runtime configuration, ports, volumes, credentials, or deployed
  services unless the request explicitly includes them.
- Inspect the existing file and nearby conventions before adding a new pattern.
- Prefer one canonical document per topic. Replace duplicate guidance with a
  link or short index page.
- Keep public documentation reusable and independent of one workstation or
  private deployment.
- Do not commit, push, deploy, restart services, or mutate remote systems unless
  the user explicitly requests that action.

## Public and local-secret Markdown

- Regular `*.md` files are repository documentation. Treat them as public and
  safe to commit.
- Files named `*.secret.md` are local-only companions for environment-specific
  agent context. They must remain ignored by Git and must never be committed.
- Use paired names when both layers are needed: `<topic>.md` for reusable public
  guidance and `<topic>.secret.md` for local values.
- Public Markdown must use placeholders instead of real usernames, private IPs,
  owner-specific hostnames, local credential paths, fingerprints, or
  infrastructure identifiers.
- A local secret companion may record endpoints, usernames, key locations,
  fingerprints, verification results, and operational decisions required by an
  agent.
- Never place raw private keys, passwords, access tokens, tunnel tokens,
  recovery codes, or other credential material in either Markdown layer.
  Reference the secure local credential location instead.
- Agents may read and maintain an existing `*.secret.md` companion when local
  context is required, but must not expose its values in public files, logs,
  commits, pull requests, or user-facing examples.

The repository `.gitignore` must contain `*.secret.md` to enforce this
convention.

## Docker Compose boundaries

- Treat each Compose file as an independently deployable service definition.
- Preserve environment-specific values and existing service behavior unless the
  task explicitly requests a runtime change.
- Never infer that a documentation or metadata request authorizes changes under
  `services:`.
- For `x-casaos` metadata, follow `X-CASAOS.md`; its rules do not authorize
  unrelated Compose changes.
- Do not normalize or rewrite unrelated Compose files while editing one service.

## Agent workflow

1. Read `AGENTS.md` and the specialized guide for the requested area.
2. Inspect Git status and distinguish existing changes from task changes.
3. Identify the smallest set of files that owns the requested behavior or
   documentation.
4. Apply scoped changes while preserving local-only and unrelated content.
5. Verify syntax, links, ignore rules, and runtime behavior in proportion to the
   change.
6. Report changed files, verification evidence, deferred decisions, unrelated
   pre-existing failures, and whether changes are staged.

## Verification requirements

For documentation changes:

- Check internal links and navigation entries.
- Run `git diff --check` against the files changed by the task.
- For a public/secret pair, confirm the secret companion is ignored:

  ```powershell
  git check-ignore -v path/to/topic.secret.md
  ```

- Scan public and staged Markdown for environment-specific values before
  committing.

For Compose changes:

- Validate the affected Compose file with the available Docker Compose tooling.
- Confirm that metadata ports and service names match the actual service.
- Separate failures caused by the task from pre-existing repository issues.

## Git and secret safety

- Never assume an ignored file is absent from the Git index. Verify with
  `git ls-files` when handling sensitive local documentation.
- If a staged public file contains private values, replace the staged content
  with the sanitized version before handoff.
- Do not stage or unstage unrelated user changes.
- Do not add generated files, local overrides, environment files, or
  `*.secret.md` files to Git.
- Before a commit or push, review both the working-tree diff and the staged diff.

## Completion criteria

A task is complete when the requested change is present, relevant verification
passes, private values remain outside Git, unrelated worktree changes are
preserved, and the handoff clearly identifies any remaining decision or risk.
