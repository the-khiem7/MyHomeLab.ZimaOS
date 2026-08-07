---
title: "EzyFix"
date: 2026-08-07
weight: 3
chapter: false
---

![EzyFix icon](https://avatars.githubusercontent.com/u/232832264?s=200&v=4)

**Category:** self | **Author:** self | **Port:** 5000

A home-service platform connecting customers with trusted local repair professionals. Features include booking, progress tracking, and service reviews. Integrated AI provides technician recommendations, cost estimation, and issue diagnostics from text or images - enhancing user experience and streamlining the entire repair workflow.

## Installation (CasaOS)

1.  Open **Files** in CasaOS.
2.  Navigate to proper location.
3.  Create a file named `docker-compose.yml`.
4.  Paste the content from the source on the right.
5.  Click the options menu on the file -> **Install**.

## Configuration

> **Note:** This application requires extensive configuration for Payment, Maps, Email, and Cloudinary services.

### Key Variables

| Category | Variable | Description |
| :--- | :--- | :--- |
| **Identity** | `Jwt__Key`, `Jwt__Issuer` | JWT Token setting. |
| **Database** | `ConnectionStrings__PostgresConnection` | PostgreSQL connection. |
| **Cloudinary** | `Cloudinary__ApiKey`, `Cloudinary__CloudName` | Image hosting config. |
| **Email** | `EmailSettings__SmtpServer`, `EmailSettings__SenderEmailSMTP` | SMTP settings. |
| **Maps** | `LocationIq__ApiKeys__0` | LocationIQ API Keys. |
| **Payments** | `PayOS__ClientId`, `Vnpay__TmnCode` | Payment Gateway credentials. |

#### Docker Compose

```yaml
name: ezyfix
x-casaos:
  author: self
  category: self
  title:
    custom: EzyFix
    en_us: EzyFix
  description:
    en_us: " A home-service platform connecting customers with trusted local repair
      professionals. Features include booking, progress tracking, and service
      reviews. Integrated AI provides technician recommendations, cost
      estimation, and issue diagnostics from text or images - enhancing user
      experience and streamlining the entire repair workflow"
  hostname: ""
  icon: https://avatars.githubusercontent.com/u/232832264?s=200&v=4
  index: /swagger/index.html
  is_uncontrolled: false
  port_map: "5000"
  scheme: http
  store_app_id: ezyfix

services:
  ezyfix:
    cpu_shares: 90
    command: []
    container_name: ezyfix
    deploy:
      resources:
        limits:
          memory: 8283287552
        reservations:
          devices: []
    image: thekhiem7/ezyfix-api:latest
    labels:
      icon: https://avatars.githubusercontent.com/u/232832264?s=200&v=4
    ports:
      - target: 5000
        published: "5000"
        protocol: tcp
      - target: 5001
        published: "5001"
        protocol: tcp
    restart: unless-stopped
    volumes:
      - type: bind
        source: /DATA/AppData/EzyFix/secrets/appsettings.json
        target: /app/appsettings.json
        read_only: true
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:5000/swagger/index.html || exit 1"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 20s
    devices: []
    cap_add: []
    network_mode: bridge
    privileged: false
```
