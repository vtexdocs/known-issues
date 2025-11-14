---
title: 'Precios restringidos al valor máximo "Int32" en la API de cambio de precio'
slug: precios-restringidos-al-valor-maximo-int32-en-la-api-de-cambio-de-precio
status: PUBLISHED
createdAt: 2025-11-14T19:17:31.053Z
updatedAt: 2025-11-14T19:17:31.053Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: prices-restricted-to-int32-max-value-on-change-price-api
locale: es
kiStatus: Backlog
internalReference: 566142
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La API REST de Checkout Cambiar precio no admite precios superiores a un valor "Int32". Por lo tanto, aplicar un "precio manual" estará restringido hasta el número "2.147.483.647" (número en decimales).


#### Simulación


Al utilizar la API "Cambiar precio" (https://developers.vtex.com/vtex-rest-api/reference/pricechange), el envío de una carga útil como "{"precio":2500000000}" (que representa 25.000.000,00 $) devolverá un error 500 con el mensaje "Value was either too large or too small for an Int32.".

## Workaround


Utilice la API "Handle cart items" para actualizar el precio.


