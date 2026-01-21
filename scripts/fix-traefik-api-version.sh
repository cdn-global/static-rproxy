#!/bin/bash
# Fix Traefik Docker API version mismatch

set -e

echo "🛑 Stopping old Traefik container..."
docker compose -f docker-compose.traefik.yml down

echo "🗑️  Removing old Traefik image to force fresh pull..."
docker rmi traefik:3.0 || true

echo "📥 Pulling latest Traefik 3.0 image..."
docker compose -f docker-compose.traefik.yml pull

echo "🚀 Starting Traefik with fresh image..."
docker compose -f docker-compose.traefik.yml up -d

echo "⏳ Waiting for Traefik to start..."
sleep 10

echo "📋 Checking Traefik logs..."
docker logs static-rproxy-traefik-1 --tail=20

echo ""
echo "✅ Traefik recreated!"
echo ""
echo "🧪 Test now:"
echo "   curl -I http://18.220.217.199/"
echo "   curl -I http://localhost:3000/"
