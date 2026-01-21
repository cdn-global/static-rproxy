#!/bin/bash

# Fix Traefik routing by ensuring containers are in the right network
# and have the latest labels

set -e

echo "🔍 Checking Traefik network..."
if ! docker network inspect traefik-public &> /dev/null; then
    echo "⚠️  traefik-public network doesn't exist! Creating it..."
    docker network create traefik-public
fi

echo "🔄 Stopping frontend and backend..."
docker compose -f docker-compose.yml stop frontend backend

echo "🗑️  Removing old containers to force label refresh..."
docker compose -f docker-compose.yml rm -f frontend backend

echo "🚀 Recreating containers with updated labels..."
docker compose -f docker-compose.yml up -d frontend backend

echo "⏳ Waiting for containers to be healthy..."
sleep 5

echo "📋 Checking network connections..."
docker inspect static-rproxy-frontend-1 | grep -A 5 '"Networks"'

echo "📋 Checking Traefik labels..."
docker inspect static-rproxy-frontend-1 | grep -i "traefik.http.routers.dashboard.rule"

echo "✅ Done! Testing access..."
echo ""
echo "🧪 Test with:"
echo "   curl -I http://18.220.217.199/"
echo "   curl -I http://localhost:3000/"
