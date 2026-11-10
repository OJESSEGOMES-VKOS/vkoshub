/**
 * O mapa do site, gerado no build. Só as páginas públicas de verdade:
 * /assinar é passagem pro checkout e a 404 não é página. Os artigos entram
 * sozinhos assim que deixam de ser rascunho; a lista /artigos só entra
 * quando tem pelo menos um. As Free Skills saem de src/data/skills.js.
 */
import { artigosPublicados } from '../data/artigos.js';
import { skills } from '../data/skills.js';

export async function GET({ site }) {
  const artigos = await artigosPublicados();
  const paginas = [
    { rota: '/', prioridade: '1.0' },
    ...(artigos.length ? [{ rota: '/artigos', prioridade: '0.6' }] : []),
    ...artigos.map((a) => ({
      rota: `/artigos/${a.id}`,
      prioridade: '0.7',
      data: (a.data.atualizado ?? a.data.publicado).toISOString().slice(0, 10),
    })),
    { rota: '/free-skills/', prioridade: '0.8' },
    ...skills.map((s) => ({ rota: `/free-skills/${s.slug}/`, prioridade: '0.8', data: s.conferido })),
    { rota: '/privacidade/', prioridade: '0.2' },
  ];

  const linhas = paginas
    .map(
      ({ rota, prioridade, data }) =>
        `  <url><loc>${new URL(rota, site).href}</loc>${data ? `<lastmod>${data}</lastmod>` : ''}<priority>${prioridade}</priority></url>`
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
