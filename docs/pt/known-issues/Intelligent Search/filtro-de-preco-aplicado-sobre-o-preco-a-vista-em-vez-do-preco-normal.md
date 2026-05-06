---
title: 'Filtro de preço aplicado sobre o "preço à vista" em vez do preço normal'
slug: filtro-de-preco-aplicado-sobre-o-preco-a-vista-em-vez-do-preco-normal
status: PUBLISHED
createdAt: 2024-02-15T19:39:39.000Z
updatedAt: 2024-02-15T19:39:39.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: price-filter-applied-on-top-of-spot-price-instead-of-regular-price
locale: pt
kiStatus: Backlog
internalReference: 982664
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os filtros de preço são aplicados sobre o valor "spotPrice", que corresponde ao preço para condições especiais de pagamento, em vez do preço normal do item.

Isso pode afetar as expectativas, divergindo da maioria dos locais, que se concentram no preço normal, como geralmente fazem as prateleiras e o carrinho, ou em propriedades como “priceRange” da API.

## Simulação

Considere um produto com preço de US$ 430 com 10% de desconto em um método de pagamento específico, gerando um “preço spot” de US$ 387.

Filtrar por itens com preço entre US$ 300 e US$ 400 retornará esse produto, que normalmente será exibido na prateleira como US$ 430 (seu preço normal), gerando a percepção de divergência.

Da mesma forma, a propriedade "priceRange" da API responderá com os seguintes valores (considerando esse produto como o único resultado para essa consulta de pesquisa), alimentando a sensação de divergência:

    "priceRange": { "sellingPrice": { "highPrice": 430, "lowPrice": 430 }, "listPrice": { "highPrice": 430, "lowPrice": 430 }}

## Workaround

N/A