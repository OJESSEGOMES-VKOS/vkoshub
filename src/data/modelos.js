// Os modelos de edição do Hub, num lugar só. O id é o nome técnico (a pasta em
// projetos/estudio-2d/modelos/); o nome é o que aparece pra quem vê o site.
// Quem tem vídeo de vitrine (public/vitrine/<id>.mp4) aparece com ele.
// Usado pela vitrine, pelo fluxo da home e pelo guia de estilos.
// exemplos: vídeos extras em public/exemplos/<arquivo>.mp4 (scripts/exemplos.sh).
// Só vídeo nosso ou de marca fictícia; o Mestre fica sem exemplo de propósito.
export const modelos = [
  // Com a pessoa gravada
  {
    id: 'profissional01', nome: 'Autoridade', tipo: 'edição profissional', rosto: true,
    texto: 'Título no peito, telas com desenho animado e lista em tela dividida.',
    quando: 'Profissional explicando o serviço, um método ou um passo a passo.',
  },
  {
    id: 'superpodcast01', nome: 'Dossiê', tipo: 'minidocumentário', rosto: true,
    texto: 'Palco escuro, colagens em papel, cenas de apoio e palavra-chave em serifa vermelha gigante.',
    quando: 'História, bastidor ou caso real contado com peso de documentário.',
  },
  {
    id: 'youtubeedition01', nome: 'Creator', tipo: 'YouTube no vertical', rosto: true,
    texto: 'Texto grande sobre o rosto, a coisa real na tela com o rosto no canto e destaque amarelo.',
    quando: 'Quem quer a linguagem dos canais grandes do YouTube num vídeo curto.',
    exemplos: [
      { arquivo: 'youtubeedition01--youtubeedition01-apresentacao', rotulo: 'Apresentação na horizontal', deitado: true },
    ],
  },
  {
    id: 'storypodcast01', nome: 'Confissão', tipo: 'podcast de reflexão', rosto: true,
    texto: 'Estúdio escuro, texto pequeno e palavra gigante colorida pelo sentido, preto e branco no ápice.',
    quando: 'Opinião, reflexão e fala mais íntima, de podcast.',
  },
  {
    id: 'modelodinamico03', nome: 'Cinema', tipo: 'podcast cinematográfico', rosto: true,
    texto: 'Palavra-chave gigante em vermelho condensado, imagem quente e escura.',
    quando: 'Corte de podcast ou entrevista que precisa parar quem está rolando.',
  },
  {
    id: 'pregacaodinamica01', nome: 'Púlpito', tipo: 'pregação e palestra', rosto: true,
    texto: 'A frase se monta em bloco, serifa itálica vermelha e letreiro gigante atrás de quem fala.',
    quando: 'Pregação, palestra e aula gravada em palco.',
  },
  {
    id: 'modelodinamico01', nome: 'Ritmo', tipo: 'Reel com interface', rosto: true,
    texto: 'O rosto no palco e a tela encenando a frase com interface de verdade; a legenda fica sempre no mesmo lugar.',
    quando: 'Reel de tecnologia, ferramenta ou app, mostrando a coisa funcionando.',
    exemplos: [
      { arquivo: 'modelodinamico01--reel-editado-pelo-claude', rotulo: 'Reel editado pelo Claude' },
    ],
  },
  {
    id: 'modelopadrao01', nome: 'Base', tipo: 'Reel dinâmico', rosto: true,
    texto: 'Cortes no ritmo, legenda, zoom e texto na tela.',
    quando: 'O dia a dia: o Reel falado que precisa sair rápido e bem cortado.',
  },

  // Sem gravação de pessoa
  {
    id: 'sofistmotion01', nome: 'Ouro', tipo: 'motion sofisticado', rosto: false,
    texto: 'Preto e ouro com brilho, letras que se montam, objetos que ilustram a fala e câmera sempre andando.',
    quando: 'Marca premium, lançamento ou apresentação que pede elegância.',
  },
  {
    id: 'anunciomotion01', nome: 'Comercial', tipo: 'anúncio em motion', rosto: false,
    texto: 'Telas de produto animadas em ritmo de comercial, verde-menta sobre preto listrado.',
    quando: 'Anúncio de app, SaaS ou serviço digital.',
    exemplos: [
      { arquivo: 'anunciomotion01--fatia-anuncio', rotulo: 'Anúncio de app (marca fictícia)' },
      { arquivo: 'anunciomotion01--marcai-anuncio', rotulo: 'Anúncio de app (marca fictícia)' },
      { arquivo: 'anunciomotion01--rende-anuncio-16x9', rotulo: 'Anúncio horizontal (marca fictícia)', deitado: true },
    ],
  },
  {
    id: 'anunciocanvas01', nome: 'Canvas', tipo: 'anúncio no canvas infinito', rosto: false,
    texto: 'Anúncio em motion com a câmera viajando por um canvas infinito, um objeto principal por vez.',
    quando: 'Anúncio que quer contar uma sequência, de tela em tela.',
    exemplos: [
      { arquivo: 'anunciocanvas01--marcai-anuncio-canvas-v6', rotulo: 'Anúncio de app (marca fictícia)' },
    ],
  },
  {
    id: 'youtubedark01', nome: 'Sombra', tipo: 'YouTube dark', rosto: false,
    texto: 'Uma ilustração escura por frase, personagem sob luz dourada e verde neon só no objeto principal.',
    quando: 'Canal sem rosto de curiosidade, história ou mistério.',
    exemplos: [
      { arquivo: 'youtubedark01--hoje-youtubedark', rotulo: 'Hoje: sobre procrastinação' },
    ],
  },
  {
    id: 'ilustrations01', nome: 'Palito', tipo: 'ilustração animada', rosto: false,
    texto: 'Metáfora animada em vetor no fundo preto, bonecos palito, frases curtas e a cor só no veredito.',
    quando: 'Explicar uma ideia com metáfora simples, sem aparecer.',
  },
  {
    id: 'modelodinamico02', nome: 'Letreiro', tipo: 'tipografia e objeto', rosto: false,
    texto: 'Só a voz: palavras em fichas, ícones e feixes de luz, alternando fundo claro e escuro.',
    quando: 'Dica rápida de ferramenta ou novidade, narrada.',
    exemplos: [
      { arquivo: 'modelodinamico02--reel-editado-pelo-claude', rotulo: 'Reel editado pelo Claude' },
    ],
  },
  {
    id: 'estilomestre03', nome: 'Mestre', tipo: 'documentário em motion', rosto: false,
    texto: 'Documentário narrado num canvas infinito, câmera de cinema viajando entre frases e fotos.',
    quando: 'Vídeo longo de narrativa: biografia, caso ou explicação com começo, meio e fim.',
  },
  {
    id: 'estilomestre01', nome: 'Mestre I', tipo: 'documentário em motion', rosto: false, congelado: true,
    texto: 'A primeira versão aprovada do Mestre, guardada como estava.',
    quando: 'Referência: a evolução segue no Mestre.',
  },
  {
    id: 'estilomestre02', nome: 'Mestre II', tipo: 'documentário em motion', rosto: false, congelado: true,
    texto: 'A segunda versão do Mestre, com canvas infinito e fotos de borda, guardada como estava.',
    quando: 'Referência: a evolução segue no Mestre.',
  },
];

export const porId = Object.fromEntries(modelos.map((m) => [m.id, m]));
