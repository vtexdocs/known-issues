---
title: 'Error provocado por un TOKEN anulado en el conector heredado de PayPal para el estado de pago pendiente'
slug: error-provocado-por-un-token-anulado-en-el-conector-heredado-de-paypal-para-el-estado-de-pago-pendiente
status: PUBLISHED
createdAt: 2025-11-14T19:27:43.490Z
updatedAt: 2025-11-14T19:27:43.490Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-triggered-by-overridden-token-in-legacy-paypal-connector-for-pending-payment-status
locale: es
kiStatus: Backlog
internalReference: 308214
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En nuestro conector heredado de PayPal, nos hemos enfrentado a un problema relacionado con la sobrescritura del campo `TOKEN` para `PAYMENTINFO_0_TRANSACTIONID`. El problema surge cuando el proveedor envía un estado de pago como pendiente. En consecuencia, nuestra implementación del conector sobrescribe el TOKEN, lo que provoca un error que PayPal desencadena durante las solicitudes posteriores. Como resultado, la transacción se bloquea con un mensaje de "código inválido".

## Simulación


Este problema sólo se puede reproducir en casos asíncronos.

## Workaround


N/A



