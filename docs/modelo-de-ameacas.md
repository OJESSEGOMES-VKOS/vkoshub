# Modelo de ameaças: VKOSHUB PHASE 1

Atualizado em 2026-10-02. Substitui a versão com login, área de membros, Supabase, Resend e
webhook da Hubla, que foram removidos.

## O que o sistema é

Site estático (HTML, CSS e JS próprios) publicado na Netlify. Sem servidor, banco, conta,
formulário, chave de API ou dado pessoal. O único dado externo é o link público do checkout da
Cakto (`PUBLIC_URL_ASSINAR`), lido no build.

## Ativos

- A integridade da página (preço, garantia, link do checkout).
- A reputação da marca (o link não pode levar a lugar errado).

## Ameaças e controles

| Ameaça | Controle |
|---|---|
| Script injetado na página (XSS) | CSP `script-src 'self'`, nenhum script em linha, nenhum `innerHTML`, sem entrada de usuário. |
| Página embutida em outro site (clickjacking) | `frame-ancestors 'none'` e `X-Frame-Options: DENY`. |
| Link de checkout trocado por um falso | O link vive na configuração da Netlify, não no código; `/assinar` só aceita `https://`. Acesso à conta Netlify com 2FA. |
| Formulário falso enviando dado | Não existe formulário; CSP `form-action 'none'`. |
| Dependência maliciosa no build | Uma dependência só (`astro`), versão travada no `package-lock.json`. |
| Abertura de nova aba manipulando a origem | Links externos com `rel="noopener noreferrer"`. |

## Fora do escopo

Pagamento, dados do comprador e acesso às aulas: responsabilidade da Cakto.

## Quando revisar

Se voltar qualquer coisa com servidor, conta, formulário, banco, pagamento próprio ou IA, este
documento volta a ser feito do zero pelo `security/THREAT-MODEL-TEMPLATE.md`.
