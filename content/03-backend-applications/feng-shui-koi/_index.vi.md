---
title: "Feng Shui Koi Consulting"
date: 2026-08-07
weight: 2
chapter: false
---

![Feng Shui Koi icon](https://avatars.githubusercontent.com/u/241074052?s=200&v=4)

**Title:** Feng Shui Koi Consulting | **Port:** 5004

Feng Shui Koi Consulting is an ASP.NET Core backend API for managing user and business claims. It includes features like authentication, claim submission/approval workflows, payment processing, email notifications, OTP verification, cloud storage integration (Cloudinary), and comprehensive unit testing.

## Installation (CasaOS)

1.  Open **Files** in CasaOS.
2.  Navigate to proper location.
3.  Create a file named `docker-compose.yml`.
4.  Paste the content from the source on the right.  Click the options menu on the file -> **Install**.

## Configuration

| Variable | Description |
| :--- | :--- |
| `ASPNETCORE_ENVIRONMENT` | Environment (e.g., `Production`). |
| `FIREBASE_PROJECT_ID` | Project ID for Firebase integration. |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to Firebase credentials JSON. |
| `FENGSHUIKOI_CONNECTION_STRING` | Main database connection string. |
| `HANGFIRE_CONNECTION_STRING` | Hangfire database connection string. |

#### Docker Compose

```yaml
name: fengshuikoi
version: '3.9'

x-casaos:
  title:
    en_us: "Feng Shui Koi Consulting"
  icon: "https://avatars.githubusercontent.com/u/241074292?s=200&v=4"
  description:
    en_us: "Feng Shui Koi Consulting is an ASP.NET Core backend API for managing user and business claims. It includes features like authentication, claim submission/approval workflows, payment processing, email notifications, OTP verification, cloud storage integration (Cloudinary), and comprehensive unit testing"
  port_map: "5004"
  index: /swagger/index.html

services:
  fengshuikoi:
    container_name: fengshuikoi
    image: thekhiem7/fengshuikoi:1.2-net8
    ports:
      - "5004:5000"
      - "5005:5001"
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:5000/swagger/index.html || exit 1"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 20s
    environment:
```
