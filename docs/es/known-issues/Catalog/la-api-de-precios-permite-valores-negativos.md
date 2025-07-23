---
title: 'La API de precios permite valores negativos'
id: 64gkWnDs5pvv8Ny1TJtTI0
status: PUBLISHED
createdAt: 2023-03-20T20:09:54.998Z
updatedAt: 2023-03-20T20:09:55.649Z
publishedAt: 2023-03-20T20:09:55.649Z
firstPublishedAt: 2023-03-20T20:09:55.649Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: pricing-api-allows-negative-values
locale: es
kiStatus: Backlog
internalReference: 774548
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, la API de precio PUT permite la entrada de valores negativos a través de la carga útil de la API PUT, si establece el margen y el precio base en valores negativos, establecerá el producto como no disponible.




##

## Simulación


En la API https://api.vtex.com/account/pricing/prices/1

Fije el siguiente precio:

`{`
` "itemId": "1",`
` "listPrice": null,`
` "costPrice": 11.9,`
` "markup": -100,`
"precio base": null,`
` "fixedPrices": [ ]`
`}`

La respuesta será:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-api-de-precios-permite-valores-negativos_1.png)

Lo que rompe la lógica de precios y hace que el producto no esté disponible, ya que las aplicaciones de pago y catálogo no son capaces de tratar con valores de precio negativos.




## Workaround


n/a





