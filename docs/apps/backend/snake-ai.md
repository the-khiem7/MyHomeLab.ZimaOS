<!-- api-section:start -->

<!-- api-docs:start -->
# SnakeAI Snake Detection

<img src="https://avatars.githubusercontent.com/u/156354296?s=200&v=4" width="100" />

**Category:** self | **Author:** self | **Port:** 8386

FastAPI service for snake species detection using YOLO12 on CPU.

## Installation (CasaOS)

1.  Open **Files** in CasaOS.
2.  Navigate to proper location (e.g. `/DATA/AppData/custom-apps`).
3.  Create a file named `docker-compose.yml`.
4.  Paste the content from the source on the right.  Click the options menu on the file -> **Install**.

## Configuration

The following environment variables can be configured:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `DEFAULT_CONF` | `0.25` | Confidence threshold for detection. |
| `DEFAULT_IMGSZ` | `640` | Default image size for inference. |
| `DEFAULT_IOU` | `0.5` | Intersection over Union threshold. |
| `DEFAULT_TOPK` | `100` | Top K results to keep. |
| `LOG_LEVEL` | `info` | Logging verbosity. |
| `MAX_CONCURRENCY` | `1` | Max concurrent processing requests. |
| `MAX_SIDE` | `1920` | Max side length for image resizing. |
| `MAX_UPLOAD_MB` | `10` | Max upload size in MB. |
| `MODEL_PATH` | `/models/best.pt` | Path to the YOLO model file. |
| `MODEL_VERSION` | `7` | Model version identifier. |
| `RATE_LIMIT_RPM` | `120` | Rate limit in requests per minute. |
| `REQUEST_QUEUE_LIMIT` | `20` | Max request queue size. |

<!-- api-docs:end -->

<!-- api-example:start -->
#### Docker Compose
[SnakeAI.dockercompose.yml](../../../ZimaCompose/backend/SnakeAI.dockercompose.yml ':include :type=yaml')
<!-- api-example:end -->

<!-- api-section:end -->
