# Reserva: seção "A ferramenta que a gente usa pra produzir" (2026-10-09)

**Decisão do Jessé:** a seção do projeto de IA (Máquina de Conteúdo, com os prints do app) saiu da página.

## Como voltar

- O componente continua em `src/components/ProjetosIA.astro`, sem uso. Para voltar: importar em
  `src/pages/index.astro` e colocar `<ProjetosIA />` entre `<FluxoModelos />` e a oferta.
- Os dois prints (`maquina-estudio.webp`, `maquina-inicio.webp`) estão nesta pasta. Mover de volta
  para `public/telas/` (o componente aponta para `/telas/`).
- A oferta ainda lista "Projeto de IA: Máquina de Conteúdo (Em breve, R$197)" e a FAQ ainda tem
  "O que é a Máquina de Conteúdo?". Isso não foi mexido.
