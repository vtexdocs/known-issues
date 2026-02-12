---
title: 'Las transacciones se quedan atascadas en «Cancelando» y los pagos permanecen en «Autorizado».'
slug: las-transacciones-se-quedan-atascadas-en-cancelando-y-los-pagos-permanecen-en-autorizado
status: PUBLISHED
createdAt: 2026-02-12T18:03:28.523Z
updatedAt: 2026-02-12T18:03:28.523Z
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

 Algunas transacciones permanecen en estado «Cancelando», mientras que sus pagos correspondientes permanecen en estado «Autorizado», sin pasar al estado final «Finalizado» o «Cancelado». El problema se produce cuando el trabajador de pagos no actualiza el estado del pago después de recibir la solicitud de cancelación. #### Simulación

## Workaround

