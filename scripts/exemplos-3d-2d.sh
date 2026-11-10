#!/usr/bin/env bash
# Exemplos de 3D e animação 2D da seção "Crie todo tipo de vídeo" da home.
# Corta um trecho de cada vídeo nosso e gera a versão leve em public/estilos/
# (mp4 H.264 + mp4 AV1 + capa .webp), no mesmo padrão dos outros exemplos.
#   bash scripts/exemplos-3d-2d.sh
set -euo pipefail
cd "$(dirname "$0")/.."

FF="../editos/sistema/tools/.cache/ffmpeg/ffmpeg.exe"
P=".."
SAIDA="public/estilos"

# nome | origem | início (s) | duração (s) | capa (s)
LISTA=(
  "3d-submarino|$P/editos/mentedetransbordo/conteudo/submarino-20-10-26/v1.mp4|0|45|6"
  "3d-consultorio|$P/estudio-3d/filmes/_antes-do-estudio/2026-09-30-promo-3d-30s/out/promo-consultorio-3d-30s.mp4|0|30|8"
  "2d-pixel|$P/editos/jovemdevirtude/conteudo/genesis-1-30-10-26/v9-pixel.mp4|0|21|6"
  "2d-vitral|$P/editos/jovemdevirtude/conteudo/genesis-1-30-10-26/v32-vitral-cosmico.mp4|0|21|6"
  "2d-cavaleiros|$P/editos/jovemdevirtude/conteudo/quatro-cavaleiros-09-11-26/v1.mp4|0|45|8"
)

for item in "${LISTA[@]}"; do
  IFS='|' read -r nome src ini dur capa <<< "$item"
  dest="$SAIDA/$nome"
  [ -s "$dest.av1.mp4" ] && [ -s "$dest.webp" ] && { echo "já existe $nome"; continue; }
  info="$("$FF" -hide_banner -i "$src" 2>&1 || true)"
  if grep -qE 'Video:.* 1920x1080' <<< "$info"; then
    esc="1280:720"; cap="640:360"
  else
    esc="720:1280"; cap="360:640"
  fi
  "$FF" -v error -y -ss "$ini" -t "$dur" -i "$src" -vf "scale=$esc:flags=lanczos" \
    -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart "$dest.mp4"
  "$FF" -v error -y -i "$dest.mp4" -c:v libaom-av1 -crf 38 -b:v 0 -cpu-used 8 -threads 4 -pix_fmt yuv420p \
    -c:a copy -movflags +faststart "$dest.av1.mp4"
  "$FF" -v error -y -ss "$capa" -i "$dest.mp4" -frames:v 1 -vf "scale=$cap" -c:v libwebp -quality 72 "$dest.webp"
  echo "ok $nome"
done
ls -la "$SAIDA" | grep -E "3d-(submarino|orla)|2d-"
