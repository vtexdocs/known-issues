---
title: 'La transacción se está liquidando, mientras que el pago con tarjeta regalo permanece en estado «autorizado» tras un error de liquidación automática'
slug: la-transaccion-se-esta-liquidando-mientras-que-el-pago-con-tarjeta-regalo-permanece-en-estado-autorizado-tras-un-error-de-liquidacion-automatica
status: PUBLISHED
createdAt: 2026-04-15T21:00:36.512Z
updatedAt: 2026-04-15T21:00:36.512Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-settling-while-giftcard-payment-stuck-in-authorized-status-after-autosettle-error
locale: es
kiStatus: Backlog
internalReference: 1201336
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pagos con tarjetas regalo quedan bloqueados en el estado «autorizado» tras cualquier error de liquidación automática en la solicitud de GiftcardHub.
Incluso tras un nuevo intento y una liquidación satisfactoria, el estado del pago no cambia.

El mensaje en las interacciones de la transacción es:


 Mensaje: Error desconocido en AutoSettle. La llamada a «https://janus-payments-link.vtex.com.br//giftcardproviders//giftcards//transactions//settlements» devolvió el estado HTTP «()».
Esto no depende del estado HTTP devuelto.

## Simulación

N/A

## Workaround

Abra un ticket solicitando la actualización del estado.