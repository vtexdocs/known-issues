---
title: 'Los precios están limitados al valor máximo de «Int32» en la API de modificación de precios'
slug: los-precios-estan-limitados-al-valor-maximo-de-int32-en-la-api-de-modificacion-de-precios
status: PUBLISHED
createdAt: 2022-04-25T17:27:47.000Z
updatedAt: 2023-10-18T17:12:52.000Z
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

La API REST de «Modificar precio» no admite precios superiores a un valor «Int32». Por lo tanto, la aplicación de un «precio manual» estará limitada al número «2.147.483.647» (número con decimales).

## Simulación

Al utilizar la API «Modificar precio» (https://developers.vtex.com/vtex-rest-api/reference/pricechange), el envío de una carga útil como «{"price":2500000000}» (que representa 25 000 000,00 $) devolverá un error 500 con el mensaje «El valor era demasiado grande o demasiado pequeño para un Int32».

## Workaround

Utilice la API «Gestionar artículos del carrito» para actualizar el precio.