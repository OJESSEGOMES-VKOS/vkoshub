#!/usr/bin/env bash
# Vídeos do biblioteca de estilos (/biblioteca-estilos). Pega o vídeo aprovado de cada modelo
# (sistema/modelos/<m>/referencia/referencia.mp4, ou a vitrine dos modelos ainda
# sem referência) e a demo de 5 s de cada estilo de cena, e gera a versão leve
# em public/guia/. O original fica intacto. Só vídeo nosso.
#   bash scripts/guia.sh
set -euo pipefail
cd "$(dirname "$0")/.."

FF="../editos/sistema/node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe"
MOD="../editos/sistema/modelos"
NOVOS="../editos/ojessegomes/conteudo/modelos-novos-03-11-26"
DEMOS="../editos/ojessegomes/conteudo/animation-styles-demos-03-11-26"
mkdir -p public/guia/modelos public/guia/cenas

leve() { # origem destino largura
  "$FF" -v error -y -i "$1" -vf "scale=$3:-2:flags=lanczos" \
    -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart "$2.mp4"
  "$FF" -v error -y -ss 2 -i "$1" -frames:v 1 -vf "scale=360:-2" -q:v 5 "$2.jpg"
}

for m in rosto-telas youtube-didatico autoridade interface-encenada trailer prova-print pregacao \
  pagina-de-livro minidocumentario texto-e-objeto motion-ouro vetor-minimo personagem anuncio-canvas anuncio-neon; do
  leve "$MOD/$m/referencia/referencia.mp4" "public/guia/modelos/$m" 720 && echo "ok $m"
done

# Ainda sem referencia/: a vitrine de 03/11 (nome antigo no arquivo).
leve "$NOVOS/renomado01.mp4" public/guia/modelos/especialista 720 && echo "ok especialista"
leve "$NOVOS/superdopamina01.mp4" public/guia/modelos/imagem-por-palavra 720 && echo "ok imagem-por-palavra"
leve "$NOVOS/cortepalestra01.mp4" public/guia/modelos/corte-palestra 720 && echo "ok corte-palestra"
leve "$NOVOS/documental01.mp4" public/guia/modelos/documental-dados 720 && echo "ok documental-dados"

# Demos dos estilos: animationstyleNN-*.mp4 vira cenaNN.
for f in "$DEMOS"/animationstyle*.mp4; do
  n="$(basename "$f" | sed -E 's/^animationstyle([0-9]{2}).*/\1/')"
  leve "$f" "public/guia/cenas/cena$n" 540 && echo "ok cena$n"
done
du -sh public/guia
