<!-- api-section:start -->

<!-- api-docs:start -->
# Jira Server

<img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/jira.webp" width="100" />

**Category:** Development | **Main Service:** jira | **Port:** 6100

Atlassian Jira Server for issue tracking and project management.

> **Tip**: This installation uses `haxqer/jira` and includes a MySQL container.

## Installation (CasaOS)

1.  Open **Files** in CasaOS.
2.  Navigate to proper location (e.g. `/DATA/AppData/Jira`).
3.  Create a file named `docker-compose.yml`.
4.  Paste the content from the source on the right.
5.  Click the options menu on the file -> **Install**.

## Configuration

**Jira Service**
| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `TZ` | `Asia/Ho_Chi_Minh` | Timezone. |
| `JVM_MINIMUM_MEMORY` | `1g` | (Commented out) Min Heap Size. |
| `JVM_MAXIMUM_MEMORY` | `12g` | (Commented out) Max Heap Size. |

**MySQL Service**
| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `MYSQL_DATABASE` | `jira` | Database name. |
| `MYSQL_ROOT_PASSWORD` | `123456` | Root password. |
| `MYSQL_USER` | `jira` | Database user. |
| `MYSQL_PASSWORD` | `123123` | Database password. |

## Volumes

- `/DATA/AppData/Jira` -> `/var/jira` (Application Data)
- `mysql_data` -> `/var/lib/mysql` (Database Data)
<!-- api-docs:end -->

<!-- api-example:start -->
#### Docker Compose
[JiraServer.dockercompose.yml](../../../ZimaCompose/jira/JiraServer.dockercompose.yml ':include :type=yaml')
<!-- api-example:end -->

<!-- api-section:end -->
