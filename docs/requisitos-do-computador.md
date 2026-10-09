# Requisitos do computador do aluno (produção de vídeo com o Claude)

Definidos em 2026-10-08. Só o PC do Jessé foi medido (Ryzen 7 7435HS, 16 GB, RTX 3050): o vídeo do Lula
(2,5 min) levou uns 20 min de render, com 3 renders ao mesmo tempo, que era o limite da memória.
**Os números das outras colunas são estimativa, ainda não medida.** O render do estilomestre02 depende de
processador e memória, quase nada de placa de vídeo (cada render simultâneo abre um Chrome de 1 a 1,5 GB).

## Frase pra página de venda
"Notebook ou PC com 8 GB de memória e SSD. Com 16 GB, fica mais rápido."

## Tabela

| | Roda (mínimo) | Confortável | Referência medida (PC do Jessé) |
|---|---|---|---|
| Processador | 4 núcleos e 8 threads, de 2019 pra cá (i5 de 10ª geração, Ryzen 5 3500U) | 6 núcleos ou mais | Ryzen 7 7435HS, 8 núcleos |
| Memória | 8 GB | 16 GB | 16 GB |
| Disco | SSD (obrigatório) | SSD NVMe, 60 a 150 GB livres | 2 SSDs |
| Placa de vídeo | não precisa | NVIDIA ajuda no recorte de pessoas | RTX 3050 |
| Sistema | Windows 10/11 64 bits ou macOS (M1 com 8 GB roda; 16 GB é melhor) | Windows 11 ou Mac com chip M | Windows 11 |
| Reels de 1 min (estimativa) | 30 a 45 min de render | 8 a 15 min | ~20 min pro de 2,5 min |

## Como a máquina fraca aguenta
- Um render por vez (não 3 juntos).
- Prévia leve pra aprovar, em minutos; o render final só roda depois de aprovado.
- Fechar o resto durante o render.
- O vídeo sai igual: máquina fraca deixa mais lento, não piora o resultado.

## Fora
- HD comum (sem SSD), notebook com 4 GB, dual-core ou Celeron.
- Chromebook, tablet e celular só servem pra pré-produção (pesquisa, roteiro, legenda) e pra aprovar uma
  sessão rodando no PC.
- Placa de vídeo cara só vira requisito pro módulo de 3D no Blender.

## Pendente
- Medir com 1 render e 8 GB simulados: pico de memória e tempo de 10 s do Lula. Até lá, o "8 GB" é hipótese.
- Teste de máquina automático (renderiza 10 s e diz se o computador do aluno passa).
