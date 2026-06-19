---
title: 'Las transacciones se quedan en «Cancelando» y los pagos siguen en «Autorizados»'
slug: las-transacciones-se-quedan-en-cancelando-y-los-pagos-siguen-en-autorizados
status: PUBLISHED
createdAt: 2025-10-17T15:42:19.000Z
updatedAt: 2026-06-19T22:52:39.000Z
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

Algunas transacciones permanecen en el estado «En proceso de cancelación», mientras que sus pagos correspondientes se mantienen en «Autorizados», sin pasar al estado final «Finalizado» o «Cancelado». El problema se produce cuando el «Payments Worker» no actualiza el estado del pago tras recibir la solicitud de cancelación, lo cual puede deberse a factores internos o externos.

## Simulación

No es posible simularlo.

## Workaround

provisional**
Cancela el pedido manualmente en el OMS para evitar cualquier problema con la gestión de inventario.