---
title: 'Las transacciones se quedan atascadas en "Cancelando" y los pagos permanecen en "Autorizados".'
slug: las-transacciones-se-quedan-atascadas-en-cancelando-y-los-pagos-permanecen-en-autorizados
status: PUBLISHED
createdAt: 2025-10-17T15:42:19.000Z
updatedAt: 2026-09-14T22:07:42.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-canceling-and-payments-remain-in-authorized
locale: es
kiStatus: Backlog
internalReference: 1309418
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas transacciones permanecen en estado de Cancelación mientras que sus pagos correspondientes se mantienen en Autorizado, sin avanzar al estado final de Finalizado o Cancelado. El problema se produce cuando el Procesador de Pagos no actualiza el estado del pago tras recibir la solicitud de cancelación, lo cual puede deberse a factores internos o externos.

## Simulación

No es posible realizar una simulación.

## Workaround

No existe ninguna solución alternativa.