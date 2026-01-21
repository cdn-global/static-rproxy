#!/bin/bash

# Script to rebuild and redeploy frontend on production
# Run this on your production server

set -e

echo "🔄 Pulling latest code..."
git pull

echo "🏗️  Building frontend Docker image..."
docker compose -f docker-compose.yml build frontend

echo "🚀 Restarting frontend container..."
docker compose -f docker-compose.yml up -d frontend

echo "📋 Checking container status..."
docker compose -f docker-compose.yml ps frontend

echo "📝 Viewing recent logs..."
docker compose -f docker-compose.yml logs --tail=20 frontend

echo "✅ Frontend rebuild complete!"
echo ""
echo "🧪 Test the frontend:"
echo "   curl -I http://localhost (inside container network)"
echo "   curl -I https://roamingproxy.com (from outside)"
