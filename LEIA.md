# VKOSHUB

A plataforma de entrega da @OJESSEGOMES, que vai morar em **vkoshub.com**.

No degrau atual ela serve pra uma coisa só: entregar os materiais e capturar audiência. Sem login, sem banco de dados, sem sistema. Cada material entra na mão, no código.
O Hub só vira produto de mercado depois, com equipe e estrutura. Isso está escrito na BÚSSOLA
e vale como regra de escopo: funcionalidade que não serve à audiência fica pra depois do SMC.

## Estado atual

Páginas:

- **`/ojessegomes`**, o espaço do @OJESSEGOMES dentro do Hub. Abre com o hero da marca pessoal,
  o cartão de perfil (contagem de projetos publicados, avatar, `@ojessegomes`, os botões de
  seguir) e leva pra Instagram e YouTube, que é o destino que o Cérebro define no degrau
  atual. Abaixo vem a listagem, onde os cards preenchem a linha e pulam pra próxima sozinhos
  conforme a lista cresce.
- **`/ojessegomes/<slug>`**, a página dos projetos que ainda estão em produção (hoje o VKREATOR
  e o VKOS-APP). Mostra categoria, título, resumo, formato e tempo, a capa (ou a provisória),
  e o bloco honesto de "Em produção" com os botões de seguir.
- **`/ojessegomes/vkos`**, a página do VKOS, escrita à mão porque ele já roda e tem o que contar:
  o que é, o ciclo de três passos (Cérebro, comando, prova), os 37 comandos agrupados, as sete
  regras que ele não quebra, os projetos que já saíram dele, o mapa de pastas e as duas
  conexões. Todo dado dela sai do `CLAUDE.md`, das skills e do `CONEXOES.md` do próprio VKOS.

  **A versão fica numa constante só.** A página mostra a versão do VKOS em três lugares (o selo
  da abertura, o texto do "O que é" e o fecho), e os três leem a constante `versao` no começo do
  arquivo. Hoje ela é `4.1`, e o número certo é sempre o da última entrada do `CHANGELOG.md` da
  raiz do VKOS. A contagem de comandos também não é digitada: ela sai da própria lista.

  **A regra de roteamento:** projeto com `estado: 'ativo'` ganha página própria e sai do
  `getStaticPaths` do `[slug].astro`. Projeto sem esse campo é atendido pela rota dinâmica.
  Sem esse filtro as duas rotas colidiriam no mesmo endereço.
- **`/identidade`**, a referência de design do Hub inteiro: cor, tipografia, espaço, forma,
  componentes, movimento e voz, com o contraste de cada par de cor conferido e escrito ao
  lado. Toda tela nova sai dela.

O VKOS não tem mais página própria de "em breve": ele é um projeto como os outros, em
`/ojessegomes/vkos`. O rodapé ("Criado por VKOS") leva pra lá.

Na barra do topo, o `/OJESSEGOMES` ao lado da marca não é link, é o caminho da rota. Dentro de
uma página de projeto, ganha mais um segmento com o slug (`/OJESSEGOMES/nome-do-projeto`), pra
mostrar que aquele projeto tem o próprio endereço dentro do espaço da marca.

Os cards da listagem já são clicáveis e levam pra `/ojessegomes/<slug>`.

Hoje a lista tem só 3 projetos, os reais:

- **VKOS** (`estado: 'ativo'`), este mesmo sistema que constrói o Hub. É o único já rodando.
- **VKREATOR**, ainda em planejamento: a plataforma de produção de conteúdo com IA (carrossel
  editável, criação e edição de Reels, gestão do Instagram e métricas).
- **VKOS-APP**, ainda em planejamento: o VKOS com interface própria, as mesmas funções por
  trás de uma tela, mais rápidas e mais interativas.

## Como adicionar um playbook

Abra `src/data/playbooks.js`, copie um bloco, troque os campos e salve. Só isso. Não tem
banco de dados, não tem painel, não tem cadastro. A página se reorganiza sozinha.

### A capa do card

Todo card tem um espaço 16:9 no topo. Sem imagem, ele mostra a capa provisória do sistema,
que é uma peça de marca, não uma foto fingida.

Pra pôr a capa de verdade: salve o arquivo em `public/capas/`, use 1280 por 720 pixels em
WebP abaixo de 300 KB, e acrescente dois campos no playbook:

```js
capa: '/capas/nome-do-arquivo.webp',
capaAlt: 'o que a imagem mostra, na sua voz',
```

A provisória some sozinha naquele card. Os outros continuam com ela até você fazer o mesmo.

### As capas da seção "Projetos criados pelo VKOS"

Ficam em `public/obras/` e são fotos reais dos sites no ar, tiradas em 04/08/2026 em 1280 por
720 pixels, WebP, todas abaixo de 50 KB. Foto de site envelhece: quando um deles for
redesenhado, tire a foto de novo e troque o arquivo, mantendo o mesmo nome.

A lista fica no começo do `src/pages/ojessegomes/vkos.astro`, na variável `obras`. Pra somar um
projeto, copie um bloco e troque os campos. Um projeto pode ter mais de um link, como o do
Gabriel Braga, que tem o site e a página de bio.

**A regra da descrição:** ela diz o que a peça **é**, nunca o resultado que ela deu. O Cérebro
proíbe usar case de cliente e número de faturamento como prova, e o que vale nesta marca é o
trabalho aparecendo funcionando.

### A foto do avatar

Fica em `public/perfil/jesse.webp`, 320 por 320 pixels, gerada a partir do arquivo que você
salvou em `identidade/logo/`. Pra trocar por uma foto nova: salve o original em
`identidade/logo/`, converta pra WebP quadrado (qualquer editor de imagem serve, ou peça pra eu
converter), e sobrescreva `public/perfil/jesse.webp` mantendo o nome.

### A capa da página do VKOS

O VKOS não tem tela pra fotografar, então a capa dele não é imagem nenhuma: é um SVG desenhado
à mão dentro do próprio `vkos.astro`, mostrando o ciclo de três passos (Cérebro, Comando,
Prova) que a seção "Como funciona" explica embaixo. Ele usa os mesmos tokens de cor do resto
do Hub, então acompanha sozinho se a paleta mudar. Não precisa de arquivo nem de manutenção.

## Como rodar

Precisa do Node instalado. Uma vez, pra baixar o que o projeto usa:

```
npm install
```

Depois, sempre que quiser ver no navegador:

```
npm run dev
```

Ele mostra um endereço parecido com `http://localhost:4321`. Abre no navegador e a página está
lá. Pra fechar, aperta Ctrl+C na janela do comando.

Pra gerar a versão final que vai pro ar:

```
npm run build
```

Os arquivos prontos ficam em `dist/`.

## O que existe

| Arquivo | O que faz |
|---|---|
| `src/styles/tokens.css` | **A fonte única do visual.** Toda cor, tamanho, espaço, raio e duração do Hub está aqui. Mudou aqui, mudou no Hub inteiro. |
| `src/data/playbooks.js` | **A lista de playbooks.** É o único arquivo que você mexe pra a listagem crescer. |
| `src/layouts/Base.astro` | O esqueleto de toda página: cabeça, idioma, atalho de teclado, fontes, e o script do efeito de entrada. |
| `src/components/Cabecalho.astro` | A barra do topo, compartilhada. Mexeu aqui, mudou em todas as páginas. Recebe `projeto` opcional pra somar o slug na rota exibida. |
| `src/components/Rodape.astro` | O rodapé, compartilhado. |
| `src/components/CardPlaybook.astro` | O card da listagem. Já linka pra `/ojessegomes/<slug>`. |
| `src/pages/ojessegomes.astro` | A listagem. |
| `src/pages/ojessegomes/[slug].astro` | A página dos projetos em produção, uma rota por entrada de `playbooks.js` que não seja `estado: 'ativo'`. |
| `src/pages/ojessegomes/vkos.astro` | A página do VKOS, escrita à mão. Modelo pra quando outro projeto ficar ativo. |
| `src/pages/identidade.astro` | A página de identidade visual. |
| `astro.config.mjs` | Configuração. O redirecionamento da raiz está aqui, numa linha só, pra sumir quando a home nascer. |
| `public/favicon.svg` | O ícone da aba. |

## As decisões que já estão travadas

- **Direção Minimalista Editorial, estilo Laboratório creme.** Escolhidos pela leitura de
  design declarada na própria página.
- **O Hub roda em tema escuro.** Os dois temas vivem inteiros no `tokens.css`. Pra voltar pro
  claro, troque `const tema = 'escuro'` por `'claro'` no `src/layouts/Base.astro`. É uma
  palavra e o sistema inteiro acompanha.
- **As três cores vêm do Cérebro** e são as mesmas nos dois temas: off-white `#F0EEE6`,
  quase preto `#0A0A0A`, verde menta `#7ED9B2`. O que gira é o papel de cada uma. No escuro
  o quase preto vira o fundo e o off-white vira a letra.
- **A menta muda de trabalho com o tema.** No claro ela dá 1.45:1 contra a página e é
  proibida como texto, só marca. No escuro dá 11.74:1 e escreve. A ração continua a mesma nos
  dois: marcador, link e dado vivo, nunca bloco grande e nunca botão.
- **A textura pontilhada é o fundo do site inteiro e ela fica parada.** É uma camada fixa na
  viewport, atrás de tudo, e o conteúdo sobe por cima: efeito de janela. Não tem paralaxe e
  não tem script, porque fundo que se mexe junto com a rolagem briga com a leitura.
- **A rolagem é a nativa do navegador, nunca sequestrada por JS.** O que dá vida a ela é o
  conteúdo entrar em cena (`.reveal`), com um escalonamento curto dentro da linha de cards.
  Quem pede menos movimento no sistema operacional recebe tudo já visível, sem animação.
- **O card de playbook é uma ilha clara dentro da página escura.** Ele leva
  `data-tema="claro"` e tudo dentro dele herda o tema claro inteiro, sem paleta duplicada.
  A elevação, porém, nunca mora dentro da ilha: quem aplica a sombra é o item da grade, que
  vive no tema da página, senão a silhueta do card some no fundo.
- **Existem tokens que só fazem sentido em relação a outra cor** (`--sobre-tinta`,
  `--sobre-painel`, `--sobre-menta`, `--tinta-hover`). Sem eles o tema não inverte. Use-os
  sempre que a cor de um texto depender do que está atrás dele, nunca `--pagina` como
  sinônimo de "cor clara".
- **A profundidade tem dois recursos e eles nunca se empilham.** Em fundo liso, o tom da
  superfície agrupa sozinho. Sobre a grade pontilhada da listagem, o card fica mais claro que
  a página e ganha uma sombra só, larga e rasa (`--sombra-card`).
- **Nenhum botão colorido.** A ação primária é preta. A cor está reservada pro que sinaliza.
- **Título não é negrito.** Ele é grande, peso 400, com tracking apertado. A autoridade vem do
  tamanho e da contenção.
- **Duas famílias, três vozes:** Geist no título e na interface, Geist Mono no técnico.

## O que falta pro lançamento

Nada disso trava a página de identidade. É a lista pra quando o Hub for pro ar de verdade:

- [ ] Confirmar os dois links de perfil do hero, que foram derivados do @ do Cérebro.
- [ ] As rotas de material, uma por conteúdo entregue.
- [ ] A home de verdade, e aí sai o redirecionamento do `astro.config.mjs`.
- [ ] `og:image` de 1200 por 630 pixels, pra o link chegar bonito no WhatsApp.
- [ ] `robots.txt` e `sitemap.xml`, que só fazem sentido com rotas reais.
- [ ] Onde hospedar. Netlify, Vercel e Cloudflare Pages servem, todos com HTTPS de graça.
- [ ] Se entrar formulário de captura, ele precisa de destino real e da linha de
      consentimento ao lado do botão. Formulário que não envia é o defeito mais caro possível.
