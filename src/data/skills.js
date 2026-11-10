// As Free Skills: projetos gratuitos e abertos, de terceiros, que a gente testou
// e indica. Cada uma tem página própria em src/pages/free-skills/<slug>.astro.
// A lista /free-skills e o mapa do site saem daqui. Todo dado vem da página
// oficial do projeto (campo "conferido"): nunca escreva de memória.
export const skills = [
  {
    slug: 'earshot',
    nome: 'earshot',
    categoria: 'Som',
    frase: 'Ouvidos pro seu Claude: ele escuta o vídeo, escolhe o efeito sonoro e confere se caiu no corte.',
    selos: ['Gratuito', 'Código aberto', 'Sem placa de vídeo'],
    autor: 'Leon Lin',
    autorUrl: 'https://github.com/Leonxlnx',
    // Foto de perfil pública do autor no GitHub, copiada pra cá (a política de segurança só aceita imagem do próprio site).
    autorFoto: '/free-skills/autores/leonxlnx.webp',
    repo: 'https://github.com/Leonxlnx/earshot',
    licenca: 'MIT',
    conferido: '2026-11-10',
  },
];

export const porSlug = Object.fromEntries(skills.map((s) => [s.slug, s]));
