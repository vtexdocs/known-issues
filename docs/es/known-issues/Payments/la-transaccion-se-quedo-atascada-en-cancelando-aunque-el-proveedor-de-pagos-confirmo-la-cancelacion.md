---
title: 'La transacción se quedó atascada en "Cancelando" aunque el proveedor de pagos confirmó la cancelación.'
slug: la-transaccion-se-quedo-atascada-en-cancelando-aunque-el-proveedor-de-pagos-confirmo-la-cancelacion
status: PUBLISHED
createdAt: 2026-11-05T18:17:04.000Z
updatedAt: 2026-11-05T18:17:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-cancelling-although-the-payment-provider-confirmed-the-cancellation
locale: es
kiStatus: Backlog
internalReference: 1481557
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La transacción permanece en estado de «Cancelación» indefinidamente, incluso después de que el proveedor de pagos la haya confirmado. La tienda recibe correos electrónicos repetidos con el asunto «gateway-cancelamento-manual-requerido» solicitando una cancelación manual. Tras la respuesta de cancelación exitosa, las interacciones de la transacción muestran «No se pudo cancelar el pago». Esto afecta principalmente a las transacciones divididas nativas canceladas tras un rechazo por parte del sistema antifraude.

## Simulación

No es posible realizar una simulación.

## Workaround

Abra un ticket con PS Payments indicando los ID de transacción afectados. Los correos electrónicos «gateway-cancelamento-manual-requerido» pueden ignorarse para las transacciones en las que el proveedor de pagos haya confirmado la cancelación. Si el proveedor no la confirmó, cancele la autorización directamente con él antes de abrir el ticket.