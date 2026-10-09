# Reserva: Blender / Motion 3D fora da página (2026-10-09)

**Decisão do Jessé:** o Blender e o Motion 3D deixam de ser entregável do VKOSHUB por enquanto.
Possivelmente voltam lá na frente como **bônus**. Se voltarem, voltam **exatamente como estavam**.

## Como voltar do jeito que era

A cópia dos arquivos antes da remoção está em `copia-2026-10-09/`:

| Arquivo | O que tinha de Blender |
|---|---|
| `hub.js` | módulo 4, "Motion 3D no Blender" (`breve: true`, 3 vídeos verticais: 3d-promo, 3d-showreel, 3d-02). O Google Omni era o módulo 5 e voltou a ser 5 se o 4 entrar de novo |
| `index.astro` | (1) card "Produção 3D no Blender" na seção "Também sendo preparado", com a prévia `cena.blend` e o roteiro cena por cena (1 entra, 2 gira, 3 close, 4 logo); (2) o par de perguntas "Preciso saber Blender?"; (3) "animarem em 3D" na descrição do topo e no meta; (4) "o Blender" na resposta "Funciona no celular?"; (5) o 3d-02 no leque de vídeos do topo (trocado por motion-fatia); (6) todo o CSS `.blender`, `.roteiro`, `.montagem`, `.tela` |
| `Ferramentas.astro` | o badge "Blender" (cor `#E87D0D`) na faixa de ferramentas |
| `llms.txt` | "Motion 3D no Blender com Claude (em breve)" e "as animações 3D são feitas no Blender por código" |

Os vídeos continuam em `public/estilos/3d-*.mp4` (+ `.av1.mp4` e `.webp`). Não foram apagados.

## Pontos de atenção na volta

- A seção de exemplos agrupa sozinha: um tipo com **3 vídeos verticais** vira o "trio" (cabeçalho
  centralizado, 3 vídeos lado a lado). É assim que o Motion 3D aparecia.
- A seção "Também sendo preparado" estava com 2 cards (Blender + monetização) numa grade de 2 colunas
  com `max-width: 880px`. Com 1 card ela ficou com `max-width: 440px`. Voltando o Blender, restaurar
  a grade de 2 colunas (está em `copia-2026-10-09/index.astro`, busca por `obra__lista`).
- Texto da aula: "O Claude faz a parte técnica do Blender e você dirige a cena, a câmera e a animação."
- Exigência de máquina: o Blender é o único módulo que pede placa de vídeo boa
  (ver `docs/requisitos-do-computador.md`).
- A rota `/info` (cópia da home antiga, R$97/ano, noindex) **não foi mexida** e ainda tem o Blender.
