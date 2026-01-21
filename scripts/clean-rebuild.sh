#!/bin/bash
set -e

echo "Stopping all containers..."
docker compose -f docker-compose.traefik.yml down -v --remove-orphans || true
docker compose down -v --remove-orphans || true

echo "Pruning system (optional, strictly requested 'remove all' so being thorough for this project's containers)..."
# We won't do full system prune to avoid killing other unrelated things on the host, 
# but the above down -v removes the project volumes.

echo "Ensuring docker network exists..."
docker network create traefik-public || echo "Network traefik-public already exists"

echo "Starting Traefik..."
docker compose -f docker-compose.traefik.yml up -d

echo "Building and Starting Application..."
docker compose build --no-cache
docker compose up -d

echo "Done! Environment refreshed."
