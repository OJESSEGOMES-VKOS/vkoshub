#!/usr/bin/env bash
# Vitrine de modelos: copia os vídeos finais pra dentro do projeto e gera as
# versões leves da web. Pra trocar um vídeo, substitua o arquivo em
# conteudo/2026-10-10-vitrine-modelos/final/ (mesmo nome) e rode de novo.
#   bash scripts/vitrine.sh            -> todos
#   bash scripts/vitrine.sh profissional01   -> só um
set -euo pipefail
cd "$(dirname "$0")/.."

ORIGEM="../../conteudo/2026-10-10-vitrine-modelos/final"
COPIA="midia-vitrine"        # originais (fora do git, ver .gitignore)
SAIDA="public/vitrine"       # o que vai pro site
MODELOS=(modelodinamico03 pregacaodinamica01 profissional01 storypodcast01 superpodcast01 youtubeedition01 ilustrations01 sofistmotion01 anunciomotion01 youtubedark01)
[ $# -gt 0 ] && MODELOS=("$@")

mkdir -p "$COPIA" "$SAIDA"
for m in "${MODELOS[@]}"; do
  src="$ORIGEM/vitrine-$m.mp4"
  cp -f "$src" "$COPIA/"
  # Um pesado por vez. 720x1280, H.264 e AV1 com o áudio da fala.
  ffmpeg -v error -y -i "$COPIA/vitrine-$m.mp4" -vf scale=720:1280:flags=lanczos \
    -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart "$SAIDA/$m.mp4"
  ffmpeg -v error -y -i "$COPIA/vitrine-$m.mp4" -vf scale=720:1280:flags=lanczos \
    -c:v libsvtav1 -preset 6 -crf 38 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart "$SAIDA/$m.av1.mp4"
  # A capa sai aos 2 s; quem começa no fundo vazio usa um quadro mais tarde.
  case "$m" in ilustrations01) t=6 ;; *) t=2 ;; esac
  ffmpeg -v error -y -ss "$t" -i "$COPIA/vitrine-$m.mp4" -frames:v 1 -vf scale=360:640 -c:v libwebp -quality 72 "$SAIDA/$m.webp"
  echo "ok $m"
done
ls -la "$SAIDA"
