---
title: 'Error provocado por un TOKEN sobrescrito en el conector heredado de PayPal para el estado de pago pendiente'
slug: error-provocado-por-un-token-sobrescrito-en-el-conector-heredado-de-paypal-para-el-estado-de-pago-pendiente
status: PUBLISHED
createdAt: 2020-11-21T05:11:02.000Z
updatedAt: 2023-06-13T20:01:14.000Z
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

En nuestro conector heredado de PayPal, nos hemos encontrado con un problema relacionado con la sobrescritura del campo `TOKEN` para `PAYMENTINFO_0_TRANSACTIONID`. El problema surge cuando el proveedor envía un estado de pago como «pendiente». En consecuencia, el TOKEN es sobrescrito por la implementación de nuestro conector, lo que provoca un error generado por PayPal durante las solicitudes posteriores. Como resultado, la transacción se queda bloqueada con un mensaje de «token no válido».

## Simulación

Este problema solo se puede reproducir en casos asíncronos.

## Workaround

provisional**
N/A