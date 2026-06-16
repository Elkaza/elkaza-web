#!/usr/bin/env bash
set -Eeuo pipefail

PROJECT_DIR="${PROJECT_DIR:-$HOME/elkaza-web}"
REMOTE_TARGET="${REMOTE_TARGET:-mohamed@100.69.253.5:/home/mohamed/fortress/compose/elkaza-web/html/}"
SITE_URL="${SITE_URL:-https://elkaza.at}"

cd "$PROJECT_DIR"

echo "==> Updating source"
git pull --ff-only origin main

echo "==> Installing dependencies"
if [[ -f package-lock.json ]]; then
  npm ci
else
  npm install
fi

echo "==> Running checks"
npm run lint
npm run typecheck

echo "==> Building static export"
npm run build

echo "==> Deploying static export to debian-core"
rsync -az --delete "$PROJECT_DIR/out/" "$REMOTE_TARGET"

echo "==> Smoke testing public site"
curl --fail --silent --show-error --head "$SITE_URL/" >/dev/null
curl --fail --silent --show-error --head "$SITE_URL/kontakt/" >/dev/null
curl --fail --silent --show-error --head "$SITE_URL/_next/static/" >/dev/null || true

www_location="$(curl --silent --show-error --head https://www.elkaza.at/ | awk 'tolower($1)=="location:" {print $2}' | tr -d '\r')"
if [[ "$www_location" != "$SITE_URL/" ]]; then
  echo "Unexpected www redirect target: ${www_location:-none}" >&2
  exit 1
fi

echo "Deployment complete: $SITE_URL"
