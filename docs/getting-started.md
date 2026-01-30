# Getting Started with ZimaOS Home Lab

This guide helps you set up and manage the services in this repository using ZimaOS / CasaOS.

## Prerequisites

- **Hardware**: ZimaBoard, ZimaBlade, or any x86/ARM system running ZimaOS/CasaOS.
- **OS**: ZimaOS (latest version recommended) or CasaOS on top of Ubuntu/Debian.
- **Docker**: Pre-installed on ZimaOS.

## Installation

1. **Clone the repository**:
   SSH into your ZimaOS device and clone this repository to a persistent location (e.g., `/DATA/AppData/custom-apps`).
   ```bash
   git clone https://github.com/the-khiem7/MyHomeLab.ZimaOS.git
   cd MyHomeLab.ZimaOS
   ```

2. **Deploy an App**:
   Navigate to the app directory (files are at root `ZimaCompose/backend/`) and use `docker-compose`.
   ```bash
   docker-compose -f ZimaCompose/backend/SnakeAI.dockercompose.yml up -d
   ```

3. **Import to CasaOS UI**:
   - Open Files on CasaOS.
   - Locate the `docker-compose.yml` file.
   - Context Options -> Import (if supported) or manually add using the "Custom App" feature and copying the docker-compose content.

## Directory Structure

- `ZimaCompose/`: Contains Docker Compose definitions for applications (grouped by `backend`, `jira`, `jenkins`).
- `docs/`: This configuration documentation.
