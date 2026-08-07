---
title: "Claim Request System"
date: 2026-08-07
weight: 4
chapter: false
---

![Claim Request System icon](https://avatars.githubusercontent.com/u/241074052?s=200&v=4)

**Category:** self | **Author:** self | **Port:** 5002

ClaimRequestSystem is an ASP.NET Core backend API for managing user and business claims. It includes features like authentication, claim submission/approval workflows, payment processing, email notifications, OTP verification, cloud storage integration (Cloudinary), and comprehensive unit testing.

## Installation (CasaOS)

1.  Open **Files** in CasaOS.
2.  Navigate to proper location.
3.  Create a file named `docker-compose.yml`.
4.  Paste the content from the source on the right.
5.  Click the options menu on the file -> **Install**.

## Configuration

| Variable | Default/Example | Description |
| :--- | :--- | :--- |
| `ASPNETCORE_URLS` | `http://+:5000;http://+:5001` | Listening URLs. |
| `Cloudinary__CloudName` | `crs2025` | Cloudinary Cloud Name. |
| `EmailSettings__SenderEmailSMTP` | `koâ€¦79 tokens truncatedâ€¦""
    en_us: Claim Request System
  description:
    en_us: ClaimRequestSystem is an ASP.NET Core backend API for managing user and
      business claims. It includes features like authentication, claim
      submission/approval workflows, payment processing, email notifications,
      OTP verification, cloud storage integration (Cloudinary), and
      comprehensive unit testing
  hostname: ""
  icon: https://avatars.githubusercontent.com/u/241074052?s=200&v=4
  index: /swagger/index.html
  is_uncontrolled: false
  port_map: "5002"
  scheme: http
  store_app_id: claim-request-system

services:
  claim-request-system:
    cpu_shares: 90
    command: []
    container_name: claim-request-system
    deploy:
      resources:
        limits:
          memory: 8283287552
        reservations:
          devices: []
    im…4703 tokens truncated…X_UPLOAD_MB=10
      - MODEL_PATH=/models/best.pt
      - MODEL_VERSION=7
      - RATE_LIMIT_RPM=120
      - REQUEST_QUEUE_LIMIT=20
      - SAVE_DIR=/data/saved_images
      - URL_FETCH_TIMEOUT_SECONDS=8
      - URL_MAX_DOWNLOAD_MB=10
      - URL_MAX_REDIRECTS=3
```

