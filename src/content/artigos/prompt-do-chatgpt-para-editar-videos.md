---
titulo: "Prompt do ChatGPT para editar vídeos"
descricao: "7 prompts do ChatGPT pra editar vídeo: decupagem, gancho, legenda SRT, texto na tela, versão curta e revisão. Prontos pra copiar, com o que pôr em cada um."
busca: "prompt chatgpt para editar videos"
publicado: 2026-10-06
---

Um bom prompt do ChatGPT pra editar vídeo tem quatro partes: a transcrição da fala com o tempo de cada trecho, o formato do vídeo (reel 9:16 ou YouTube 16:9), o objetivo e as regras da sua edição, e o formato exato da resposta que você quer (lista de cortes com início e fim, arquivo SRT, tabela). Sem a transcrição com tempo, a IA não tem como dizer onde cortar. Sem o formato da resposta, você recebe um texto bonito que não dá pra aplicar no editor.

Abaixo estão os prompts que cobrem a edição inteira, um por etapa. Copie, troque o que está entre colchetes e cole a sua transcrição no fim. Eles funcionam igual no Claude.

## Antes de usar: tenha a transcrição com tempo

Todos os prompts partem da transcrição. Exporte a legenda automática do seu editor em SRT, ou transcreva com o [Whisper](https://github.com/openai/whisper), que roda no computador e marca o tempo de cada palavra. Corrija nome próprio e termo técnico escrito errado antes de colar. A legenda final sai daqui.

## 1. Prompt de decupagem

O primeiro corte: tirar o que atrapalha, sem cortar nada ainda.

```text
Você é um editor de vídeo experiente. Abaixo está a transcrição com tempo de um [reel vertical / vídeo de YouTube] de [duração] sobre [tema], feito pra [público].

Liste tudo o que deve sair do vídeo:
- pausas acima de [0,4] segundo
- frases repetidas ou começadas e abandonadas
- takes que eu refiz (fique com a última versão)
- trechos que não acrescentam ao ponto principal: [ponto principal]

Para cada item, responda numa tabela com: início, fim, texto do trecho e motivo.
Não reescreva minha fala. Não junte trechos de lugares diferentes.

Transcrição:
[cole aqui]
```

## 2. Prompt de gancho

A melhor frase do vídeo nem sempre está no começo.

```text
Com base na transcrição abaixo, encontre 3 trechos da minha própria fala que funcionariam como abertura de um [reel / vídeo de YouTube]. Cada trecho precisa fazer sentido sozinho, sem contexto anterior, e ter no máximo [3] segundos.

Para cada opção, me dê: início, fim, a frase exata e por que ela prende quem está rolando o feed.
Não invente frase nova. Use só o que eu falei.

Transcrição:
[cole aqui]
```

## 3. Prompt de legenda em SRT

```text
Transforme a transcrição abaixo num arquivo de legenda no formato SRT, em português do Brasil.

Regras:
- no máximo [2] linhas por bloco e [32] caracteres por linha
- cada bloco fica no mínimo [0,6] segundo na tela
- quebre a linha em pausa natural da fala, nunca no meio de uma expressão
- mantenha as palavras como eu falei, corrigindo só ortografia
- números como eu falei

Considere que os trechos abaixo foram cortados e ajuste os tempos: [cole a lista de cortes aplicados, ou escreva "nenhum"]

Responda só com o conteúdo do SRT, sem comentário.

Transcrição:
[cole aqui]
```

Depois de importar no editor, confira os primeiros blocos. Se o primeiro já estiver fora do tempo, o resto vai estar também.

## 4. Prompt de texto na tela

```text
Monte o roteiro de texto na tela para este vídeo.

Regras:
- o texto na tela é sempre o que eu estou falando naquele instante, nunca um resumo
- só as palavras mais fortes viram destaque: números, nomes, a ideia principal de cada trecho
- os primeiros [3] segundos ficam sem elemento, só eu e a legenda
- no máximo [1] destaque a cada [4] segundos

Responda numa tabela com: tempo de entrada, tempo de saída, texto exato e tipo (palavra grande, número, lista, print).

Transcrição:
[cole aqui]
```

## 5. Prompt pra versão curta

Pra tirar um reel de um vídeo longo, ou um corte de 30 segundos de um de 60.

```text
A partir da transcrição abaixo, monte uma versão de no máximo [30] segundos que faça sentido sozinha.

Quero:
- o trecho de abertura (gancho)
- a sequência de trechos, em ordem, com início e fim de cada um
- a duração total somada
- o que ficou de fora e por quê

Não mude a ordem das frases dentro de um trecho. Avise se algum corte deixar uma frase sem sentido.

Transcrição:
[cole aqui]
```

## 6. Prompt de plano de edição pro seu editor

Se você edita no CapCut, Premiere ou outro editor, peça o plano em passos que dá pra seguir na timeline.

```text
Junte a decupagem, o gancho, a legenda e o texto na tela que definimos nesta conversa num plano de edição passo a passo pra eu aplicar no [nome do editor].

Organize por ordem de tempo do vídeo final. Em cada passo diga: o tempo, o que fazer e o que conferir depois.
```

## 7. Prompt de revisão

Use depois de assistir à primeira versão. Quanto mais concreto, menos rodadas.

```text
Assisti à primeira versão. Os problemas:
- [0:14] o corte comeu o começo da palavra "[palavra]"
- [0:21] a legenda some antes de eu terminar a frase
- [0:33] o texto na tela entra atrasado

O que ficou bom e não deve mudar: [o gancho, o ritmo do meio, o fechamento].

Me diga o ajuste exato de cada problema, com o tempo novo.
```

## Como adaptar os prompts ao seu vídeo

- **Troque os números entre colchetes pelos seus.** Pausa de 0,4 segundo é bom ponto de partida pra reel; vídeo longo aguenta mais respiro.
- **Escreva as suas regras uma vez.** Se você sempre usa a mesma legenda e o mesmo tipo de destaque, guarde essas regras e cole no começo de toda conversa. O resultado fica igual de um vídeo pro outro.
- **Uma etapa por mensagem.** Os sete prompts juntos numa mensagem só dão uma resposta rasa de cada coisa.
- **Mantenha a conversa.** Fazer todas as etapas do mesmo vídeo na mesma conversa deixa a IA lembrar do que já foi decidido.

Esses prompts entregam a decisão da edição. Quem aplica é você, no editor. Se você quer que a IA também monte o arquivo, o caminho é um agente que roda no computador, explicado em [como usar o ChatGPT para editar vídeos](/artigos/como-usar-o-chatgpt-para-editar-videos) e em [como editar vídeo com IA](/artigos/como-editar-video-com-ia). No VKOSHUB os prompts de cada aula vêm prontos pra copiar, já ajustados pra reels, vídeo longo e anúncio em motion.

## Perguntas comuns

### Qual o melhor prompt pra editar vídeo no ChatGPT?

O que tem a transcrição com tempo, o formato do vídeo, as suas regras e o formato da resposta. O de decupagem é o que mais economiza tempo, porque define todo o resto.

### Esses prompts funcionam no Claude?

Funcionam. A lógica é a mesma: transcrição com tempo entra, lista de cortes, SRT ou tabela sai.

### Posso mandar o vídeo em vez da transcrição?

Pra decidir corte, a transcrição com tempo é mais confiável. Com ela, a IA aponta o segundo exato em vez de estimar.

### O ChatGPT aplica os cortes no vídeo?

Na conversa, não: ele entrega a decisão e você aplica no editor. Pra aplicar no arquivo, use um agente que roda no computador, como o Codex ou o Claude Code.
