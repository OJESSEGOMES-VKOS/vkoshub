#!/usr/bin/env bash
# Os vídeos do leque do topo da home: um trecho mudo de cada vídeo nosso,
# 720x1280, mp4 H.264 + capa .webp em public/leque/.
#   bash scripts/leque.sh
set -euo pipefail
cd "$(dirname "$0")/.."

FF="../editos/sistema/tools/.cache/ffmpeg/ffmpeg.exe"
P="../editos"
SAIDA="public/leque"
mkdir -p "$SAIDA"

# nome | origem | início (s) | duração (s) | capa (s)
LISTA=(
  "3d-floresta|$P/mentedetransbordo/conteudo/perdido-floresta-31-10-26/v1.mp4|0|16|3"
  "2d-baralho|$P/umjovemprofessor/conteudo/baralho-nunca-existiu-10-11-26/v1.mp4|0|16|3"
  "2d-elias|$P/jovemdevirtude/conteudo/elias-carmelo-09-11-26/v2.mp4|0|16|3"
  "3d-ambar|$P/../estudio-3d/filmes/ambar/entrega/ambar-15s-9x16.mp4|0|15|3"
  "2d-papel-lua|$P/umjovemprofessor/conteudo/papel-ate-a-lua-10-11-26/v1.mp4|0|16|3"
  "edicao-earshot|$P/ojessegomes/conteudo/#03/v4.mp4|0|16|3"
)

for item in "${LISTA[@]}"; do
  IFS='|' read -r nome src ini dur capa <<< "$item"
  dest="$SAIDA/$nome"
  [ -s "$dest.mp4" ] && [ -s "$dest.webp" ] && { echo "já existe $nome"; continue; }
  "$FF" -v error -y -ss "$ini" -t "$dur" -i "$src" -vf "scale=720:1280:flags=lanczos" -an \
    -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "$dest.mp4"
  "$FF" -v error -y -ss "$capa" -i "$dest.mp4" -frames:v 1 -vf "scale=360:640" -c:v libwebp -quality 72 "$dest.webp"
  echo "ok $nome"
done
ls -la "$SAIDA"
