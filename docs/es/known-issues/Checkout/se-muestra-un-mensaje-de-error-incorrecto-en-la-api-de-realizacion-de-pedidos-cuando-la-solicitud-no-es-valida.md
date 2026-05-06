---
title: 'Se muestra un mensaje de error incorrecto en la API de realización de pedidos cuando la solicitud no es válida'
slug: se-muestra-un-mensaje-de-error-incorrecto-en-la-api-de-realizacion-de-pedidos-cuando-la-solicitud-no-es-valida
status: PUBLISHED
createdAt: 2022-12-01T22:22:32.000Z
updatedAt: 2022-12-01T22:22:40.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: wrong-error-message-for-place-order-api-when-the-payload-request-is-invalid
locale: es
kiStatus: Backlog
internalReference: 709180
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las solicitudes no válidas a la API «place order» devuelven un mensaje de error incorrecto, indicando «ID de artículo no válido» en lugar de señalar qué información es errónea.

## Simulación

Un caso conocido es cuando no se envía la propiedad «installments» dentro de la sección «paymentData.payments[]».

## Workaround

provisional**
Basta con corregir la solicitud de carga útil para evitar el problema.