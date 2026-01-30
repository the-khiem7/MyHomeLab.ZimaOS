<!-- api-section:start -->

<!-- api-docs:start -->
# Jenkins CI/CD

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
<!-- api-docs:end -->

<!-- api-example:start -->
#### Docker Compose
[JenkinsDock.dockercompose.yaml](../../jenkins/JenkinsDock.dockercompose.yaml ':include :type=yaml')

#### Dockerfile
[dockerfile](../../jenkins/dockerfile ':include :type=dockerfile')
<!-- api-example:end -->

<!-- api-section:end -->
