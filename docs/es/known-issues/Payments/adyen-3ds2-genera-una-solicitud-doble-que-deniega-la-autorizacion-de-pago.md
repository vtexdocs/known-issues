---
title: 'Adyen 3DS2 genera una solicitud doble que deniega la autorización de pago.'
slug: adyen-3ds2-genera-una-solicitud-doble-que-deniega-la-autorizacion-de-pago
status: PUBLISHED
createdAt: 2023-08-18T23:12:05.000Z
updatedAt: 2026-07-02T15:40:28.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyen-3ds2-double-request-generates-payment-authorization-denial
locale: es
kiStatus: No Fix
internalReference: 884154
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se procesa un pago 3DS2 a través del conector Adyen, ocasionalmente se envía una solicitud de autorización duplicada. Esto provoca que Adyen rechace automáticamente el pago y que el pedido quede en estado de error, incluso en los casos en que el cargo ya se haya procesado en Adyen.

Respuesta de autorización:

`{"estado":409,"código de error":"704","mensaje":"solicitud ya procesada o en curso","tipo de error":"validación"}`

Después del mensaje:

`Respuesta no esperada [].`

Dado que VTEX no recibe una respuesta de autorización exitosa, no se activa la liquidación y no se puede emitir un reembolso automático.

## Simulación

No se ha podido reproducir. No se ha identificado ningún patrón consistente que desencadene la solicitud duplicada.

## Workaround

No disponible.