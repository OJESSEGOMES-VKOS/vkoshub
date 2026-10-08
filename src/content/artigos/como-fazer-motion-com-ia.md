---
titulo: "Como fazer motion com IA"
descricao: "Dá pra fazer motion com IA sem saber After Effects: você descreve a animação em português, o Claude escreve o código e você revisa. Veja o passo a passo."
busca: "como fazer motion com ia"
publicado: 2026-10-06
---

Pra fazer motion com IA hoje, o caminho mais controlável é este: você descreve a animação em português, cena por cena e com o tempo de cada coisa, uma IA como o Claude escreve o código dessa animação, o computador renderiza o vídeo e você revisa e pede ajuste. Ninguém arrasta keyframe. O texto entra no segundo certo, as cores são as da sua marca e qualquer mudança é uma frase, não uma tarde refazendo a timeline.

Tem outro caminho, que é pedir pra um gerador de vídeo "criar um motion". Funciona pra imagem bonita e solta. Pra peça com texto, logo, preço e marca, o motion feito por código ganha, porque o resultado é exato e editável. O resto deste artigo é sobre ele.

## Os dois jeitos de fazer motion com IA

**Gerador de vídeo (texto vira vídeo).** Você escreve um pedido e recebe um clipe pronto. É rápido, mas você não controla o detalhe. A letra pode sair torta, a cor muda de uma versão pra outra e mexer em um elemento costuma significar gerar tudo de novo.

**Motion por código.** A IA não "desenha" o vídeo. Ela escreve uma receita (código) que diz onde cada elemento está em cada quadro. Essa receita é renderizada e vira um mp4. Como é código, dá pra mudar "o título entra em 1 segundo" sem estragar o resto. É o jeito que a gente usa nos anúncios em motion e nas telas animadas dos vídeos.

A ferramenta mais usada pra isso é o [Remotion](https://www.remotion.dev/docs/), que monta vídeo a partir de código React. O Remotion mantém um [plugin oficial pro Claude Code](https://www.remotion.dev/docs/ai/claude-code-plugin) com as regras de boas práticas da ferramenta, e isso faz diferença: sem essas regras, a IA erra mais no tempo e no posicionamento.

## O que você precisa antes de começar

- **Um computador.** Motion por código não roda no celular.
- **Acesso a uma IA que escreve código.** O Claude Code é o que mais usamos. O ChatGPT também escreve esse tipo de código, mas você vai copiar e colar mais.
- **Os arquivos da sua marca.** Logo em SVG (vetor), as cores em código hex e a fonte. Sem isso a IA inventa, e inventa mal.
- **O texto da peça.** Motion ruim quase sempre começa com texto demais.

Se você nunca mexeu com o Claude Code, vale ler antes [como usar o Claude Code pra editar vídeos](/artigos/como-usar-o-claude-code-para-editar-videos). A instalação é a parte mais chata e só acontece uma vez.

## Passo a passo: do texto ao vídeo animado

### 1. Escreva o roteiro em cenas

Uma ideia por cena. Se a cena precisa de duas frases pra se explicar, ela é duas cenas. Um anúncio de 15 segundos costuma caber em quatro a seis cenas.

Exemplo hipotético, pra uma loja de café:

1. "Seu café acaba antes da semana." (problema)
2. "A gente entrega a cada 15 dias." (solução)
3. Foto do pacote com o preço. (produto)
4. "Assine pelo site." (chamada)

### 2. Calcule o tempo de leitura

Esse é o erro mais comum em motion feito às pressas: o texto some antes de dar tempo de ler. A conta que usamos é simples. Um segundo pra pessoa achar o texto, mais um segundo a cada três palavras. "A gente entrega a cada 15 dias" tem sete palavras, então fica pelo menos três segundos e pouco na tela.

Outra regra que resolve muita coisa: o título entra antes da ação. Primeiro a pessoa lê o que vai acontecer, depois vê acontecer.

### 3. Escreva o pedido como se fosse pra um motion designer

Coloque na primeira linha a proporção (9:16 pra Reels e Stories, 16:9 pro YouTube). Depois a duração total, as cores, a fonte e o clima ("calmo e limpo", "rápido e enérgico"). Aí descreva cena por cena com tempo exato: "o título sobe com fade em 0,4 segundo e fica parado até 3 segundos". "Fade lento" não diz nada pra IA. "Fade de 0,4 segundo" diz.

Peça uma coisa de cada vez. Trinta segundos com dez cenas num pedido só vira bagunça. Faça as duas primeiras cenas, aprove, siga.

### 4. Entregue os elementos prontos

Não peça pra IA desenhar seu produto do nada. Ela monta com blocos e o resultado parece de brinquedo. Dê a foto do produto, o logo em SVG e o print real da tela, se for um app. Quanto mais coisa real entra, mais a peça parece sua.

### 5. Renderize, assista e peça ajuste

A primeira versão chega uns 80% lá. É normal. Assista inteira, anote o que incomoda e peça o ajuste em frase direta: "a cena 2 está rápida, segura mais um segundo". Diga também o que você gostou, pra IA não mexer no que já estava bom. Três ou quatro rodadas de ajuste na mesma conversa costumam bastar.

Antes de uma mudança grande, peça pra IA fazer uma cópia e mexer só nela. Se piorar, você volta.

### 6. Exporte no formato do destino

Pra Reels, 9:16. Pro YouTube, 16:9. Se a peça vai virar anúncio, deixe as bordas livres de texto, porque a interface do aplicativo cobre parte da tela. Os números exatos estão no artigo sobre [como fazer um anúncio em vídeo](/artigos/como-fazer-um-anuncio-em-video).

## Onde o motion com IA ainda escorrega

Saber disso antes poupa tempo:

- **Posição exata por descrição.** "Um cursor clicando no botão" pode sair errado duas, três vezes. Funciona melhor quando o layout é organizado em grade e o elemento tem nome no código.
- **Gente e lugar real.** Motion por código é ótimo pra texto, forma, gráfico e tela de app. Pessoa andando na rua ainda é filmagem.
- **Gosto.** A IA executa. Quem decide se a peça está boa é você. Assistir, comparar com uma referência que você admira e cortar o excesso continua sendo trabalho seu.

Dois cuidados práticos. O Remotion tem [licença própria](https://www.remotion.dev/docs/license), então leia antes de usar em trabalho comercial. E não rode o Claude Code com permissão total na máquina só pra ir mais rápido. Deixe ele pedir licença antes de executar o que importa.

## Por onde começar se você nunca fez

Comece com uma peça de 6 a 10 segundos: uma frase, o seu logo, uma chamada. Pequena o bastante pra terminar na mesma tarde. Depois disso, as outras peças são variação da primeira. Se o seu objetivo é criativo pra anúncio, o próximo passo é [como fazer criativos em vídeo com IA](/artigos/como-fazer-criativos-em-video-com-ia).

No VKOSHUB, o módulo de anúncios em motion mostra esse fluxo inteiro aplicado, com os prompts usados nas aulas.

## Perguntas comuns

### Preciso saber programar pra fazer motion com IA?

Não. A IA escreve o código. Você precisa saber descrever o que quer ver, com tempo e ordem, e saber dizer o que está errado quando assiste.

### Dá pra fazer motion com IA no celular?

Não com esse método. Escrever, renderizar e revisar motion por código pede computador.

### Qual IA é melhor pra motion?

Pra motion por código, uma IA que escreve e roda código no seu computador, como o Claude Code, dá menos trabalho. O ChatGPT escreve o código também, mas você faz mais coisa na mão.

### Motion com IA substitui o After Effects?

Pra peça com texto, logo, gráfico e tela de app, muitas vezes sim. Pra efeito visual pesado e composição com filmagem, o After Effects ainda faz coisa que o código não faz com a mesma facilidade.
