<!-- api-section:start -->

<!-- api-docs:start -->
# Feng Shui Koi Consulting

<img src="https://avatars.githubusercontent.com/u/241074052?s=200&v=4" width="100" />

**Title:** Feng Shui Koi Consulting | **Port:** 5004

Feng Shui Koi Consulting is an ASP.NET Core backend API for managing user and business claims. It includes features like authentication, claim submission/approval workflows, payment processing, email notifications, OTP verification, cloud storage integration (Cloudinary), and comprehensive unit testing.

## Installation (CasaOS)

1.  Open **Files** in CasaOS.
2.  Navigate to proper location.
3.  Create a file named `docker-compose.yml`.
4.  Paste the content from the source on the right.
5.  Click the options menu on the file -> **Install**.

## Configuration

| Variable | Description |
| :--- | :--- |
| `ASPNETCORE_ENVIRONMENT` | Environment (e.g., `Production`). |
| `FIREBASE_PROJECT_ID` | Project ID for Firebase integration. |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to Firebase credentials JSON. |
| `FENGSHUIKOI_CONNECTION_STRING` | Main database connection string. |
| `HANGFIRE_CONNECTION_STRING` | Hangfire database connection string. |
<!-- api-docs:end -->

<!-- api-example:start -->
#### Docker Compose
[FengShuiKoi.dockercompose.yml](../../app/FengShuiKoi.dockercompose.yml ':include :type=yaml')
<!-- api-example:end -->

<!-- api-section:end -->
