# Production 404 Fix - Step by Step

## Problem
Frontend returns 404 because:
1. Container has old Traefik labels (without IP routing)
2. Production hasn't pulled latest docker-compose.yml changes

## Solution

### On Production Server (18.220.217.199):

```bash
# 1. Go to project directory
cd ~/static-rproxy  # or wherever your project is

# 2. Pull latest changes (includes IP routing fix)
git pull

# 3. Verify the docker-compose.yml has IP in the routing rule
grep "dashboard.rule" docker-compose.yml
# Should show: Host(`roamingproxy.com`) || Host(`www.roamingproxy.com`) || Host(`18.220.217.199`)

# 4. Force recreate containers with new labels
docker compose down
docker compose up -d --build

# 5. Wait for services to start
sleep 10

# 6. Verify the container has the new labels
docker inspect static-rproxy-frontend-1 | grep "dashboard.rule"
# Should now show the IP address

# 7. Verify Traefik network
docker network inspect traefik-public | grep -A 3 "frontend"

# 8. Test direct access to frontend (bypasses Traefik)
curl -I http://localhost:3000/

# 9. Test through Traefik with IP
curl -I http://18.220.217.199/

# 10. Test through Traefik with domain
curl -I http://roamingproxy.com/
```

## If Still 404 After Above:

### Check Traefik is Running:
```bash
docker ps | grep traefik
docker logs static-rproxy-traefik-1 --tail=50
```

### Restart Traefik to Force Router Refresh:
```bash
docker restart static-rproxy-traefik-1
sleep 5
curl -I http://18.220.217.199/
```

### Check Traefik Dashboard (if enabled):
```bash
curl http://localhost:8090/api/http/routers
```

## Expected Working State:

- ✅ Frontend container has label with IP: `Host(`18.220.217.199`)`
- ✅ Frontend is in `traefik-public` network
- ✅ Direct access works: `curl http://localhost:3000/` → 200 OK
- ✅ Traefik routing works: `curl http://18.220.217.199/` → 200 OK
- ✅ Domain routing works: `curl http://roamingproxy.com/` → 200 OK
