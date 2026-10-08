import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Os artigos do Hub. Cada um nasce de uma busca real do Google (autocomplete
// do Brasil) e mora em src/content/artigos/<endereco>.md. O nome do arquivo
// vira o endereço: como-editar-video-com-ia.md -> /artigos/como-editar-video-com-ia
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    // A pergunta como a pessoa digita. Vira o <h1> e o título da aba.
    titulo: z.string(),
    // O resumo que aparece embaixo do link no Google (até uns 155 caracteres).
    descricao: z.string().max(170),
    // A busca de onde o artigo saiu, pra conferir depois no Search Console.
    busca: z.string(),
    publicado: z.coerce.date(),
    atualizado: z.coerce.date().optional(),
    // Rascunho não entra no build, no índice nem no mapa do site.
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { artigos };
