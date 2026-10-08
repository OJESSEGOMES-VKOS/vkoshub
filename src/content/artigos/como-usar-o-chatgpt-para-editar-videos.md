---
titulo: "Como usar o ChatGPT para editar vídeos"
descricao: "O ChatGPT não edita o arquivo de vídeo no chat, mas decide a edição por você: cortes, legenda e texto na tela. Veja o passo a passo e onde entra o Codex."
busca: "como usar chatgpt para editar videos"
publicado: 2026-10-06
---

O ChatGPT, na conversa do site ou do app, não edita o arquivo de vídeo pra você. O que ele faz muito bem é a parte de decidir a edição: a partir da transcrição da sua fala, ele lista os cortes com tempo, escreve a legenda em arquivo SRT, escolhe o texto que aparece na tela e monta o roteiro de edição pra você aplicar no seu editor. Se você quer que a IA da OpenAI mexa no arquivo e entregue o vídeo pronto, o caminho é o Codex, que roda no seu computador e executa comandos como o ffmpeg.

Na prática, isso divide o uso em dois níveis. No primeiro, o ChatGPT é o editor-chefe e você é quem aperta os botões. No segundo, ele também aperta os botões.

## Por que começar pela transcrição, e não pelo vídeo

Dependendo da conta, dá pra anexar um vídeo na conversa. Mas pra decidir corte, a transcrição com tempo é muito mais confiável do que pedir pra IA "assistir" ao arquivo. Com o texto e o segundo exato de cada fala, ela consegue dizer "corta de 0:12,4 a 0:14,1" sem chute.

Pra transcrever, você tem algumas opções:

- A legenda automática do editor que você já usa, exportada em SRT.
- O [Whisper](https://github.com/openai/whisper), modelo de transcrição aberto da OpenAI, que roda no computador e marca o tempo de cada palavra.
- Qualquer serviço de transcrição que exporte com marcação de tempo.

O que importa é ter o texto com os tempos. Texto corrido sem tempo serve pra roteiro, não pra corte.

## Passo a passo com o ChatGPT no chat

### 1. Cole a transcrição e dê o contexto

Diga o formato (reel 9:16 ou vídeo de YouTube 16:9), a duração que você quer, pra quem é o vídeo e qual é o ponto principal. Sem isso, a IA corta por critério dela, não pelo seu.

### 2. Peça a decupagem em lista

Peça pra ele listar o que sai (pausas longas, frases repetidas, take errado, trecho que não acrescenta) com início, fim e o texto de cada trecho. Revise a lista. Você é quem bate o martelo.

### 3. Peça o gancho

Peça três opções de abertura tiradas da sua própria fala, com o tempo de cada uma. Muitas vezes a melhor frase do vídeo está no meio, e começar por ela muda a retenção.

### 4. Gere a legenda em SRT

Peça o arquivo de legenda no formato SRT, já no tempo do vídeo cortado, com o limite de palavras por linha que você usa. O SRT entra em quase todo editor. Confira os primeiros blocos no seu editor antes de confiar no resto.

### 5. Monte o roteiro de texto na tela

Peça uma tabela com o tempo, a palavra ou frase que aparece e o tipo de destaque (texto grande, número, lista). A regra que funciona: o texto na tela é o que você está falando naquele instante, não um resumo.

### 6. Aplique no editor e volte com o problema

Aplique os cortes e a legenda no seu editor. Achou um problema? Volte na mesma conversa com o tempo e o que está errado. A conversa guarda o contexto do vídeo, então o ajuste sai mais rápido.

Se quiser os pedidos já escritos pra copiar, eles estão em [prompt do ChatGPT para editar vídeos](/artigos/prompt-do-chatgpt-para-editar-videos).

## Quando o ChatGPT entrega o vídeo pronto: o Codex

O [Codex](https://github.com/openai/codex) é o agente da OpenAI que roda localmente no seu computador. Ele lê e cria arquivos na pasta onde você abre e executa comandos. Com ele, o fluxo muda: em vez de te devolver a lista de cortes, ele mesmo roda o ffmpeg, corta, junta, queima a legenda e gera o MP4.

Segundo o repositório oficial, você entra no Codex com a sua conta do ChatGPT e usa como parte do plano Plus, Pro, Business, Edu ou Enterprise. Ele funciona no terminal, tem integração com editores de código e um app de desktop.

O raciocínio do fluxo é o mesmo do chat: transcrever, decupar, legendar, montar, revisar. A diferença é que cada etapa vira arquivo de verdade na pasta. É a mesma lógica de [como usar o Claude Code para editar vídeos](/artigos/como-usar-o-claude-code-para-editar-videos), com outro agente.

## O que dá pra fazer com o ChatGPT além do corte

- **Roteiro antes de gravar.** Um roteiro com frases curtas e pausas claras dá menos trabalho na edição.
- **Título e descrição** pro YouTube a partir da transcrição.
- **Capítulos do YouTube** com tempo, tirados da transcrição do vídeo longo.
- **Comandos de ffmpeg** explicados linha por linha, se você quiser rodar sem agente.
- **Versões do mesmo vídeo.** Uma versão de 30 segundos e outra de 60 a partir do mesmo bruto, com a lista de cortes de cada uma.

## Erros comuns

- **Mandar o vídeo e pedir "edita".** Sem transcrição com tempo e sem objetivo, a resposta é genérica.
- **Aceitar a legenda sem conferir no editor.** Um tempo errado no começo desalinha o resto.
- **Pedir tudo de uma vez.** Corte, legenda, texto na tela e título num pedido só viram uma resposta rasa de cada coisa.
- **Não dizer o que manter.** Ao pedir ajuste, diga o que estava bom.

No VKOSHUB tem o fluxo completo de edição com IA em vídeo, com os prompts prontos pra copiar e adaptar.

## Perguntas comuns

### O ChatGPT edita vídeo sozinho?

Na conversa do site ou do app, não. Ele decide a edição e entrega cortes, legenda e roteiro pra você aplicar. Pra entregar o arquivo pronto, use o Codex no computador.

### Dá pra mandar vídeo pro ChatGPT?

Em algumas contas dá pra anexar. Pra decidir corte com precisão, a transcrição com tempo funciona melhor que o arquivo de vídeo.

### O ChatGPT gera legenda para vídeo?

Gera o arquivo de legenda em SRT a partir da transcrição com tempo. Você importa esse arquivo no seu editor.

### ChatGPT ou Claude pra editar vídeo?

Os dois decidem bem a edição a partir da transcrição. Pra entregar o vídeo pronto, cada um tem o seu agente que roda no computador: o Codex, da OpenAI, e o Claude Code, da Anthropic.
