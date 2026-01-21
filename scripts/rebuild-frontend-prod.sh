#!/bin/bash

# Script to rebuild and redeploy the entire stack on production
# This will update all services including frontend with latest code
# Run this on your production server

set -e

echo "🔄 Pulling latest code..."
git pull

echo "🏗️  Building all Docker images..."
docker compose -f docker-compose.yml build

echo "🚀 Restarting all containers..."
docker compose -f docker-compose.yml up -d

echo "📋 Checking container status..."
docker compose -f docker-compose.yml ps

echo "📝 Viewing frontend logs..."
docker compose -f docker-compose.yml logs --tail=30 frontend

echo "✅ Deployment complete!"
echo ""
echo "🧪 Test the services:"
echo "   Frontend: curl -I http://localhost:3000"
echo "   Backend: curl -I http://localhost:8000/api/v1/utils/health-check/"
echo "   Via Traefik: curl -I http://18.220.217.199/"
echo "   Via domain: curl -I https://roamingproxy.com/"
