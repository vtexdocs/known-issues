---
title: 'La API de precios permite valores negativos'
slug: la-api-de-precios-permite-valores-negativos
status: PUBLISHED
createdAt: 2023-03-20T20:09:40.000Z
updatedAt: 2023-03-20T20:09:40.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: pricing-api-allows-negative-values
locale: es
kiStatus: Backlog
internalReference: 774548
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, la API de precios PUT permite introducir valores negativos a través de la carga útil de la API PUT; si se establecen el margen de beneficio y el precio base en valores negativos, el producto se marcará como no disponible.

## Simulación

En la API https://api.vtex.com/account/pricing/prices/1

Establece el siguiente precio:

`{`
`  "itemId": "1",`
`  "listPrice": null,`
`  "costPrice": 11.9,`
`  "markup": -100,`
`  "basePrice": null,`
`  "fixedPrices": [ ]`
`}`

La respuesta será:

 ![](https://vtexhelp.zendesk.com/attachments/token/P3rVVQbx6nfqtX2W1UMAbb0V8/?name=image.png)

Esto rompe la lógica de precios y hace que el producto no esté disponible, ya que las aplicaciones de caja y catálogo no pueden gestionar valores de precio negativos.

## Workaround

n/a