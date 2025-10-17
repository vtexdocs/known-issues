---
title: O PLP com "Show More" é renderizado em branco após a navegação de retorno do navegador a partir do Checkout
slug: o-plp-com-show-more-e-renderizado-em-branco-apos-a-navegacao-de-retorno-do-navegador-a-partir-do-checkout
status: PUBLISHED
createdAt: 2025-10-02T19:50:48.636Z
updatedAt: 2025-10-02T19:50:48.636Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: plp-with-show-more-renders-blank-after-browser-back-navigation-from-checkout
locale: pt
kiStatus: Unknown
internalReference: 1301762
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando os usuários carregam a segunda ou outras páginas de um PLP por meio do botão "Show More" (Mostrar mais), navegam até um PDP, prosseguem para o Checkout e, em seguida, pressionam o botão Voltar do navegador duas vezes para retornar ao PLP, o PLP é renderizado completamente em branco. O sintoma visível é um PLP branco/vazio, sem blocos de produtos ou conteúdo. Isso afeta as vitrines do Store Framework que usam o carregamento infinito/paginado do PLP por meio de "Show More", especificamente após um fluxo de PDP → Checkout seguido pela navegação de retorno do navegador. O comportamento foi reproduzido em várias contas durante a validação.
## Simulação


## Workaround

