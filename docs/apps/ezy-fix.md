<!-- api-section:start -->

<!-- api-docs:start -->
# EzyFix

<img src="https://avatars.githubusercontent.com/u/232832264?s=200&v=4" width="100" />

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
<!-- api-docs:end -->

<!-- api-example:start -->
#### Docker Compose
[EzyFix.dockercompose.yml](../../app/EzyFix.dockercompose.yml ':include :type=yaml')
<!-- api-example:end -->

<!-- api-section:end -->
