---
titulo: "Como editar vídeo com IA"
descricao: "Editar vídeo com IA é transcrever a fala, deixar a IA decidir cortes e legenda e montar o vídeo por código. Veja o passo a passo, do bruto ao vídeo pronto."
busca: "como editar video com ia"
publicado: 2026-10-06
---

Pra editar vídeo com IA, você grava, transcreve a fala com o tempo de cada palavra e entrega essa transcrição pra IA (Claude ou ChatGPT) decidir o que sai, onde entra a legenda e o que aparece na tela. Quem monta o vídeo de fato é um programa, como o ffmpeg ou um editor por código, que a própria IA comanda. No fim você assiste, aponta o que não ficou bom e pede o ajuste em português.

Esse é o ponto que quase ninguém explica: a IA de conversa não "assiste" ao seu vídeo e arrasta blocos numa timeline. Ela trabalha em cima do texto da fala e dos tempos. É por isso que o processo começa pela transcrição, e não pelo editor.

## O que a IA faz bem na edição

- **Decupagem:** achar pausa longa, frase repetida, take errado e cortar.
- **Legenda:** transformar a transcrição em legenda sincronizada, quebrada em linhas que dão pra ler.
- **Texto na tela:** escolher as palavras fortes da fala pra virar destaque.
- **Ritmo:** sugerir onde entra zoom, onde troca o enquadramento, onde cabe uma tela de apoio.
- **Montagem:** escrever e rodar o código que corta, junta e renderiza o arquivo final.

O que ela ainda faz mal: posicionar um elemento no ponto exato da tela só pela descrição, e entender o tom de um trecho que você não explicou. Nesses dois pontos, quem decide é você.

## O passo a passo, do bruto ao vídeo pronto

### 1. Grave pensando na edição

Errou uma frase? Pare, respire e repita a frase inteira. Não emende no meio da palavra. Uma pausa clara entre ideias deixa o corte limpo depois. Isso vale com ou sem IA, mas com IA faz mais diferença, porque o corte é decidido pelo áudio e pelo texto.

### 2. Transcreva com o tempo de cada palavra

A transcrição precisa vir com marcação de tempo, não só o texto corrido. O [Whisper, modelo de transcrição aberto da OpenAI](https://github.com/openai/whisper), roda no próprio computador e entrega isso. Um cuidado: ele acerta bem o que foi dito, mas o tempo da palavra pode vir com atraso. Se a legenda parecer atrasada, é ali que está o problema.

### 3. Peça a decupagem pra IA

Com a transcrição em mãos, peça pra IA listar o que sai: pausas acima de um limite, frases repetidas, o take errado que você refez. Peça a resposta em formato de lista com início e fim de cada trecho. Você confere a lista antes de qualquer corte acontecer.

### 4. Gere a legenda

A IA transforma a transcrição em arquivo de legenda (o formato SRT é o mais comum e quase todo editor aceita). Diga quantas palavras por linha, quantas linhas na tela e quanto tempo mínimo cada bloco fica no ar. Legenda que pisca rápido demais ninguém lê.

### 5. Decida o que aparece na tela

A regra que mais funciona: a tela ilustra o que está sendo dito. Se você fala "corte", entra o corte. Se fala um número, o número aparece do jeito que você disse. Texto na tela que não é a sua fala compete com você pela atenção e perde.

### 6. Monte e renderize

Aqui tem dois caminhos:

- **Agente no computador.** O [Claude Code](/artigos/como-usar-o-claude-code-para-editar-videos) roda na sua máquina, executa o ffmpeg, corta, junta, queima a legenda e gera o MP4. Pra animação e texto em movimento, ele escreve a composição num editor por código, como o Remotion, e renderiza.
- **Chat mais editor tradicional.** A IA do chat entrega a lista de cortes, o SRT e o roteiro de texto na tela, e você aplica no editor que já usa. É mais manual, mas já tira de você a parte de decidir.

### 7. Revise como editor

Assista inteiro, sem pular. Confira cada ponto de corte: palavra cortada pela metade aparece logo ali. Depois peça o ajuste por escrito, com o tempo do trecho: "no 0:14 o corte comeu o começo do 'mas', devolve dois décimos". Quanto mais concreto o pedido, menos rodadas.

## Chat ou agente: qual escolher

Se você quer só ajuda pra decidir e edita no seu programa de sempre, o chat resolve. O ChatGPT e o Claude fazem bem a parte de pensar a edição, e no artigo sobre [como usar o ChatGPT para editar vídeos](/artigos/como-usar-o-chatgpt-para-editar-videos) tem esse fluxo detalhado.

Se você quer que a IA entregue o arquivo pronto, precisa de um agente que rode no computador e mexa nos arquivos. O Claude Code faz isso, e o Codex, da OpenAI, segue a mesma ideia. A primeira vez dá trabalho de instalar. Depois, o mesmo fluxo roda vídeo após vídeo, e é aí que a IA começa a economizar horas de verdade.

## Os erros que mais travam quem começa

- **Pedir tudo num prompt só.** "Edita meu vídeo" não diz nada. Separe: decupagem, legenda, texto na tela, montagem.
- **Aceitar a primeira versão.** A primeira sai perto. As duas ou três rodadas de ajuste é que deixam o vídeo com cara de editado.
- **Não dizer o que gostou.** Ao pedir ajuste, diga também o que manter. Senão a IA mexe no que estava bom.
- **Confiar no tempo da transcrição sem conferir.** Corte que come sílaba quase sempre vem de tempo errado da palavra.
- **Encher a tela.** Os primeiros segundos funcionam melhor só com você e a legenda. O resto entra depois.

No VKOSHUB tem esse fluxo inteiro mostrado em vídeo, com os prompts e as skills prontos pra copiar, aplicado a reels, vídeo longo pro YouTube e anúncio em motion.

## Perguntas comuns

### Preciso saber editar vídeo pra editar com IA?

Não. Você precisa saber dizer o que quer e reconhecer quando algo ficou errado. A parte técnica, a IA faz.

### Qual a melhor IA pra editar vídeo?

Pra decidir a edição, Claude e ChatGPT resolvem bem. Pra entregar o arquivo pronto, você precisa de um agente que rode no computador, como o Claude Code.

### Dá pra editar vídeo com IA no celular?

Dá pra pedir decupagem, legenda e roteiro pelo app do chat. A montagem por código e o render pedem computador.

### A IA consegue cortar os silêncios do vídeo sozinha?

Consegue, a partir da transcrição com tempo ou da energia do áudio. Mas confira os pontos de corte, porque é ali que aparece palavra cortada pela metade.
