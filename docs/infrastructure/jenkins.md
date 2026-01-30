# Jenkins CI/CD

Jenkins automation server for building and deploying projects.

## Configuration

- Docker Compose: [JenkinsDock.dockercompose.yaml](../../jenkins/JenkinsDock.dockercompose.yaml)
- Dockerfile: [dockerfile](../../jenkins/dockerfile)

## Deployment

```bash
cd jenkins
docker-compose -f JenkinsDock.dockercompose.yaml up -d
```

## Setup

1. Access Jenkins at `http://<your-ip>:8080`.
2. Retrieve the initial admin password from the container logs:
   ```bash
   docker logs jenkins_container_name_here
   ```
