import { getCollection } from 'astro:content';

/** Os artigos publicados, do mais novo pro mais antigo. Rascunho fica de fora. */
export async function artigosPublicados() {
  const todos = await getCollection('artigos', ({ data }) => !data.rascunho);
  return todos.sort((a, b) => b.data.publicado.valueOf() - a.data.publicado.valueOf());
}

export const formatarData = (d) =>
  d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
