---
titulo: "Como colocar legenda automática em vídeo"
descricao: "Como colocar legenda automática em vídeo no CapCut, Canva, Clipchamp, YouTube ou com IA, e como deixar a legenda legível: tamanho, tempo e revisão."
busca: "legenda automatica video"
publicado: 2026-10-06
---

Pra colocar legenda automática em vídeo, você usa uma ferramenta que ouve o áudio, transforma a fala em texto com o tempo de cada palavra e coloca esse texto na tela. CapCut, Canva, Clipchamp e o Premiere no celular fazem isso dentro do editor. O YouTube gera a legenda sozinho depois do upload. E dá pra fazer no computador com o Whisper e o Claude. Em qualquer caminho, a parte automática é só o começo: você ainda precisa revisar o texto e ajustar o tamanho dos blocos, senão a legenda erra e ninguém consegue ler.

## Primeiro, os dois tipos de legenda

Antes de escolher a ferramenta, vale saber qual legenda você quer:

- **Legenda gravada na imagem.** O texto vira parte do vídeo e todo mundo vê, com ou sem som. É a legenda de Reels, TikTok e Shorts. Você escolhe fonte, cor, posição e animação.
- **Legenda que o espectador liga e desliga.** Fica num arquivo separado e aparece no botão de legendas do player. É o padrão do YouTube em vídeo longo, e quem assiste escolhe se quer ver.

Pra vídeo curto nas redes, quase sempre é a primeira. Pra vídeo longo no YouTube, a segunda já resolve, e você pode somar as duas.

## Como colocar legenda automática, ferramenta por ferramenta

### No CapCut

O CapCut tem legenda automática no celular, no computador e na versão online. Você importa o vídeo, procura a opção de legendas automáticas no menu de texto, escolhe o idioma da fala e ele gera os blocos na timeline. Depois dá pra corrigir palavra por palavra e trocar o estilo.

### No Canva

O editor de vídeo do Canva gera legendas a partir da fala, e segundo a [página oficial de legenda automática do Canva](https://www.canva.com/features/auto-caption/) o recurso está no plano grátis. O caminho fica no painel de texto, na parte de texto dinâmico. As legendas saem editáveis antes de exportar.

### No Clipchamp

O editor da Microsoft tem legendas por IA no plano gratuito e exporta em até 1080p sem marca d'água, como informa a [página de planos do Clipchamp](https://clipchamp.com/en/pricing/). Funciona no navegador e no Windows.

### No YouTube

Depois do upload, o YouTube cria legendas automáticas em vários idiomas, português incluído. Pra revisar: entre no YouTube Studio, abra **Legendas** no menu, escolha o vídeo e edite a transcrição automática. O passo a passo oficial está na [ajuda do YouTube sobre legendas automáticas](https://support.google.com/youtube/answer/6373554?hl=pt-BR).

Revisar vale a pena. A transcrição erra nome próprio, marca e termo técnico, e o espectador vê esse erro.

### No Instagram

Dependendo da versão do app e da sua conta, o editor de Reels oferece uma opção de legenda gerada automaticamente. Se a sua não mostra, edite o vídeo com legenda em outro app e poste pronto.

### No computador, com IA

É o caminho que a gente usa aqui, e ele dá controle total. O fluxo:

1. **Transcrever.** O [Whisper](https://github.com/openai/whisper), modelo de transcrição aberto da OpenAI com licença MIT, roda no seu computador e devolve o texto com o tempo de cada palavra. Nada precisa subir pra um site.
2. **Acertar o tempo.** O Whisper acerta o que foi dito, mas costuma marcar quando foi dito com um pequeno atraso. No material que medimos aqui, a mediana foi de 129 milissegundos, com casos perto de 1 segundo. Dá pra corrigir reancorando cada frase no início real da fala no áudio.
3. **Paginar e corrigir.** O Claude lê a transcrição e quebra o texto em blocos curtos. Ele corrige erro pelo contexto (o nome da sua marca, um termo do seu nicho) e escolhe a palavra de destaque de cada frase.
4. **Renderizar.** A legenda é desenhada por código sobre o vídeo e exportada. Mudou alguma coisa? Você pede em português e renderiza de novo.

A vantagem é que a regra fica escrita uma vez e vale pra todo vídeo. Mais sobre esse caminho em [como editar vídeo com IA](/artigos/como-editar-video-com-ia).

## Como deixar a legenda legível

A ferramenta gera a legenda. Quem decide se dá pra ler é você. É aqui que a maior parte das legendas falha:

- **Poucas palavras por bloco.** De 2 a 4 palavras no vídeo curto, no máximo 2 linhas. Bloco grande obriga a pessoa a ler em vez de assistir.
- **Tempo mínimo na tela.** Nenhum bloco deve piscar e sumir. Na régua daqui, uma página de legenda nunca fica menos de 0,6 segundo.
- **Texto fixo segue outra conta.** Título ou frase que fica parada na tela precisa de pelo menos 1 segundo mais 3 palavras por segundo. Uma frase de 9 palavras pede 4 segundos.
- **Não separar o que vai junto.** "R$ / 97" em dois blocos, nome numa página e sobrenome na outra: isso trava a leitura.
- **Altura fixa e fora da faixa de baixo.** No Reels, a parte de baixo fica coberta pelo nome do perfil, pela legenda do post e pelos botões.
- **Uma palavra de destaque por frase.** Cor ou tamanho maior numa palavra ajuda. Em todas, atrapalha.
- **Contraste sem exagero.** Sombra suave separa o texto do fundo. Contorno preto grosso sobre uma tela limpa deixa o vídeo com cara de meme.
- **Legenda não atravessa corte.** Se a cena muda, o bloco termina junto.

## Revisar antes de exportar

Três coisas pra conferir sempre:

1. **Nomes, números e marcas.** É onde a transcrição mais erra.
2. **Sincronia.** Assista um trecho do começo, do meio e do fim. Se o texto aparece depois da fala, tudo parece atrasado.
3. **Leitura sem som.** Assista uma vez no mudo. Se você entende o vídeo, a legenda funciona.

Pra Reels, junte isso com o resto da edição: o artigo [como editar vídeo para Reels](/artigos/como-editar-video-para-reels) cobre corte, texto na tela e exportação.

Se você quer montar esse fluxo de legenda com IA do começo ao fim, ele faz parte do que o [VKOSHUB](/) ensina nos módulos de edição.

## Perguntas comuns

### Qual o melhor app de legenda automática grátis?

CapCut, Canva e Clipchamp geram legenda automática sem pagar. Escolha pelo editor que você já usa, porque a qualidade da legenda depende mais da revisão do que do app.

### A legenda automática erra?

Erra, principalmente em nome próprio, número, gíria e termo técnico. Sempre revise antes de exportar.

### Como colocar legenda em vídeo do YouTube?

Depois do upload, o YouTube gera a legenda automática em português. Você revisa e corrige no YouTube Studio, na seção Legendas.

### Legenda automática funciona em vídeo longo?

Funciona. Num vídeo longo a revisão dá mais trabalho, então vale começar com um áudio limpo, que reduz o erro na transcrição.
