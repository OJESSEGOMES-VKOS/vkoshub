# Reserva: página e menção ao VKOS Studio (2026-11-03)

**Decisão do Jessé:** o VKOS Studio não é trabalhado no VKOSHUB por enquanto. Saíram a página
`/vkos-studio`, o link no topo, a pergunta do FAQ, o texto no `llms.txt` e a menção no
"precisa de computador". Antes disso, o item de bônus "Acesso ao VKOS Studio" já tinha saído da oferta.

## O que está aqui

- `vkos-studio.astro`: a página inteira, já com a copy atualizada pro VK Editor (linha do tempo,
  legenda palavra por palavra, texto, imagem, forma e grupo, cortes e silêncio, exportação igual à prévia).
- `ProjetosIA.astro`: o componente da seção "Projeto de IA" (nunca esteve em uso depois de 09/10).
- `vkos-studio-imagens/`: os 4 prints do VK Editor (`inicio`, `editor`, `adicionar`, `cortes`).
  Eles usam o projeto `dynamic01-vitrine`, que é vídeo do próprio Jessé.

## Como voltar

1. Mover `vkos-studio.astro` para `src/pages/` e `ProjetosIA.astro` para `src/components/`.
2. Mover `vkos-studio-imagens/` para `public/vkos-studio/` (a página aponta pra esse caminho).
3. Recolocar `{ href: '/vkos-studio', rotulo: 'VKOS Studio' }` e o `<nav>` no `Cabecalho.astro`
   (o markup e o CSS do `nav` foram apagados; ver o histórico do git).
4. Tirar `/vkos-studio` de `astro.config.mjs` e `public/_redirects`, que hoje mandam pra home.
5. Rever a copy: ela diz "em desenvolvimento, fora do plano de R$47", que deve ser conferido no dia.
