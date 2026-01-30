# AGENTS: CasaOS / ZimaOS x-casaos metadata

> Audience: Devs and agents
>
> Purpose: Provide agent-ready guidance for adding or updating `x-casaos` UI metadata in `docker-compose.yml`.
> Scope: This covers only the `x-casaos` extension fields. Docker ignores this section entirely.

---

## Non-negotiable rules

- `x-casaos` lives at the root level (same level as `services:`).
- Do not modify runtime config in `services:` unless explicitly asked.
- Always set `main`, `title`, `icon`, and `port_map`.
- `port_map` is a string and must match the main service's UI port.
- `index` is a path and should start with `/` (default to `/`).
- Use a multi-language map even if only `en_us` is provided.
- Unknown fields are ignored by CasaOS / ZimaOS; avoid adding them.

---

## Agent workflow

1. Identify the primary service in `services:` and set `main` to that name.
2. Add `x-casaos` at the root if it does not exist.
3. Populate required fields (`main`, `title`, `icon`, `port_map`, `index`).
4. Add optional fields as needed (description, category, tips, etc.).
5. Validate that `port_map` and `index` produce the correct UI URL.

---

## Field reference (exhaustive)

### architectures

```yaml
architectures:
  - amd64
  - arm64
  - arm
```

Type: `array[string]`
Supported values: `amd64`, `arm64`, `arm`
Usage: App Store filters incompatible devices.

---

### main

```yaml
main: my_service
```

Type: `string`
Usage: Primary service name in `services:`.

---

### title

```yaml
title:
  en_us: "My Application"
  zh_cn: "My app in Chinese"
```

Type: `map[string]string`
Usage: UI display name (multi-language).

---

### description

```yaml
description:
  en_us: "A long description of the app"
```

Type: `map[string]string`
Usage: App Store detail page.

---

### tagline

```yaml
tagline:
  en_us: "Short one-line description"
```

Type: `map[string]string`
Usage: Short subtitle.

---

### author

```yaml
author: "Author Name"
```

Type: `string`
Usage: App author name.

---

### developer

```yaml
developer: "Developer or Organization"
```

Type: `string`
Usage: Developer or organization name.

---

### category

```yaml
category: Utilities
```

Type: `string`
Common values: `Utilities`, `Media`, `Backup`, `Network`, `Database`, `Development`

---

### icon

```yaml
icon: https://example.com/icon.png
```

Type: `string (URL)`
Usage: Main application icon.

---

### thumbnail

```yaml
thumbnail: https://example.com/thumbnail.png
```

Type: `string (URL)`
Usage: Optional banner image.

---

### index

```yaml
index: /
```

Type: `string`
Usage: Web UI path inside the container (examples: `/`, `/ui`, `/swagger`).

---

### port_map

```yaml
port_map: "5000"
```

Type: `string`
Usage: Primary UI port exposed by `main`.

---

### tips

```yaml
tips:
  before_install:
    en_us: |
      - Ensure ports are free
      - Configure env vars
```

Type: `object`
Supported keys: `before_install`
Usage: Pre-install guidance (multi-language).

---

## Minimal example

```yaml
version: "3.9"

x-casaos:
  architectures:
    - amd64
  main: app
  title:
    en_us: "Example App"
  description:
    en_us: "An example CasaOS app"
  category: Utilities
  icon: https://example.com/icon.png
  port_map: "8080"
  index: /

services:
  app:
    image: example/app:latest
    ports:
      - "8080:8080"
```

---

## Validation checklist

- `x-casaos` is at the root level.
- `main` matches a service name in `services:`.
- `port_map` matches the UI port exposed by `main`.
- `index` starts with `/`.
- Required fields are set (`main`, `title`, `icon`, `port_map`).
- Multi-language maps include `en_us`.

---

## Known limitations

- No schema validation or strict versioning.
- Only one `port_map` is supported.
- Some CasaOS versions may ignore `thumbnail`.

---

## Summary table

| Purpose | Supported | Notes |
| --- | --- | --- |
| UI metadata | Yes | via `x-casaos` |
| Runtime config | No | use `services:` |
| Multi-language | Yes | map format |
| Docker standard | No | platform extension |

---

This document is suitable for human reading and machine parsing (agents, generators, CI pipelines).
