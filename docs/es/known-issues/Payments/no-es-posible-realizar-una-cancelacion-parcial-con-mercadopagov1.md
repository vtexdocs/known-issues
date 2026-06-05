---
title: 'No es posible realizar una cancelación parcial con MercadoPagoV1'
slug: no-es-posible-realizar-una-cancelacion-parcial-con-mercadopagov1
status: PUBLISHED
createdAt: 2020-09-11T15:36:02.000Z
updatedAt: 2026-06-05T20:52:09.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inability-to-make-partial-cancellation-with-mercadopagov1
locale: es
kiStatus: No Fix
internalReference: 286738
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se realiza una cancelación parcial en un pago con tarjeta de débito, la pasarela no envía una solicitud a Mercado Pago y, por lo tanto, no se realiza la solicitud de captura, ya que el estado nos indica que el pago ya se ha capturado, lo que significa que no se devuelve el dinero al cliente

## Simulación

1. Realiza una compra con una tarjeta de débito utilizando el conector MercadoPagoV1.
2. Realiza una cancelación parcial.

## Workaround

No hay ninguna; se trata de una limitación del sistema.