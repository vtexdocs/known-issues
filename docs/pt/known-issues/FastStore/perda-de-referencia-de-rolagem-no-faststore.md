---
title: 'Perda de referência de rolagem no faststore'
slug: perda-de-referencia-de-rolagem-no-faststore
status: PUBLISHED
createdAt: 2025-11-03T15:29:47.771Z
updatedAt: 2025-11-03T15:29:47.771Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: loss-of-scroll-reference-in-faststore
locale: pt
kiStatus: No Fix
internalReference: 1317630
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao navegar entre as páginas PLP e PDP, ao retornar à PLP, a rolagem perde sua posição e referência iniciais.
## Simulação


Ao acessar um PLP na primeira página ou pesquisar mais produtos, clique em um produto. Ao carregar o PDP e clicar no botão Voltar, a rolagem da página não retorna ao produto clicado, mas faz referência a outro produto
## Workaround


Atualize para a versão `3.91.3-dev.1` ou superior.

Esse é um WA personalizado para o problema, portanto, pode haver instabilidade ou comportamento inesperado, dependendo do dispositivo ou do navegador.




