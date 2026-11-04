// Os dados do biblioteca de estilos (/biblioteca-estilos): o catálogo do EditOS com os nomes
// novos (03/11/2026) e os estilos de cena. Só o guia usa este arquivo; a home
// continua no data/modelos.js. Fonte: projetos/editos/sistema/modelos/<id>/<id>.md
// (seção 1) e sistema/cenas/INDICE.md. Vídeos em public/guia/ (scripts/guia.sh).
// familia: rosto (com você falando), narracao (sem rosto), anuncio.
// prova: true = ainda em prova (sem vídeo de referência aprovado).
export const modelos = [
  // Com você falando
  {
    id: 'rosto-telas', nome: 'Rosto e telas', familia: 'rosto',
    texto: 'Você em rosto cheio e telas claras que entram pra mostrar o que está sendo dito: o editor, o celular com o Reel, a caixa do Claude digitando.',
    quando: 'O Reel falado do dia a dia, sobre ferramenta ou método.',
  },
  {
    id: 'youtube-didatico', nome: 'YouTube didático', familia: 'rosto',
    texto: 'A câmera vira janela e vai pro canto quando a coisa real entra na tela. Texto grande sobre você e um amarelo só de destaque.',
    quando: 'Quem quer a linguagem dos canais grandes do YouTube num vídeo curto.',
  },
  {
    id: 'autoridade', nome: 'Autoridade', familia: 'rosto',
    texto: 'Câmera calma, legenda limpa no peito, títulos nas frases-chave e tela dividida com ilustração em cima. A cor de destaque vem do cenário.',
    quando: 'Profissional explicando o serviço, um método ou um passo a passo.',
  },
  {
    id: 'interface-encenada', nome: 'Interface encenada', familia: 'rosto',
    texto: 'Cada frase vira um card com interface de verdade: prompt digitando, pasta entrando, cursor clicando. Fundo creme com grade fina.',
    quando: 'Reel de tecnologia, app ou ferramenta, mostrando a coisa funcionando.',
  },
  {
    id: 'trailer', nome: 'Trailer', familia: 'rosto',
    texto: 'Cor quente e escura, grão de filme, palavras fortes em destaque sobre você e transições de flash e chicote.',
    quando: 'Corte de podcast ou fala que precisa parar quem está rolando.',
  },
  {
    id: 'prova-print', nome: 'Prova no print', familia: 'rosto',
    texto: 'A tela prova o que você diz: o print aparece com a frase grifada e o número falado sobe num contador. O rosto fechado só na emoção e no fecho.',
    quando: 'Resultado, notícia ou afirmação que precisa de prova na hora.',
  },
  {
    id: 'especialista', nome: 'Especialista', familia: 'rosto', prova: true,
    texto: 'Fala calma com legenda serifada no peito. Só nas frases marcadas a tela muda: palavra gigante pro peso, letra cursiva pro conceito.',
    quando: 'Especialista ensinando com calma e autoridade.',
  },
  {
    id: 'pregacao', nome: 'Pregação', familia: 'rosto',
    texto: 'A voz e o rosto mandam. Legenda corrida no peito e, a cada 5 a 10 s, a frase mais forte em bloco ou num letreiro gigante atrás de quem fala.',
    quando: 'Pregação, palestra e aula gravada em palco.',
  },
  {
    id: 'pagina-de-livro', nome: 'Página de livro', familia: 'rosto',
    texto: 'Estúdio escuro e frio, uma palavra gigante por frase colorida pelo sentido e o momento de dor em preto e branco.',
    quando: 'Opinião, reflexão e fala mais íntima, de podcast.',
  },
  {
    id: 'minidocumentario', nome: 'Minidocumentário', familia: 'rosto',
    texto: 'Palco escuro, rosto, colagem de papel e cenas de apoio trocando por corte seco, com a palavra-chave em serifa vermelha gigante.',
    quando: 'História, bastidor ou caso real contado com peso de documentário.',
  },
  {
    id: 'imagem-por-palavra', nome: 'Imagem por palavra', familia: 'rosto', prova: true,
    texto: 'Cada palavra concreta ganha a sua imagem no instante em que é dita, enquanto uma legenda pequena e fixa monta a frase por cima.',
    quando: 'Vídeo rápido que precisa prender a atenção do começo ao fim.',
  },
  {
    id: 'corte-palestra', nome: 'Corte de palestra', familia: 'rosto', prova: true,
    texto: 'Um pensamento inteiro recortado da gravação longa, sem mexer na imagem. Legenda pequena num lugar só e a palavra-resposta acendendo em serifa itálica.',
    quando: 'Tirar cortes de palestra, aula ou entrevista longa.',
  },

  // Sem rosto (só a narração)
  {
    id: 'texto-e-objeto', nome: 'Texto e objeto', familia: 'narracao',
    texto: 'A frase é escrita na tela palavra por palavra, em tamanhos misturados, e um objeto no centro faz o que ela diz. Fundo preto e laranja.',
    quando: 'Dica rápida de ferramenta ou novidade, narrada.',
  },
  {
    id: 'motion-ouro', nome: 'Motion ouro', familia: 'narracao',
    texto: 'Preto e ouro com brilho, letras que se montam no tempo da fala, objetos que ilustram cada frase e câmera sempre andando.',
    quando: 'Marca premium, lançamento ou apresentação que pede elegância.',
  },
  {
    id: 'vetor-minimo', nome: 'Vetor mínimo', familia: 'narracao',
    texto: 'Uma cena só, no preto, com bonecos palito repetindo a mesma ação até a diferença aparecer. A cor só entra na virada.',
    quando: 'Explicar uma ideia com metáfora simples, sem aparecer.',
  },
  {
    id: 'personagem', nome: 'Personagem', familia: 'narracao',
    texto: 'Um personagem simples vive o que o roteiro diz, uma ilustração por frase, sob luz dourada, com verde neon só no objeto-chave.',
    quando: 'Canal sem rosto de curiosidade, história ou mistério.',
  },
  {
    id: 'documental-dados', nome: 'Documental de dados', familia: 'narracao', prova: true,
    texto: 'Uma prova real (gráfico, documento, mapa) fica na tela o vídeo quase todo: cada número dito sobe contando e cada nome acende o seu ponto.',
    quando: 'Explicar um fato com dado e fonte, sem aparecer.',
  },

  // Anúncio
  {
    id: 'anuncio-canvas', nome: 'Anúncio canvas', familia: 'anuncio',
    texto: 'Narração de venda com as peças soltas num canvas infinito e a câmera passeando entre elas, sem corte. O fundo muda de cor com a frase.',
    quando: 'Anúncio que quer contar uma sequência, de tela em tela.',
  },
  {
    id: 'anuncio-neon', nome: 'Anúncio neon', familia: 'anuncio',
    texto: 'Objetos de vidro e neon fazem o que a narração diz, sobre fundo escuro com respiros claros. A cor é de cada anúncio.',
    quando: 'Anúncio de app, SaaS ou serviço digital.',
  },
];

export const porId = Object.fromEntries(modelos.map((m) => [m.id, m]));

// Os estilos de cena (Animation Styles). tipo: 2D ou 3D edição (profundidade
// feita no Remotion, sem Blender). ajuste: true = demo ainda longe da referência.
export const cenas = [
  ['01', 'Orbe de luz', '2D', 'Frase curta e calma de efeito, pausa reflexiva'],
  ['02', 'Vidro fosco', '2D', 'Ideia apresentada como uma busca ou um passo num app'],
  ['03', 'Plano-sequência Apple', '2D', 'Revelar um produto num movimento só, sem corte'],
  ['04', 'TV de tubo', '2D', 'Anúncio, estreia, volta ao passado, cara de transmissão'],
  ['05', 'Osciloscópio', '2D', 'O "caiu a ficha", tecnologia, sinal, dado'],
  ['06', 'Página de revista com nota', '2D', 'Citação, leitura, opinião ponderada'],
  ['07', 'Editorial azul', '2D', 'Frase-manifesto curta e forte, virada de capítulo'],
  ['08', 'Risografia', '2D', 'Momento leve e artesanal, convite, evento'],
  ['09', 'Grade suíça', '2D', 'Princípio, regra, frase de posicionamento'],
  ['10', 'Lápis à planta técnica', '2D', 'Da ideia ao produto, processo, projeto'],
  ['11', 'Rota no mapa 3D', '3D edição', 'Onde fica, por onde passou, de A a B'],
  ['12', 'Explodido', '3D edição', 'O que tem dentro, as partes de um produto'],
  ['13', 'Aguada de nanquim', '2D', 'Título ou capítulo calmo, viagem, cultura, história'],
  ['14', 'Mesa de papéis', '2D', 'Montar um caso: o dado, a citação, o achado'],
  ['15', 'Manchete grifada', '2D', 'Afirmação com fonte: a notícia entra e a linha é grifada'],
  ['16', 'Número com gráfico', '2D', 'O número sobe com a linha até a virada'],
  ['17', 'Celular com app', '3D edição', 'Mostrar um app como coisa pronta'],
  ['18', 'Zoom na gravação de tela', '2D', 'Passo de tutorial: clica aqui, depois aqui'],
  ['19', 'Linha do tempo', '2D', 'Anos em segundos até o hoje'],
  ['20', 'Globo com arcos', '3D edição', 'Alcance: de um lugar para muitos'],
  ['21', 'Notebook revela', '3D edição', 'Lançamento de site ou SaaS dentro do notebook'],
  ['22', 'Fluxo isométrico', '3D edição', 'Como um sistema funciona em etapas'],
  ['23', 'Pilha de notificações', '2D', 'Resultado chegando: pedidos e vendas caindo na tela'],
  ['24', 'Antes e depois', '2D', 'Reforma, redesign, a diferença em um segundo'],
  ['25', 'Corrida de barras', '2D', 'Ranking que muda no tempo'],
  ['26', 'Post como recibo', '2D', 'Olha o que ele disse: a postagem é a prova'],
  ['27', 'Contador de dias', '2D', 'Desafio, sequência, construção em público'],
  ['28', 'Versus', '2D', 'Comparação lado a lado, com vencedor'],
  ['29', 'Produto girando', '3D edição', 'Apresentar um produto com as especificações'],
  ['30', 'Pilha de dinheiro', '3D edição', 'Número grande de dinheiro que dá pra ver'],
  ['31', 'Cartão que vira', '3D edição', 'Oferta, plano, preço, o que você recebe'],
  ['32', 'Nota fiscal', '3D edição', 'Quanto custou, item por item, até o total'],
  ['33', 'Iceberg', '3D edição', 'Tem muito mais do que parece'],
  ['34', 'Conversa em 3D', '3D edição', 'História contada em mensagens'],
  ['35', 'Escala lado a lado', '3D edição', 'Comparar tamanho com coisas conhecidas'],
  ['36', 'Troféu do marco', '3D edição', 'Marco atingido: seguidores, clientes, anos'],
  ['37', 'Rosca de partes', '2D', 'Um todo dividido em fatias, com a fatia da história em destaque'],
  ['38', 'Mundo que brilha', '2D', 'Ideia abstrata virando um lugar bonito'],
  ['39', 'Desenho plano', '2D', 'História de personagem, encenada'],
  ['40', 'Holograma', '3D edição', 'Plano ou estratégia: onde as coisas estavam e o caminho'],
  ['41', 'Mapa em relevo', '3D edição', 'Onde a história aconteceu, mapa histórico', true],
  ['42', 'Rabisco de nanquim', '2D', 'A pergunta virando história visível'],
  ['43', 'Tempo profundo', '3D edição', 'Abertura épica, saltos de milhões de anos'],
  ['44', 'Silhueta neon', '2D', 'O "e se...", momento dramático de uma pessoa'],
  ['45', 'Rabisco em primeira pessoa', '2D', 'Sua vida como..., emoção exagerada'],
  ['46', 'Grade azul', '3D edição', 'Como uma máquina funciona por dentro, em corte'],
].map(([n, nome, tipo, resolve, ajuste]) => ({ id: `cena${n}`, n, nome, tipo, resolve, ajuste: !!ajuste }));
