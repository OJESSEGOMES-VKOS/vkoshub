#!/usr/bin/env bash
# Exemplos extras de cada modelo pro guia dos estilos. Pega os vídeos que já
# existem em projetos/estudio-2d-local/modelos/<modelo>/exemplos/ e gera a versão
# leve em public/exemplos/<modelo>--<nome>.mp4 (+ .webp de capa).
# Só entra vídeo nosso ou de marca fictícia: nada de cliente nem de terceiro.
#   bash scripts/exemplos.sh
set -euo pipefail
cd "$(dirname "$0")/.."

ORIGEM="../estudio-2d-local/modelos"
SAIDA="public/exemplos"
LISTA=(
  "modelodinamico01/reel-editado-pelo-claude.mp4"
  "modelodinamico02/reel-editado-pelo-claude.mp4"
  "anunciocanvas01/marcai-anuncio-canvas-v6.mp4"
  "anunciomotion01/fatia-anuncio.mp4"
  "anunciomotion01/marcai-anuncio.mp4"
  "anunciomotion01/rende-anuncio-16x9.mp4"
  "youtubedark01/hoje-youtubedark.mp4"
  "youtubeedition01/youtubeedition01-apresentacao.mp4"
)

mkdir -p "$SAIDA"
for item in "${LISTA[@]}"; do
  modelo="${item%%/*}"
  nome="$(basename "${item#*/}" .mp4)"
  src="$ORIGEM/$modelo/exemplos/$nome.mp4"
  dest="$SAIDA/$modelo--$nome"
  # Deitado vira 1280x720, em pé vira 720x1280. Um pesado por vez.
  w=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$src" | tr -dc 0-9)
  h=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of csv=p=0 "$src" | tr -dc 0-9)
  if [ "$w" -gt "$h" ]; then esc="1280:720"; capa="640:360"; else esc="720:1280"; capa="360:640"; fi
  ffmpeg -v error -y -i "$src" -vf "scale=$esc:flags=lanczos" \
    -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart "$dest.mp4"
  ffmpeg -v error -y -ss 3 -i "$src" -frames:v 1 -vf "scale=$capa" -c:v libwebp -quality 72 "$dest.webp"
  echo "ok $modelo/$nome ($w x $h)"
done
ls -la "$SAIDA"
