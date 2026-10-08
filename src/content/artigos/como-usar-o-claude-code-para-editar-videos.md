---
titulo: "Como usar o Claude Code para editar vídeos"
descricao: "Passo a passo pra editar vídeo com o Claude Code: instalar, transcrever a fala, cortar, legendar e renderizar com ffmpeg, com os pedidos certos em português."
busca: "claude code para editar videos"
publicado: 2026-10-06
---

Pra usar o Claude Code pra editar vídeo, você abre o Claude Code numa pasta com o seu vídeo bruto e pede, em português, uma etapa por vez: transcrever a fala, listar os cortes, gerar a legenda e montar o arquivo final. Ele escreve e roda os comandos (ffmpeg pra cortar e juntar, Whisper pra transcrever, um editor por código como o Remotion pra animação), te pede aprovação antes de executar e entrega o MP4 na pasta. Você assiste e pede os ajustes.

O [Claude Code](https://code.claude.com/docs/en/overview) é a versão do Claude que trabalha no seu computador: lê arquivos, cria arquivos e roda comandos. É isso que permite editar vídeo, coisa que o chat do site não faz. Se você ainda está decidindo se vale, comece por [Claude consegue editar vídeos?](/artigos/claude-consegue-editar-videos).

## O que você precisa antes de começar

- **Um computador.** Windows, Mac ou Linux.
- **O Claude Code instalado.** Ele roda no terminal, em extensões de editor de código e num app de desktop. A [documentação oficial](https://code.claude.com/docs/en/overview) tem o comando de instalação de cada sistema. Segundo ela, a maioria das formas de usar pede uma assinatura do Claude ou uma conta no Console da Anthropic.
- **O [ffmpeg](https://ffmpeg.org/).** Programa gratuito que corta, junta, converte e queima legenda em vídeo. É o músculo da edição.
- **Uma ferramenta de transcrição.** O [Whisper](https://github.com/openai/whisper), da OpenAI, é aberto e roda no seu computador.
- **O vídeo bruto.** Gravado em boa luz e áudio limpo. IA nenhuma conserta áudio ruim do jeito que você gostaria.

Não precisa saber programar. Precisa saber descrever o que quer e conferir o que saiu.

## Passo a passo

### 1. Monte a pasta do projeto

Crie uma pasta pro vídeo e coloque o arquivo bruto dentro, com um nome simples, tipo `bruto.mp4`. Abra o Claude Code nessa pasta. Tudo o que ele gerar (transcrição, cortes, legenda, vídeo final) fica ali, organizado.

### 2. Escreva as regras da sua edição

O Claude Code lê um arquivo chamado `CLAUDE.md` no começo de cada sessão. Use esse arquivo pra guardar o seu padrão de edição, assim você não repete tudo a cada vídeo. Exemplo do que vale escrever lá:

> Vídeos verticais 9:16, 1080x1920. Legenda com no máximo 2 linhas, cada bloco fica pelo menos 0,6 segundo na tela. Os primeiros 3 segundos só com o rosto e a legenda, sem elemento. Texto na tela usa as minhas palavras, nunca resumo. Nunca cortar no meio de palavra.

Pode pedir pro próprio Claude Code criar esse arquivo a partir do que você descrever.

### 3. Transcreva a fala

Peça:

> Transcreve o bruto.mp4 com o Whisper, em português, com o tempo de cada palavra. Salva a transcrição num arquivo JSON e me mostra o texto corrido.

Leia o texto. Se tiver nome próprio ou termo técnico escrito errado, corrija agora, porque a legenda vai sair daqui.

### 4. Peça a decupagem antes de cortar

Não peça "corta o vídeo" direto. Peça a lista primeiro:

> Lista o que deve sair do vídeo: pausas acima de 0,4 segundo, frases repetidas e o take que eu refiz. Pra cada item, mostra o tempo de início e fim e o texto. Não corta nada ainda.

Revise a lista. Tirou alguma coisa que devia ficar? Diga. Só depois mande cortar:

> Pode aplicar os cortes com o ffmpeg e gerar o corte1.mp4. Deixa um respiro curto nas pontas de cada corte pra não comer sílaba.

### 5. Gere a legenda

> Gera a legenda no tempo do corte1.mp4, seguindo as regras do CLAUDE.md, e queima no vídeo. Salva também o arquivo SRT separado.

Se a legenda parecer atrasada, peça pra ele realinhar as palavras no áudio do vídeo já cortado. O tempo do Whisper pode vir um pouco atrasado, e cortar o vídeo muda todos os tempos.

### 6. Texto na tela e motion

Aqui entra o que dá cara de vídeo editado. Diga o que aparece e quando, amarrado à fala:

> Quando eu falo "três passos", mostra os três passos entrando um por vez, no lado livre ao lado do rosto, sem cobrir o rosto. Quando eu falo o preço, o número aparece grande do jeito que eu falei.

Pra esse tipo de tela animada, o Claude Code costuma montar a composição num editor por código, como o [Remotion](https://www.remotion.dev/), e renderizar.

### 7. Renderize e revise

> Renderiza a versão final em 1080x1920 e salva como final-v1.mp4.

Assista inteiro. Anote o tempo de cada problema e peça o ajuste de um jeito concreto:

> No 0:21 a legenda some antes de eu terminar a frase. No 0:33 o corte comeu o começo do "mas". O resto está bom, não mexe.

Peça a nova versão como `final-v2.mp4`, sem apagar a anterior. Assim você sempre tem pra onde voltar.

## Boas práticas que poupam rodadas

- **Uma etapa por pedido.** Transcrever, decupar, legendar e animar em pedidos separados. Pedido gigante vira vídeo bagunçado.
- **Diga o que gostou.** Ao pedir ajuste, diga o que manter. Senão ele mexe no que estava certo.
- **Tempo exato, não adjetivo.** "Entra em 0,3 segundo" funciona melhor que "entra rápido".
- **Mostre, não descreva.** Um print do quadro com a marcação de onde vai o elemento resolve em uma rodada o que a descrição leva três.
- **Leia o comando antes de aprovar.** O Claude Code pede permissão antes de rodar. Não desligue isso só pra ir mais rápido, principalmente se ele for apagar ou sobrescrever arquivo.
- **Salve o que funcionou.** Quando um pedido sair bom, guarde no `CLAUDE.md` ou numa skill. O Claude Code aceita skills, que são fluxos que você empacota e chama pelo nome.

## Quanto tempo leva

A primeira vez leva mais, porque você instala as ferramentas e escreve as regras. Depois o fluxo fica salvo na pasta e no `CLAUDE.md`, e cada vídeo novo é gravar, colocar na pasta e pedir. O tempo de render depende do seu computador e do tamanho do vídeo.

No VKOSHUB, o módulo de reels dinâmicos mostra esse fluxo do bruto ao vídeo pronto, com os prompts e as skills que fazem cada etapa prontos pra copiar.

## Perguntas comuns

### O Claude Code funciona no Windows?

Funciona. A documentação oficial tem instalação pra Windows, Mac e Linux, e também um app de desktop pra quem não quer usar o terminal.

### Preciso pagar o Claude pra usar o Claude Code?

Segundo a documentação oficial, a maioria das formas de usar pede uma assinatura do Claude ou uma conta no Console da Anthropic. O ffmpeg e o Whisper são gratuitos.

### O Claude Code substitui o CapCut ou o Premiere?

Pra quem edita sempre no mesmo padrão, sim, porque ele monta o vídeo inteiro por código. Se você gosta de ajustar no olho, dá pra usar os dois: o Claude Code faz o grosso e você finaliza no editor que já conhece.

### Dá pra editar vídeo longo pro YouTube com o Claude Code?

Dá. O fluxo é o mesmo, com a decupagem pesando mais. Peça a lista de cortes por blocos de alguns minutos, pra conseguir revisar com calma.
