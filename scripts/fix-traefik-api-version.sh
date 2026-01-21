#!/bin/bash
# Fix Traefik Docker API version mismatch

set -e

echo "🛑 Stopping old Traefik container..."
docker compose -f docker-compose.traefik.yml down

echo "🗑️  Removing old Traefik image..."
docker rmi traefik:latest traefik:v3.2 traefik:3.0 || true

echo "📥 Pulling latest Traefik image..."
docker compose -f docker-compose.traefik.yml pull

echo "🚀 Starting Traefik (latest)..."
docker compose -f docker-compose.traefik.yml up -d

echo "🔍 Verifying DOCKER_API_VERSION is set in container..."
docker inspect static-rproxy-traefik-1 --format '{{json .Config.Env}}' | grep DOCKER_API_VERSION
if [ $? -eq 0 ]; then
    echo "✅ DOCKER_API_VERSION is present in environment."
else
    echo "❌ DOCKER_API_VERSION is MISSING!"
fi

echo "⏳ Waiting for Traefik to start..."
sleep 10

echo "📋 Checking Traefik logs..."
docker logs static-rproxy-traefik-1 --tail=20

echo ""
echo "🧪 Test now:"
echo "   curl -I http://18.220.217.199/"
