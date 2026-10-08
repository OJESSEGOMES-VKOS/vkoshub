---
titulo: "Como fazer cortes com IA"
descricao: "Como fazer cortes com IA: transcrever o vídeo longo, pedir à IA os trechos que se sustentam sozinhos, revisar, recortar em 9:16 e legendar. Com prompt pronto."
busca: "como fazer cortes com ia"
publicado: 2026-10-06
---

Pra fazer cortes com IA, você transcreve o vídeo longo (podcast, live, aula, entrevista), pede pra IA ler a transcrição e sugerir os trechos que fazem sentido sozinhos, revisa essas sugestões, recorta os aprovados, reenquadra pra vertical e coloca legenda. Ferramentas prontas como o OpusClip fazem tudo isso num clique. Também dá pra montar o fluxo com o Claude, que lê a transcrição, sugere os cortes e escreve os comandos que recortam o vídeo. Nos dois casos, a parte que a IA não faz por você é decidir o que presta.

## O que é um bom corte

Antes de qualquer ferramenta, vale ter o critério claro, porque é ele que você vai pedir pra IA seguir. Um corte bom:

- **Faz sentido sem o resto do vídeo.** Quem nunca viu o episódio entende.
- **Abre com uma frase que prende.** Nada de "então, como eu tava falando".
- **Fecha uma ideia.** Termina numa conclusão, numa virada ou numa frase de efeito, não no meio do raciocínio.
- **Tem uma ideia só.** Dois assuntos num corte de 60 segundos viram nenhum.

A duração vem depois. Se a ideia fecha em 40 segundos, o corte tem 40 segundos.

## Passo a passo com o Claude

### 1. Escolha o vídeo de origem

Funciona melhor com vídeo onde alguém fala bastante e explica coisas: podcast, aula, live, entrevista. Corte só material que você tem direito de usar. Recortar vídeo de outra pessoa sem autorização pode render reivindicação de direitos autorais.

### 2. Transcreva com o tempo de cada palavra

A IA não assiste o vídeo como você. Ela lê. Por isso o primeiro passo é virar a fala em texto com marcação de tempo. O [Whisper](https://github.com/openai/whisper), modelo de transcrição aberto da OpenAI, roda no seu computador e entrega o texto com o tempo de cada palavra.

### 3. Peça os cortes com critério

Aqui está a diferença entre corte bom e corte aleatório: o pedido. Um prompt que funciona:

> Leia esta transcrição com tempos. Sugira até 8 trechos de 30 a 90 segundos que façam sentido sozinhos, pra quem nunca viu o vídeo. Para cada trecho, me dê: início e fim em segundos, a primeira frase (o gancho), por que ele funciona sozinho e uma nota de 1 a 10. Não comece nem termine no meio de uma frase. Descarte trechos que dependem de algo dito antes.

Pedir o motivo e a nota é o que deixa a sua revisão rápida. Você lê a justificativa e decide em segundos.

### 4. Revise: sugestão não é corte pronto

A IA sugere e você aprova. Leia cada trecho sugerido e pergunte: eu pararia de rolar o feed pra ver isso? Ajuste o início pra frase mais forte, puxe o fim pra fechar a ideia, descarte o que ficou morno.

Na ferramenta que usamos aqui, os cortes chegam como sugestão. Dá pra aprovar, rejeitar, ajustar início e fim direto na transcrição ou criar um corte novo selecionando um trecho do texto. Só o aprovado vai pra exportação.

### 5. Recorte

Com os tempos aprovados, o Claude escreve o comando pro ffmpeg, programa gratuito de linha de comando que corta e converte vídeo. Um corte que começa em 12min04,5s e dura 65,5 segundos fica assim:

```
ffmpeg -ss 724.5 -i episodio.mp4 -t 65.5 -c:v libx264 -c:a aac corte-01.mp4
```

Recodificar (o `libx264` e o `aac`) deixa o corte preciso no quadro. Pra dez cortes, o Claude escreve os dez comandos de uma vez.

### 6. Reenquadre pra vertical

Vídeo de podcast costuma ser deitado (16:9). Pra Reels, Shorts e TikTok, ele precisa virar 9:16. O jeito simples é recortar o centro da imagem. O jeito melhor é seguir o rosto de quem está falando, pra pessoa não sair do quadro quando se mexe.

### 7. Legenda e gancho na tela

Corte sem legenda perde quem assiste no mudo. Coloque legenda em blocos curtos, sincronizada com a fala, e um título no topo nos primeiros segundos que diga do que o corte trata. O título fica na tela pelo menos 1 segundo mais 3 palavras por segundo, pra dar tempo de ler.

O artigo [como colocar legenda automática em vídeo](/artigos/como-colocar-legenda-automatica-em-video) detalha essa parte.

## Ferramenta pronta ou fluxo próprio?

**Ferramenta pronta (tipo OpusClip).** Você sobe o vídeo e recebe os cortes já reenquadrados e legendados. É o caminho mais curto. Segundo a [página de planos do OpusClip](https://www.opus.pro/pricing), o plano grátis exporta em até 1080p, com limite de 3 dias pra baixar e marca d'água nos modelos de legenda animada. Os pagos começam em US$ 15 por mês. Em troca da praticidade, você fica no critério e no estilo da ferramenta.

**Fluxo próprio com o Claude.** Dá mais trabalho pra montar na primeira vez. Depois disso, você controla o critério de corte (o prompt é seu), o estilo da legenda e o formato, e o mesmo processo roda igual em todo episódio. O Claude Code vem incluído nos planos pagos do Claude, que começam em US$ 20 por mês ou US$ 17 por mês no plano anual, segundo a [página de preços do Claude](https://claude.com/pricing). O Whisper e o ffmpeg são gratuitos.

Se você vai cortar um podcast por mês, ferramenta pronta resolve. Se cortes viraram parte fixa da sua rotina ou do seu serviço, o fluxo próprio compensa.

## Erros comuns

- **Aceitar todos os cortes sugeridos.** A IA sugere bastante coisa morna. Seu filtro é o que separa.
- **Começar no meio da frase.** Os primeiros segundos ficam sem sentido.
- **Corte que depende de contexto.** "Como eu falei antes" mata o trecho.
- **Rosto fora do quadro no reenquadramento.**
- **Legenda sem revisão.** Nome errado na tela tira credibilidade.

Se você faz cortes pra outras pessoas, vale ler também [quanto cobrar por edição de vídeo](/artigos/quanto-cobrar-por-edicao-de-video). E se quer o processo inteiro de edição com o Claude, do vídeo longo aos cortes, ele está nos módulos do [VKOSHUB](/).

## Perguntas comuns

### Qual a melhor IA pra fazer cortes?

Pra quem quer rapidez, ferramentas prontas como o OpusClip. Pra quem quer controlar o critério e o estilo, o fluxo com Whisper, Claude e ffmpeg.

### A IA acerta os melhores momentos?

Acerta boa parte e erra alguns. Ela não sabe o que o seu público valoriza tanto quanto você, por isso a revisão humana fica no processo.

### Quanto tempo deve ter um corte?

O tempo de fechar uma ideia. Entre 30 e 90 segundos é uma faixa comum pra pedir à IA, mas um corte bom de 25 segundos não precisa ser esticado.

### Posso fazer cortes de vídeos de outras pessoas?

Só com autorização de quem tem os direitos. Sem isso, o corte pode ser removido e o canal pode receber reivindicação.
