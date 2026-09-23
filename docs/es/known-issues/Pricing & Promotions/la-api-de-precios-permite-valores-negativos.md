---
title: 'La API de precios permite valores negativos.'
slug: la-api-de-precios-permite-valores-negativos
status: PUBLISHED
createdAt: 2023-03-20T23:09:40.000Z
updatedAt: 2026-09-23T17:19:25.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: pricing-api-allows-negative-values
locale: es
kiStatus: Backlog
internalReference: 774548
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, la API PUT Price permite ingresar valores negativos mediante la carga útil de la API PUT. Si se establecen valores negativos para el margen de beneficio y el precio base, el producto se marcará como no disponible.

## Simulación

En la API https://api.vtex.com/account/pricing/prices/1

Establezca el siguiente precio:

`{`
`  "itemId": "1",`
`  "listPrice": null,`
`  "costPrice": 11.9,`
`  "markup": -100,`
`  "basePrice": null,`
`  "fixedPrices": [ ]`
`}`

La respuesta será:

![](https://vtexhelp.zendesk.com/attachments/token/P3rVVQbx6nfqtX2W1UMAbb0V8/?name=image.png)

Esto invalida la lógica de precios y hace que el producto no esté disponible, ya que las aplicaciones de pago y catálogo no admiten precios negativos.

## Workaround

No aplica


Sin embargo, no aplica