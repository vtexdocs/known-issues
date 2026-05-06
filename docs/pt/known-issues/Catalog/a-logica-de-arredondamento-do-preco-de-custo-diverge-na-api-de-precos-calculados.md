---
title: 'A lógica de arredondamento do preço de custo diverge na API de preços calculados'
slug: a-logica-de-arredondamento-do-preco-de-custo-diverge-na-api-de-precos-calculados
status: PUBLISHED
createdAt: 2023-06-12T17:14:52.000Z
updatedAt: 2023-06-12T17:14:52.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: cost-price-rounding-logic-diverges-on-computed-prices-api
locale: pt
kiStatus: Backlog
internalReference: 842336
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, a API de preços calculados possui uma propriedade chamada 'cost price' que, em cenários específicos, pode apresentar uma diferença de 1 centavo entre seu valor na interface do usuário e na API de preços calculados https://developers.vtex.com/docs/api-reference/pricing-api#get-/pricing/prices/-itemId-/computed/-priceTableId-

## Simulação

Defina um produto com um preço de custo de 67,82 e sem margem de lucro.

Verifique a interface de preços e a resposta desta API, que deve apresentar:

 ![](https://vtexhelp.zendesk.com/attachments/token/r33X4C7mwiOwq9GkcB72ngCur/?name=image.png)

Embora o valor correto seja 67,82

## Workaround

Definir preços fixos ou arredondar os preços resolve o problema.