# VKOSHUB (PHASE 1)

O site do VKOSHUB, o produto da PHASE 1 da marca @OJESSEGOMES: um hub de soluções de IA pra
editar e criar vídeo com o Claude. **O site é só vitrine e venda.** Não tem login, área de
membros, download nem coleta de dado. Aulas e checkout ficam na Cakto.

## O produto (verdade do dono, 2026-10-02)

- Plano anual, R$97 no preço fundador (sobe pra R$197 ou R$297 depois, sem data).
- Garantia de 7 dias.
- 4 módulos: reels com Claude, vídeo longo pro YouTube com Claude, anúncio em motion com
  Claude, motion 3D no Blender com Claude.
- Bônus: prompts e skills. Extras: modelos, projetos e métodos.
- Em construção (aparece como tal): Máquina de conteúdo e Produção 3D no Blender.

## O que existe

| Rota | O que é |
|---|---|
| `/` | A página de vendas. Copy em `copy/pagina-de-vendas.md`, usada sem reescrever. |
| `/assinar` | Passagem pro checkout da Cakto. Todo botão de compra aponta pra cá. |
| `/privacidade` | O site não coleta dados; pagamento e dados ficam na Cakto. |
| `/404` | Página de erro com caminho de volta. |
| `/sitemap.xml` | Mapa pro Google (só `/` e `/privacidade`). |

Rotas antigas (`/entrar`, `/membros`, `/solucoes`, `/api/*`, `/identidade`, `/playbooks`,
`/projetos`, `/ojessegomes`, com subrotas) voltam pra `/` com 301 pelo `public/_redirects`.

## Como rodar

```
npm install
npm run dev     # http://localhost:4321
npm run build   # gera dist/, tudo estático
```

Sem adapter, sem servidor: a Netlify publica a pasta `dist/` como site estático.

## O link do checkout

Variável `PUBLIC_URL_ASSINAR` (veja `.env.example`), lida no build. Precisa começar com
`https://`. Vazia: `/assinar` mostra "em breve". Preenchida: `/assinar` leva direto ao checkout.
Na Netlify, depois de mudar a variável, publique de novo.

## O vídeo de demonstração

Ainda não existe. Quando existir: arquivo em `public/demo/` (mp4 H.264 e poster .webp abaixo de
300 KB) e os três campos de `demo` em `src/data/hub.js`. A seção entra sozinha logo abaixo do
topo. Nada mais muda.

## O visual

Marca pessoal @OJESSEGOMES: `#0A0A0A`, `#F0EEE6`, menta `#7ED9B2` (sinal, nunca botão nem bloco
grande). Direção Console (cartela 19) com o estilo Veludo neon. Tema escuro, o único (o claro foi
removido). A menta aparece como luz: brilhos de fundo, frase de destaque nos títulos, discos de
"visto" e a aba do bônus, sempre fora de botão. O formato de cada módulo
(`src/components/Formato.astro`) é a capa dos cards. A oferta é um card único escuro com borda
e halo menta: pacote em duas colunas, preço grande, botão largo e o selo de garantia no rodapé. Tokens em `src/styles/tokens.css`, peças comuns em `src/styles/comum.css`.

## Mapa dos arquivos

- `src/pages/` as rotas acima.
- `src/components/` Cabecalho, Rodape, BotaoAssinar, Timeline, Formato.
- `src/data/hub.js` módulos (texto da copy) e o vídeo de demonstração.
- `public/_headers` cabeçalhos de segurança (CSP sem script em linha, sem formulário).
- `public/_redirects` as rotas antigas.
- `docs/` modelo de ameaças e LGPD da versão estática.

## Pendências do dono

1. Link do checkout da Cakto (`PUBLIC_URL_ASSINAR`).
2. Vídeo de demonstração.
3. As respostas que viram FAQ: Claude pago ou não, renovação após 12 meses, ferramentas em
   construção no plano, uso comercial (ver fim de `copy/pagina-de-vendas.md`).
