/**
 * O mapa do site, gerado no build.
 *
 * Escrito à mão em vez de instalar a integração de sitemap porque ele
 * precisa listar SÓ o que é página de verdade. As rotas antigas de
 * /playbooks continuam existindo pra quem tem o link velho, mas elas são
 * redirecionamento, não conteúdo: mandar o buscador indexar as duas cria
 * página duplicada e divide a força de uma no lugar da outra.
 *
 * Projeto novo entra aqui junto com a página dele.
 */
import { playbooks } from '../data/playbooks.js';

/* A barra no fim não é enfeite: o canonical de cada página termina com
   ela, e endereço com e sem barra conta como duas páginas iguais pro
   buscador. As duas listas têm que falar a mesma língua.

   prioridade diz qual página importa mais DENTRO do site, e só isso. */
const fixas = [
  { rota: '/', prioridade: '1.0' },
  { rota: '/ojessegomes/', prioridade: '0.9' },
  { rota: '/identidade/', prioridade: '0.4' },
];

export function GET({ site }) {
  const doProjeto = playbooks
    // Projeto em desenvolvimento não tem página, então não entra no mapa.
    .filter((p) => p.estado !== 'desenvolvimento')
    .map((p) => ({ rota: `/ojessegomes/${p.slug}/`, prioridade: '0.8' }));

  const linhas = [...fixas, ...doProjeto]
    .map(
      ({ rota, prioridade }) =>
        `  <url><loc>${new URL(rota, site).href}</loc><priority>${prioridade}</priority></url>`
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${linhas}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
