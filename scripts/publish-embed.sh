#!/usr/bin/env bash
# Builds the embed library and commits it to the `embed-dist` branch, which hosts consume as a pinned git
# dependency (for example "kubeezcut-embed": "github:Propolisa/KubeezCut#<commit>").
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
SOURCE=$(git rev-parse --short HEAD)
npm run -s build:embed
TMP=$(mktemp -d)
trap 'git worktree remove --force "$TMP" 2>/dev/null || true; rm -rf "$TMP"' EXIT
if git ls-remote --exit-code --heads origin embed-dist >/dev/null 2>&1; then
  git fetch -q origin +embed-dist:refs/remotes/origin/embed-dist
  git worktree add -q "$TMP" origin/embed-dist
  git -C "$TMP" checkout -q -B embed-dist
else
  git worktree add -q --detach "$TMP"
  git -C "$TMP" checkout -q --orphan embed-dist
fi
find "$TMP" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a dist-embed/. "$TMP/"
cp LICENSE "$TMP/LICENSE"
cat > "$TMP/package.json" <<JSON
{
  "name": "kubeezcut-embed",
  "version": "0.0.0-$SOURCE",
  "description": "KubeezCut editor islands for embedding (built from $SOURCE)",
  "license": "MIT",
  "type": "module",
  "exports": { ".": "./index.js", "./embed.css": "./embed.css" },
  "sideEffects": ["*.css"]
}
JSON
git -C "$TMP" add -A
git -C "$TMP" commit -q -m "embed build from $SOURCE" || { echo "embed-dist unchanged"; exit 0; }
git -C "$TMP" push -q origin HEAD:embed-dist
echo "embed-dist $(git -C "$TMP" rev-parse HEAD) built from $SOURCE"
