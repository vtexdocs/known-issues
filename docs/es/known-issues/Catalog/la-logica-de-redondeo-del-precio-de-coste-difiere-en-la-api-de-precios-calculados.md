---
title: 'La lógica de redondeo del precio de coste difiere en la API de precios calculados'
slug: la-logica-de-redondeo-del-precio-de-coste-difiere-en-la-api-de-precios-calculados
status: PUBLISHED
createdAt: 2023-06-12T17:14:52.000Z
updatedAt: 2023-06-12T17:14:52.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: cost-price-rounding-logic-diverges-on-computed-prices-api
locale: es
kiStatus: Backlog
internalReference: 842336
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, la API de precios calculados cuenta con una propiedad denominada «cost price» que, en determinados casos, puede presentar una diferencia de 1 céntimo entre su valor en la interfaz de usuario y el de la API de precios calculados https://developers.vtex.com/docs/api-reference/pricing-api#get-/pricing/prices/-itemId-/computed/-priceTableId-

## Simulación

Establece un producto con un precio de coste de 67,82 y sin margen de beneficio.

Comprueba la interfaz de usuario de precios y la respuesta de esta API, que debería mostrar:

 ![](https://vtexhelp.zendesk.com/attachments/token/r33X4C7mwiOwq9GkcB72ngCur/?name=image.png)

Aunque el valor correcto es 67,82

## Workaround

Establecer precios fijos o redondear los precios soluciona el problema.