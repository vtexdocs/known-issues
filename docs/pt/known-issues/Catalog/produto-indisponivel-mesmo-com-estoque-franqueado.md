---
title: 'Produto indisponível mesmo com estoque franqueado'
slug: produto-indisponivel-mesmo-com-estoque-franqueado
status: PUBLISHED
createdAt: 2025-09-10T13:35:26.618Z
updatedAt: 2025-09-10T13:35:26.618Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-unavailable-even-with-franchised-stock
locale: pt
kiStatus: No Fix
internalReference: 404499
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Se o produto estiver fora de estoque no marketplace, em qualquer outro vendedor regular, e o sinalizador **show out of stock** estiver desmarcado, o produto será exibido como fora de estoque na vitrine ou na API de pesquisa, mesmo que tenha estoque em contas de franquia. É possível adicionar o produto ao carrinho.


    Mostrar fora de estoque? - Falso -> 404- Verdadeiro -> regionalização -> verificar estoques de contas de franquia

#
## Simulação



- Coloque o estoque na conta da franquia.
- Defina o sinalizador `Show out of stock` como `no`.
-

Veja que o produto está indisponível na frente.
## Workaround


Defina "Mostrar falta de estoque" como "sim" na conta do marketplace.


