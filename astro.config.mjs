import { defineConfig } from 'astro/config';

// PHASE 1: o site é só vitrine e venda. Tudo sai pronto no build, sem
// servidor. Aulas e checkout ficam na Cakto.
export default defineConfig({
  site: 'https://vkoshub.com',
  output: 'static',
  trailingSlash: 'ignore',

  // Nenhum script escrito dentro da página: a política de segurança do site
  // só roda arquivo próprio. Com o limite em zero, cada script vira um
  // arquivo em /_astro/.
  vite: { build: { assetsInlineLimit: 0 } },

  // As rotas que existiram nas versões antigas apontam pra home. Na Netlify
  // quem manda é o public/_redirects (301, com as subrotas); estes aqui
  // cobrem o servidor de desenvolvimento e qualquer outro host.
  redirects: {
    '/entrar': '/',
    '/membros': '/',
    '/solucoes': '/',
    '/identidade': '/',
    '/playbooks': '/',
    '/projetos': '/',
    '/ojessegomes': '/',
  },
});
