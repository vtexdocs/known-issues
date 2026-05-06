---
title: 'Una solicitud doble de Adyen 3DS2 provoca el rechazo de la autorización de pago'
slug: una-solicitud-doble-de-adyen-3ds2-provoca-el-rechazo-de-la-autorizacion-de-pago
status: PUBLISHED
createdAt: 2023-08-18T20:12:05.000Z
updatedAt: 2023-08-18T20:12:05.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyen-3ds2-double-request-generates-payment-authorization-denial
locale: es
kiStatus: Backlog
internalReference: 884154
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la solicitud 3DS2 de Adyen se envía dos veces, se produce un error en la respuesta y el pago se rechaza automáticamente.

Respuesta de autorización:

`{"status":409,"errorCode":"704","message":"solicitud ya procesada o en curso","errorType":"validación"}`

A continuación, el mensaje:

`Respuesta no esperada [].`

Esto supone un problema cuando el pago está realmente autorizado por parte de Adyen, pero, dado que no hay liquidación por nuestra parte, no podemos enviar una solicitud de reembolso.

## Simulación

Hasta el momento, no hemos podido reproducir este escenario ni encontrar un patrón.

## Workaround

provisional**
N/A