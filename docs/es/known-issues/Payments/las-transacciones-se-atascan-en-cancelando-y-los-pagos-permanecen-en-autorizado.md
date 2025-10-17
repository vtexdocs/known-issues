---
title: Las transacciones se atascan en "Cancelando" y los pagos permanecen en "Autorizado".
slug: las-transacciones-se-atascan-en-cancelando-y-los-pagos-permanecen-en-autorizado
status: PUBLISHED
createdAt: 2025-10-17T12:43:23.155Z
updatedAt: 2025-10-17T12:43:23.155Z
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


Algunas transacciones permanecen en el estado Cancelando mientras sus pagos correspondientes permanecen en Autorizado, sin progresar al estado final Finalizado o Cancelado. El problema se produce cuando el Trabajador de pagos no actualiza el estado del pago tras recibir la solicitud de cancelación.

## Simulación


No es posible simular.

## Workaround


Cancele el pedido manualmente en el OMS para evitar problemas con la gestión del inventario.


