---
title: 'O checkout permite adicionar quantidades de SKU acima do estoque disponível quando a simulação do vendedor externo retorna 0 como quantidade'
slug: o-checkout-permite-adicionar-quantidades-de-sku-acima-do-estoque-disponivel-quando-a-simulacao-do-vendedor-externo-retorna-0-como-quantidade
status: PUBLISHED
createdAt: 2025-10-31T18:42:19.077Z
updatedAt: 2025-10-31T18:42:19.077Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-adding-sku-quantities-above-available-stock-when-external-seller-simulation-returns-0-as-quantity
locale: pt
kiStatus: Backlog
internalReference: 1316990
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando um vendedor externo retorna a quantidade 0 no payload da simulação, o sistema de checkout procede como se qualquer quantidade solicitada estivesse disponível. O sintoma visível é que os carrinhos e as simulações aceitam quantidades maiores do que o estoque real da SKU (por exemplo, adicionar 20 ou 30 unidades quando apenas 4 estão disponíveis).

Isso afeta os cenários de marketplace com vendedores externos cujo endpoint de simulação responde com 0 em vez da quantidade solicitada ou da quantidade limitada de estoque.

No entanto, se o saldo de estoque e a quantidade forem enviados como 0, nossa API retornará `withoutStock`.
## Simulação



- Pré-requisitos: Uma conta integrada a um vendedor externo cujo ponto de extremidade de simulação retorna consistentemente 0 para o campo de quantidade, independentemente da quantidade ou do estoque solicitado.
- Chame a API de simulação do Checkout com um item do vendedor externo, solicitando uma quantidade maior do que o estoque real do vendedor. Observe que a simulação aceita a quantidade solicitada em vez de limitar o nível de estoque.
## Workaround


Peça ao vendedor externo para ajustar a resposta da simulação. O vendedor deve devolver a quantidade exata solicitada somente quando ela for igual ou inferior ao estoque atual do produto.



