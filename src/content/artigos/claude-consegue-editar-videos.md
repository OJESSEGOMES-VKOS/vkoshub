---
titulo: "Claude consegue editar vídeos?"
descricao: "Consegue, mas não pelo chat. O Claude edita vídeo pelo Claude Code, que roda o ffmpeg no seu computador. Veja o que ele faz, o que não faz e como começar."
busca: "claude consegue editar videos"
publicado: 2026-10-06
---

Consegue, mas não pelo chat do site. No claude.ai você não anexa arquivo de vídeo: a [central de ajuda da Anthropic](https://support.claude.com/en/articles/8241126-upload-files-to-claude) lista só documentos (PDF, DOCX, TXT e afins) e imagens (JPEG, PNG, GIF e WebP) como arquivos aceitos. Quem edita vídeo de verdade é o [Claude Code](https://code.claude.com/docs/en/overview), a versão do Claude que lê e cria arquivos e roda comandos no seu computador. Ele usa programas como o ffmpeg pra cortar, juntar, legendar e renderizar, guiado pela transcrição da sua fala.

Então a resposta curta é: o Claude não é um editor com timeline, mas ele comanda as ferramentas que editam. E isso, na prática, dá um vídeo pronto.

## Como o Claude edita sem "assistir" ao vídeo

O Claude trabalha em cima de texto e de imagem. Pra editar vídeo, o fluxo transforma o vídeo nessas duas coisas:

1. **A fala vira texto com tempo.** Uma ferramenta de transcrição, como o Whisper, gera cada palavra com o segundo em que foi dita.
2. **A imagem vira quadros.** Quando precisa enxergar o vídeo (onde está o rosto, se o fundo é claro ou escuro), o Claude Code extrai alguns quadros com o ffmpeg e olha as imagens.
3. **O Claude decide.** Com a transcrição, ele escolhe o que corta, onde entra a legenda, qual palavra vira destaque na tela.
4. **O código monta.** Ele escreve e roda os comandos que cortam e juntam os trechos, queimam a legenda e geram o MP4. Pra animação, escreve a composição num editor por código, como o Remotion, e renderiza.
5. **Você revisa.** Assiste, aponta o que não ficou bom, e ele refaz só aquele trecho.

Não é teoria. O vídeo de demonstração da página do VKOSHUB é um reel editado 100% pelo Claude Code, com corte, legenda e texto na tela decididos e montados por ele.

## O que o Claude faz bem na edição

- Cortar pausas, respirações longas e takes repetidos.
- Gerar legenda sincronizada, no tamanho e no número de linhas que você pedir.
- Escolher as palavras fortes da fala pra virar texto na tela.
- Montar telas de apoio animadas (número, lista, print de site) no instante em que você fala delas.
- Exportar em 9:16 pra reels e em 16:9 pro YouTube a partir do mesmo material.
- Repetir o mesmo padrão de edição em todo vídeo, porque as regras ficam escritas num arquivo do projeto.

## O que ele ainda não faz bem

- **Posição exata pela descrição.** "Põe o texto um pouco à esquerda do rosto" costuma precisar de duas ou três rodadas. Dar a referência em pixels ou mostrar um print resolve mais rápido.
- **Ler o tom sozinho.** Se um trecho é ironia ou virada de raciocínio, diga. Ele edita melhor quando sabe a intenção.
- **Tempo da transcrição.** O Whisper acerta o que foi dito, mas pode marcar a palavra um pouco atrasada. Corte que come sílaba quase sempre vem daí, então vale conferir cada ponto de corte.
- **Gerar gente e lugar real.** O Claude não gera vídeo filmado. Ele edita o que você gravou e cria motion (texto, forma, tela, gráfico).

## O que você precisa pra editar com o Claude

- **Computador.** O Claude Code roda no terminal, em extensões de editor de código e num app de desktop.
- **Acesso ao Claude Code.** Segundo a documentação oficial, a maioria das formas de usar pede uma assinatura do Claude ou uma conta no Console da Anthropic. O app de desktop pede assinatura paga.
- **ffmpeg instalado.** É o programa que faz o trabalho pesado de cortar e juntar. É gratuito, e dá pra pedir ajuda ao próprio Claude Code pra instalar.
- **Uma ferramenta de transcrição.** O Whisper roda no computador e não precisa de chave.

Não precisa saber programar. Você descreve em português o que quer, o Claude escreve o código, pede sua aprovação pra rodar os comandos e mostra o resultado. O passo a passo da instalação ao primeiro vídeo está em [como usar o Claude Code para editar vídeos](/artigos/como-usar-o-claude-code-para-editar-videos).

## Claude ou um editor de vídeo com IA embutida?

São coisas diferentes. Editor com IA embutida (aqueles com legenda automática e corte de silêncio num botão) é rápido pra tarefa pronta, mas você fica preso ao que o botão faz. Com o Claude Code, você descreve o padrão de edição que quer e ele constrói. Dá mais trabalho na primeira vez e muito menos na décima, porque o fluxo fica salvo e roda igual em todo vídeo novo.

Se a sua edição é sempre a mesma coisa (cortar silêncio, pôr legenda), um editor comum resolve. Se você quer um estilo próprio, com motion e tela de apoio, repetido todo dia, o Claude Code é o caminho. Pra uma visão geral dos dois caminhos, veja [como editar vídeo com IA](/artigos/como-editar-video-com-ia).

## Perguntas comuns

### Posso mandar meu vídeo no chat do Claude?

Não. O chat do claude.ai aceita documentos e imagens, não arquivo de vídeo. Pra trabalhar com vídeo, use o Claude Code no computador.

### O Claude Code edita vídeo de graça?

O ffmpeg e o Whisper são gratuitos, mas o Claude Code em si pede assinatura do Claude ou conta paga no Console da Anthropic, conforme a documentação oficial.

### O Claude consegue criar vídeo do zero?

Consegue criar vídeo de motion por código: texto animado, telas, gráficos, anúncio animado. Vídeo com gente e cenário real ele não gera, só edita o que você filmou.

### Preciso saber programar pra usar o Claude Code?

Não. Você pede em português e aprova os comandos que ele quer rodar. Entender o que ele está fazendo ajuda, e isso você aprende no caminho.
