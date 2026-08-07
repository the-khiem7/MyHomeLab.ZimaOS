---
title: "Jira Server"
date: 2026-08-07
weight: 1
chapter: false
---

![Jira icon](https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/jira.webp)

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

#### Docker Compose

```yaml
version: '3.9'
x-casaos:
  main: jira
  title:
    en_us: "Jira"
  description:
    en_us: "Atlassian Jira Server for issue tracking and project management."
  icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/jira.webp"
  category: Development
  port_map: "6100"
  index: /
  tips:
    before_install:
      en_us: |
        - Author repo: https://github.com/haxqer/jira.git

services:
  jira:
    image: haxqer/jira:9.17.5
    container_name: jira-srv
    environment:
      - TZ=Asia/Ho_Chi_Minh
#      - JVM_MINIMUM_MEMORY=1g
#      - JVM_MAXIMUM_MEMORY=12g
#      - JVM_CODE_CACHE_ARGS='-XX:InitialCodeCacheSize=1g -XX:ReservedCodeCacheSize=8g'
    depends_on:
      - mysql
    ports:
      - "6100:8080"
    volumes:
      - /DATA/AppData/Jira:/var/jira
    restart: always
    networks:
      - network-bridge

  mysql:
    image: mysql:8.0
    container_name: mysql-jira
    environment:
      - TZ=Asia/Ho_Chi_Minh
      - MYSQL_DATABASE=jira
      - MYSQL_ROOT_PASSWORD=123456
      - MYSQL_USER=jira
      - MYSQL_PASSWORD=123123
    command: ['mysqld', '--character-set-server=utf8mb4', '--collation-server=utf8mb4_bin']
#    ports:
#      - "13306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    restart: always
    networks:
      - network-bridge

networks:
  network-bridge:
    driver: bridge

volumes:
  home_data:
    external: false
  mysql_data:
    external: false
```

