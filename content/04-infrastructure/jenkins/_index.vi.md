---
title: "Jenkins CI/CD"
date: 2026-08-07
weight: 1
chapter: false
---

Jenkins automation server for building and deploying projects.

## Installation (CasaOS)

1.  Open **Files** in CasaOS.
2.  Navigate to proper location (e.g., `/DATA/AppData/jenkins`).
3.  Create a file named `docker-compose.yml`.
4.  Paste the content from the source on the right.
5.  Click the options menu on the file -> **Install**.

## Setup instructions

1. Access Jenkins at `http://<your-ip>:8080`.
2. Retrieve the initial admin password from the container logs:
   ```bash
   docker logs jenkins_container_name_here
   ```

#### Docker Compose

```yaml
name: jenkinsdock
x-casaos:
  title:
    custom: ""
    en_us: JenkinsDock
  author: self
  category: self
  hostname: ""
  icon: https://raw.githubusercontent.com/the-khiem7/MyHomeLab.ZimaOS/da98a882ffa0b23767c91b5e3e36ce52a597eb60/docs/image/JenkinsDock.png
  index: /
  is_uncontrolled: false
  port_map: "8080"
  scheme: http
  store_app_id: jenkinsdock

services:
  jenkinsdock:
    stop_grace_period: 30s
    cpu_shares: 50
    command: []
    container_name: JenkinsDock
    depends_on:
      dind:
        condition: service_healthy
        required: true
    deploy:
      resources:
        limits:
          memory: 8283291648
        reservations:
          devices: []
    environment:
      - DOCKER_BUILDKIT=1
      - DOCKER_HOST=unix:///runner/services/docker/docker.sock
      - TZ=Asia/Ho_Chi_Minh
    hostname: JenkinsDock
    image: thekhiem7/jenkinsdock:lts-jdk17
    labels:
      icon: https://raw.githubusercontent.com/the-khiem7/MyHomeLab.ZimaOS/da98a882ffa0b23767c91b5e3e36ce52a597eb60/docs/image/JenkinsDock.png
    ports:
      - target: 8080
        published: "8080"
        protocol: tcp
    restart: always
    user: root
    healthcheck:
      test: ["CMD", "curl", "-fsS", "--connect-timeout", "2", "--max-time", "5", "-o", "/dev/null", "http://localhost:8080/login"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 3m
    volumes:
    - type: bind
      source: /DATA/AppData/JenkinsDock/home
      target: /var/jenkins_home
    - type: bind
      source: /DATA/AppData/JenkinsDock/data
      target: /data
    - type: bind
      source: /DATA/AppData/DockerInDocker/dockerSocket
      target: /runner/services/docker
    devices: []
    cap_add: []
    networks:
      - jenkinsdock
    privileged: false

  dind:
    stop_grace_period: 60s
    stop_signal: SIGTERM
    cpu_shares: 90
    command:
      - --host=unix:///runner/services/docker/docker.sock
      - --storage-driver=overlay2
    container_name: dind
    deploy:
      resources:
        limits:
          memory: 8283291648
        reservations:
          devices: []
    environment:
      - DOCKER_TLS_CERTDIR=
    image: docker:27-dind
    labels:
      icon: https://raw.githubusercontent.com/the-khiem7/MyHomeLab.ZimaOS/da98a882ffa0b23767c91b5e3e36ce52a597eb60/docs/image/JenkinsDock.png
    privileged: true
    restart: always
    healthcheck:
      test: ["CMD", "docker", "-H", "unix:///runner/services/docker/docker.sock", "info"]
      interval: 10s
      timeout: 5s
      retries: 15
      start_period: 20s
    volumes:
      - type: bind
        source: /DATA/AppData/DockerInDocker/data-root
        target: /var/lib/docker
      - type: bind
        source: /DATA/AppData/DockerInDocker/dockerSocket
        target: /runner/services/docker
    ports: []
    devices: []
    cap_add: []
    networks:
      - jenkinsdock

networks:
  jenkinsdock:
    name: jenkinsdock
```

#### Dockerfile

```dockerfile
FROM jenkins/jenkins:lts-jdk17

USER root
RUN apt-get update \
&& apt-get install -y docker.io \
&& rm -rf /var/lib/apt/lists/*
USER jenkins
```

