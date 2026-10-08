/**
 * O que o VKOSHUB tem, num lugar só. O texto é a copy aprovada em
 * copy/pagina-de-vendas.md, palavra por palavra: mudou lá, muda aqui.
 * A página lê daqui pra módulo e oferta nunca saírem diferentes.
 */

export const modulos = [
  {
    n: 1,
    trilha: 'Edição com IA',
    estilo: 'Reels dinâmicos',
    titulo: 'Módulo 1: Reels dinâmicos com Claude',
    texto:
      'Você grava, o Claude edita: cortes no ritmo, legenda, zoom e texto na tela.',
    exemplos: [
      { src: '/estilos/reels-01.mp4', poster: '/estilos/reels-01.webp' },
      { src: '/estilos/reels-02.mp4', poster: '/estilos/reels-02.webp' },
    ],
  },
  {
    n: 2,
    trilha: 'Edição com IA',
    estilo: 'Vídeos longos pro YouTube',
    titulo: 'Módulo 2: Vídeos longos pro YouTube com Claude',
    texto:
      'O Claude organiza, corta e monta o vídeo longo com você. Sem passar dias editando.',
    exemplos: [],
  },
  {
    n: 3,
    trilha: 'Criação com IA',
    estilo: 'Anúncios em motion',
    titulo: 'Módulo 3: Anúncios em motion com Claude',
    texto:
      'Anúncio animado feito a partir de instrução em português, sem depender de motion designer.',
    exemplos: [
      { src: '/estilos/motion-rende.mp4', poster: '/estilos/motion-rende.webp', deitado: true },
      { src: '/estilos/motion-marcai.mp4', poster: '/estilos/motion-marcai.webp' },
      { src: '/estilos/motion-fatia.mp4', poster: '/estilos/motion-fatia.webp' },
    ],
  },
  {
    n: 4,
    trilha: 'Criação com IA',
    estilo: 'Motion 3D no Blender',
    breve: true,
    titulo: 'Módulo 4: Vídeos em motion 3D no Blender com Claude',
    texto:
      'O Claude faz a parte técnica do Blender e você dirige a cena, a câmera e a animação.',
    exemplos: [
      { src: '/estilos/3d-promo.mp4', poster: '/estilos/3d-promo.webp' },
      { src: '/estilos/3d-showreel.mp4', poster: '/estilos/3d-showreel.webp' },
      { src: '/estilos/3d-02.mp4', poster: '/estilos/3d-02.webp' },
    ],
  },
  {
    n: 5,
    trilha: 'Criação com IA',
    estilo: 'Anúncios com Google Omni',
    breve: true,
    titulo: 'Módulo 5: Anúncios em vídeo com o Google Omni',
    texto:
      'O Google Omni gera vídeo a partir de texto, imagem e áudio. Aqui você usa ele pra criar o anúncio do seu produto, do roteiro ao vídeo pronto, e ajusta cada versão sem recomeçar do zero.',
    // Fora da amostragem de vídeos por enquanto; segue na lista da oferta.
    exemplos: [],
  },
];

/**
 * O vídeo de demonstração. Ainda não existe, então a seção não aparece.
 * Quando existir: ponha o arquivo em public/demo/ (mp4 em H.264, e um
 * poster .webp abaixo de 300 KB) e preencha os três campos. A seção entra
 * sozinha logo abaixo do topo, que é onde a copy pede.
 *   mp4: '/demo/reel.mp4'
 *   poster: '/demo/reel.webp'
 *   descricao: o que o vídeo mostra, em uma frase (vira o texto alternativo)
 */
export const demo = {
  mp4: '/demo/hero-metodo.mp4',
  poster: '/demo/hero-metodo.webp',
  descricao: 'Reel editado 100% pelo Claude Code, seguindo o método do VKOSHUB.',
};
