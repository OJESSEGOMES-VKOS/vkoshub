import { defineConfig } from 'astro/config';

// O site ainda não está no ar. Quando o domínio entrar, `site` alimenta canonical e sitemap.
export default defineConfig({
  site: 'https://vkoshub.com',

  // Endereço que já existiu não morre: ele aponta pra onde a coisa foi.
  // Esta lista tem duas gerações. Primeiro a rota era /playbooks, depois
  // virou /projetos, e agora é /ojessegomes, o espaço da marca dentro do
  // Hub. As duas antigas apontam DIRETO pro destino de hoje, nunca uma na
  // outra: redirecionamento em cadeia é lento pra pessoa e o buscador
  // desconta a força a cada salto.
  // O /vkos vai listado à parte porque ele tem página escrita à mão, e o
  // padrão [slug] só cobre os projetos que nascem da lista.
  // O destino leva barra no fim de propósito: é a forma que o canonical de
  // cada página usa, e o redirecionamento aponta pro mesmo endereço, não
  // pra uma variação dele.
  redirects: {
    '/playbooks': '/ojessegomes/',
    '/playbooks/vkos': '/ojessegomes/vkos/',
    '/projetos': '/ojessegomes/',
    '/projetos/vkos': '/ojessegomes/vkos/',
    // Sem a barra no fim: aqui o destino é um PADRÃO de rota, não um
    // endereço, e o Astro não casa o padrão com a barra no fim.
    '/playbooks/[slug]': '/ojessegomes/[slug]',
    '/projetos/[slug]': '/ojessegomes/[slug]',
  },
});
