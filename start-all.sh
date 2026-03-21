#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

docker compose down 2>/dev/null || true
echo "Starting Docker services..."
docker compose up -d

echo "Waiting for database..."
until docker compose exec -T db pg_isready -U user -d app_db 2>/dev/null; do
  sleep 1
done

echo "Starting Next.js dev server..."
exec yarn dev
