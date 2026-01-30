<!-- api-section:start -->

<!-- api-docs:start -->
# Claim Request System

<img src="https://avatars.githubusercontent.com/u/241074052?s=200&v=4" width="100" />

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
| `EmailSettings__SenderEmailSMTP` | `kosjapan391@gmail.com` | SMTP Sender. |
| `Vnpay__TmnCode` | `GX2YY69C` | VNPay Terminal Code. |
| `Jwt__Issuer` | `https://localhost:8081` | JWT Authorization Server. |
<!-- api-docs:end -->

<!-- api-example:start -->
#### Docker Compose
[ClaimRequestSystem.dockercompose.yml](../../../ZimaCompose/backend/ClaimRequestSystem.dockercompose.yml ':include :type=yaml')
<!-- api-example:end -->

<!-- api-section:end -->
