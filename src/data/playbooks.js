/**
 * A lista de projetos do Hub.
 *
 * É aqui que você adiciona projeto, na mão, sem banco de dados. Copie um bloco,
 * troque os campos e salve. A página se reorganiza sozinha: os cards preenchem a
 * linha e pulam pra próxima quando não couber mais.
 *
 * Os campos:
 *   slug      identificador curto, só letras minúsculas e hífen. Vira o
 *             endereço da página do projeto (/ojessegomes/<slug>).
 *   titulo    o que a pessoa vai ler primeiro. Curto e concreto, sem promessa vaga.
 *   resumo    duas ou três linhas dizendo o que o projeto é ou faz.
 *   categoria a etiqueta que aparece no topo do card.
 *   formato   o que ele é: sistema, plataforma, aplicativo, guia, modelo.
 *   tempo     pra projeto em produção, o estágio ('Em planejamento'). Pra
 *             projeto ativo, o que ele é hoje ('Em operação').
 *   novo      true põe o selo "Novo" no card. Deixe de fora quando não for.
 *   capa      OPCIONAL. O caminho da imagem de capa, na proporção 16:9. Salve o
 *             arquivo em public/capas/ e escreva aqui '/capas/nome.webp'. Sem
 *             este campo, o card usa a capa provisória do sistema.
 *   capaAlt   Obrigatório quando existe `capa`. Descreve a imagem pra quem não
 *             enxerga, na voz do negócio. Ex: 'o painel mostrando a semana de
 *             conteúdo já montada'. Se a capa for pura decoração, use ''.
 *   selo      OPCIONAL. Uma frase curta de status, mostrada no card ao lado da
 *             categoria. Ex: 'Atualização contínua', 'Em desenvolvimento'. Só
 *             entre com o que é verdade hoje: selo é promessa, e promessa velha
 *             no ar é pior que selo nenhum.
 *   estado    OPCIONAL. Ausente (padrão) = a página do projeto mostra o bloco
 *             "Em produção" com os links de seguir. 'ativo' = mostra o projeto
 *             como já rodando de verdade, sem esse bloco (é o caso do VKOS).
 *             'desenvolvimento' = aparece na lista com o selo, e NÃO tem
 *             página: o card não é clicável. Use enquanto não há o que contar,
 *             porque card que abre uma página vazia frustra mais do que ajuda.
 *
 * Sobre a capa: use 1280 por 720 pixels, formato WebP, abaixo de 300 KB. Imagem
 * pesada é o motivo número um de página lenta no celular.
 */

export const playbooks = [
  {
    slug: 'vkos',
    titulo: 'VKOS',
    resumo:
      'O sistema que constrói e opera o VKOSHUB. Cada solução, cada página e cada peça daqui nasce dentro dele.',
    categoria: 'Sistema',
    formato: 'Sistema de construção',
    tempo: 'Em operação',
    estado: 'ativo',
    selo: 'Atualização contínua',
    // Em vez de foto, a arte do cérebro de IA, a mesma que abre a página dele.
    arte: 'cerebro',
  },
  {
    slug: 'vkos-app',
    titulo: 'VKOS-APP',
    resumo:
      'O VKOS com interface própria. As mesmas funções que hoje rodam por comando ganham tela, com mais eficiência e mais interação no dia a dia.',
    categoria: 'Sistema',
    formato: 'Aplicativo',
    tempo: 'Em desenvolvimento',
    estado: 'desenvolvimento',
    selo: 'Em desenvolvimento',
  },
];
