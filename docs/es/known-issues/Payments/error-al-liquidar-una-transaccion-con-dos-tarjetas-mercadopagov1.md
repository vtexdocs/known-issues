---
title: 'Error al liquidar una transacción con dos tarjetas - MercadoPagoV1'
slug: error-al-liquidar-una-transaccion-con-dos-tarjetas-mercadopagov1
status: PUBLISHED
createdAt: 2021-07-14T21:48:28.000Z
updatedAt: 2026-06-05T21:03:44.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-settling-transaction-with-2-cards-mercadopagov1
locale: es
kiStatus: No Fix
internalReference: 395943
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se procesa una transacción a través del conector **MercadoPagoV1** utilizando **dos tarjetas de crédito**, la solicitud de liquidación falla porque VTEX llama incorrectamente a la API de MercadoPago **concatenando ambos TID** en una sola solicitud, en lugar de realizar llamadas individuales para cada pago.
**Comportamiento actual (incorrecto):**

 GET https://api.mercadopago.com/v1/payments/15313374757_15313364925

**Comportamiento esperado:**

 GET https://api.mercadopago.com/v1/payments/15313364925GET https://api.mercadopago.com/v1/payments/15313374757

Como resultado, la API de MercadoPago devuelve una respuesta `404 Not Found`, lo que provoca que la liquidación falle.

## Simulación

No se ha podido reproducir en un entorno controlado. El problema se manifiesta en producción en transacciones que utilizan el conector **MercadoPagoV1** en las que el cliente divide el pago entre **dos tarjetas de crédito**.

## Workaround

provisional**
No hay ninguna solución provisional disponible.