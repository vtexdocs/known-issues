---
title: 'A API de preços permite valores negativos'
slug: a-api-de-precos-permite-valores-negativos
status: PUBLISHED
createdAt: 2023-03-20T20:09:40.000Z
updatedAt: 2023-03-20T20:09:40.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: pricing-api-allows-negative-values
locale: pt
kiStatus: Backlog
internalReference: 774548
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, a API de Preços PUT permite a inserção de valores negativos por meio da carga útil da API PUT; se você definir a margem de lucro e o preço base como valores negativos, o produto será marcado como indisponível.

## Simulação

Na API https://api.vtex.com/account/pricing/prices/1

Defina o seguinte preço:

`{`
`  "itemId": "1",`
`  "listPrice": null,`
`  "costPrice": 11,9,`
`  "markup": -100,`
`  "basePrice": null,`
`  "fixedPrices": [ ]`
`}`

A resposta será:

 ![](https://vtexhelp.zendesk.com/attachments/token/P3rVVQbx6nfqtX2W1UMAbb0V8/?name=image.png)

O que quebra a lógica de preços e torna o produto indisponível, já que os aplicativos de checkout e catálogo não são capazes de lidar com valores de preço negativos.

## Workaround

n/a