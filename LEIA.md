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
| `/bem-vindo` | Privada (noindex, fora do menu e do mapa). É o destino de obrigado da Hubla. O endereço difícil `/bem-vindo-xhchb3589zn1` (usado de 12 a 13/11/2026) redireciona pra cá: botão da comunidade no WhatsApp no topo, boas-vindas do fundador + instalação Windows/Mac com telas animadas (`src/components/instalacao/`) e WhatsApp flutuante. Umami: whatsapp, copiar-frase, sistema. |
| `/for-members` | Área de membros v1 beta (endereço trocado de `/membros` em 2026-11-13, só na rota, pra ninguém entrar por palpite) (MVP, 2026-11-13), privada e ainda sem login. Barra própria (`src/components/MembrosTopo.astro`) com Bem-vindo, Biblioteca de estilos, DIY e Free skills; atalhos em cartões e o botão da comunidade no WhatsApp. Estilo comum em `src/styles/membros.css`. |
| `/for-members/diy` | Os playbooks (lista em `src/data/diy.js`, uma página por playbook em `src/pages/for-members/diy/`). O 1º é `animacoes-2d-e-3d`: animação 2D e 3D com o Claude (estudo de referências, tema, roteiro, voz pelo KIE.AI e vídeo). O DIY é um entregável do VKOSHUB, mas não nasce do EditOS: nenhum playbook depende dele. |
| `/alternativa` | Em validação (2026-11-12), fora do Google e do mapa. A página inicial refeita numa identidade clara: papel morno, menta como marca-texto, verde só no botão, fontes Bricolage Grotesque e Plus Jakarta Sans em arquivo (`public/alt/fontes/`). Mesma oferta e mesmos fatos da home. Página em `src/pages/alternativa.astro`, visual em `src/styles/alternativa.css`, foto e ícone em `public/alt/`. Se for aprovada, vira a `/`; se não, apaga esses três lugares. |
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
