---
titulo: "Como editar vídeo para YouTube"
descricao: "Como editar vídeo para YouTube: organizar o material, cortar, montar os primeiros 30 segundos, dar ritmo, cuidar do áudio, criar capítulos e exportar certo."
busca: "como editar video para youtube"
publicado: 2026-10-06
---

Pra editar um vídeo para YouTube, você organiza o material, faz a decupagem (tira pausas, erros e repetições), monta um começo que cumpre a promessa do título nos primeiros 30 segundos, dá ritmo trocando o que aparece na tela, acerta o áudio, cria capítulos e exporta em MP4, 16:9, no mesmo frame rate da gravação. Vídeo longo dá mais trabalho que Reels porque tem mais decisão: o que fica, em que ordem e como manter a pessoa assistindo até o fim. A IA já ajuda bastante nessas decisões, e a seção final mostra como.

## Antes de abrir o editor

### Tenha um roteiro, nem que seja em tópicos

Edição de vídeo longo sem roteiro vira garimpo: você assiste uma hora de gravação procurando o vídeo que deveria ter planejado antes. Uma lista de tópicos na ordem certa já resolve metade.

### Organize os arquivos

Uma pasta por vídeo, com subpastas pra gravação, telas, imagens e música. Parece bobagem até você perder 20 minutos procurando um print.

## Passo a passo da edição

### 1. Decupagem: o corte bruto

Assista a gravação e tire o que não serve: pausa longa, tentativa errada, frase repetida, trecho que fugiu do assunto. Quando você gravou a mesma frase duas ou três vezes, fica a melhor inteira e as outras saem inteiras.

O objetivo dessa etapa não é deixar bonito. É chegar numa linha de fala limpa, do começo ao fim, que já conta a história sozinha.

### 2. Os primeiros 30 segundos

Quem clicou quer saber logo se o vídeo entrega o que o título prometeu. Uma ordem que funciona bem pro começo:

1. **A promessa**, confirmando o que o título e a miniatura disseram.
2. **O problema ou a pergunta**, falado pra quem assiste.
3. **Uma prova rápida**: um print, um resultado na tela, o antes e depois.
4. **O plano**: "são três partes" ou "vou mostrar o processo inteiro".

O que sai do começo: apresentação longa, vinheta comprida, "antes de começar, se inscreva". Isso pode vir depois, se vier.

### 3. Ritmo: troque o que aparece na tela

Num vídeo longo, plano parado por muito tempo cansa. Mas cortar tudo no mesmo ritmo também cansa. O que funciona é variar: rápido onde tem material pra mostrar, mais calmo onde tem argumento pra acompanhar.

Ferramentas de ritmo que não pedem nada sofisticado:

- **Tela e imagem de apoio.** Falou de um site, mostra o site. Falou de um número, mostra o número.
- **Zoom no rosto** pra marcar uma frase importante, mantendo os olhos na mesma altura entre um zoom e outro, pra o olhar de quem assiste não pular.
- **Nada parado.** Print ou foto na tela ganha um movimento lento de aproximação, quase imperceptível.
- **Voltar pro rosto.** Depois de um trecho cheio de tela, o rosto falando reorganiza a atenção.

### 4. Texto e gráficos: menos é mais

No vídeo longo, texto na tela ajuda quando reforça e atrapalha quando pipoca o tempo todo.

- O texto mostra o que está sendo dito, não outra frase.
- Texto grande fica pro número importante e pra ideia central de cada parte.
- O título entra antes da ação. Primeiro a pessoa lê, depois vê acontecer.
- Texto fixo fica na tela pelo menos 1 segundo mais 3 palavras por segundo.

### 5. Áudio: a voz manda

Num vídeo longo, imagem simples passa e áudio ruim cansa em poucos minutos. Na edição:

- A voz fica clara e no mesmo volume do começo ao fim.
- A música fica baixa por baixo da voz. Trocar de trilha quando muda de parte ajuda a marcar a passagem.
- Trecho de outro vídeo ou efeito não pode entrar mais alto que a narração.
- Antes de exportar, ouça um pedaço no fone e outro na caixa de som do celular.

### 6. Legenda

O YouTube gera legenda automática em português depois do upload. Revise no YouTube Studio, porque ela erra nome próprio e termo técnico. Se quiser legenda gravada na imagem, use só em trechos importantes, pequena e sempre na mesma altura. Mais detalhes em [como colocar legenda automática em vídeo](/artigos/como-colocar-legenda-automatica-em-video).

### 7. Capítulos

Capítulos deixam a pessoa pular pro que interessa e mostram a estrutura do vídeo. Pela [regra oficial do YouTube](https://support.google.com/youtube/answer/9884579?hl=pt-BR), na descrição:

- O primeiro tempo começa em 00:00.
- O vídeo precisa de pelo menos três marcações, em ordem crescente.
- Cada capítulo dura pelo menos 10 segundos.

```
00:00 O problema
01:42 O passo a passo
07:15 Os erros mais comuns
10:30 Resumo
```

### 8. Exportar

As [configurações de upload recomendadas pelo YouTube](https://support.google.com/youtube/answer/1722171?hl=pt-BR) pedem:

- Arquivo MP4, vídeo em H.264 e áudio em AAC-LC.
- Proporção 16:9, a padrão do player.
- O mesmo frame rate em que o vídeo foi gravado (24, 25, 30 e 60 são comuns).
- Pra 1080p, a taxa de bits de referência é 8 Mbps.

## Onde a IA entra no vídeo longo

O vídeo longo é onde a IA mais economiza tempo, porque o trabalho pesado é decidir. O fluxo que usamos aqui:

1. **Transcrever** a gravação com o tempo de cada palavra.
2. **O Claude lê a transcrição** e aponta frases repetidas, trechos fora do assunto e pausas longas. Ele propõe a ordem e a divisão em partes.
3. **Ele monta o corte bruto por código**, renderizado com ffmpeg ou numa composição de vídeo, junto com os tempos dos capítulos e um rascunho da descrição.
4. **Você assiste e pede ajuste** em português: "essa parte fica antes", "tira o exemplo do meio", "zoom nessa frase".

Você continua sendo o editor. A IA faz o braçal, você decide o que fica. Pra ver o fluxo de perto, leia [como usar o Claude Code para editar vídeos](/artigos/como-usar-o-claude-code-para-editar-videos). E o módulo de vídeos longos pro YouTube do [VKOSHUB](/) ensina esse processo do começo ao fim.

## Os erros mais comuns

- **Começo lento.** A promessa do título demora a aparecer.
- **Mesmo ritmo do começo ao fim.** Tudo rápido ou tudo parado cansa igual.
- **Música competindo com a voz.**
- **Anunciar o fim.** "Pra fechar..." dá à pessoa a deixa pra sair.
- **Texto na tela que não é a fala.**

## Perguntas comuns

### Qual programa usar pra editar vídeo para YouTube?

DaVinci Resolve tem versão gratuita completa pro computador. Premiere é pago. Também dá pra editar com IA, com o Claude montando o corte e você revisando.

### Quanto tempo leva pra editar um vídeo do YouTube?

Depende da duração, da quantidade de tela e do quanto a gravação veio limpa. Roteiro antes e decupagem com IA são as duas coisas que mais encurtam esse tempo.

### Preciso colocar legenda no YouTube?

O YouTube gera a legenda automática em português sozinho. Vale revisar no YouTube Studio pra corrigir os erros.

### Como colocar capítulos no vídeo?

Escreva os tempos na descrição, começando em 00:00, com pelo menos três marcações e capítulos de no mínimo 10 segundos.
