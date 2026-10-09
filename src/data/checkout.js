// O link do checkout da Cakto (plano anual), lido da variável do build.
// Só aceita https, pra um link torto nunca virar destino. Sem link válido,
// os botões caem em /assinar, que avisa que o checkout ainda não abriu.
const bruto = (import.meta.env.PUBLIC_URL_ASSINAR_ANUAL || import.meta.env.PUBLIC_URL_ASSINAR || '').trim();

let valido = null;
try {
  if (bruto && new URL(bruto).protocol === 'https:') valido = bruto;
} catch {
  valido = null;
}

export const checkoutAnual = valido ?? '/assinar';
