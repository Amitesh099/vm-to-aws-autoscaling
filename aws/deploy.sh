#!/bin/bash
apt update
apt install -y docker.io

docker run -d -p 3000:3000 your-docker-image
