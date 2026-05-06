---
title: '«Se ha producido un error» al añadir la información de seguimiento'
slug: se-ha-producido-un-error-al-anadir-la-informacion-de-seguimiento
status: PUBLISHED
createdAt: 2021-08-06T20:30:17.000Z
updatedAt: 2023-02-08T18:38:41.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: an-error-has-occurred-when-adding-tracking-information
locale: es
kiStatus: Backlog
internalReference: 409225
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al introducir la información de seguimiento cuando el número de factura contiene espacios, se produce el siguiente error (tanto a través de la interfaz de usuario como de la API): «`Se ha producido un error`».

## Simulación

Para simular o analizar este caso, basta con:

1. Introducir una factura (a través de la API) en un pedido con espacios en el número de factura (asegúrese de que la factura no contenga ninguna información de seguimiento);
2. Añadir la información de seguimiento a través de la interfaz de usuario o la API:
3. Observe que recibe un código de error 500 junto con el mensaje «Se ha producido un error».

## Workaround

Para los pedidos que ya se han facturado con el espacio y cuyo seguimiento se comunica posteriormente, lamentablemente no hay forma de introducir los datos de seguimiento. Sin embargo, para evitar este tipo de problema, lo ideal es no incluir el espacio en la factura o comunicar los datos de seguimiento al insertar la factura.