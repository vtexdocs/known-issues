---
title: 'A API de preços permite valores negativos.'
slug: a-api-de-precos-permite-valores-negativos
status: PUBLISHED
createdAt: 2023-03-20T23:09:40.000Z
updatedAt: 2026-09-23T17:19:25.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: pricing-api-allows-negative-values
locale: pt
kiStatus: Backlog
internalReference: 774548
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, a API PUT Price permite a entrada de valores negativos por meio do Payload da API PUT. Se você definir a margem de lucro e o preço base com valores negativos, o produto ficará indisponível.

## Simulação

Na API https://api.vtex.com/account/pricing/prices/1

Defina o seguinte preço:

`{`
`  "itemId": "1",`
`  "listPrice": null,`
`  "costPrice": 11.9,`
`  "markup": -100,`
`  "basePrice": null,`
`  "fixedPrices": [ ]`
`}`

A resposta será:

![](https://vtexhelp.zendesk.com/attachments/token/P3rVVQbx6nfqtX2W1UMAbb0V8/?name=image.png)

Isso quebra a lógica de precificação e torna o produto indisponível, já que os aplicativos de checkout e catálogo não conseguem lidar com preços negativos. Valores.

## Workaround

n/a