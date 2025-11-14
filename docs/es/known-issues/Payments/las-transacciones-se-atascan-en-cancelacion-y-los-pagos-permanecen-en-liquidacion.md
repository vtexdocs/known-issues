---
title: 'Las transacciones se atascan en "Cancelación" y los pagos permanecen en "Liquidación".'
slug: las-transacciones-se-atascan-en-cancelacion-y-los-pagos-permanecen-en-liquidacion
status: PUBLISHED
createdAt: 2025-11-14T19:34:26.748Z
updatedAt: 2025-11-14T19:34:26.748Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-canceling-and-payments-remain-in-settling
locale: es
kiStatus: Backlog
internalReference: 1317866
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los pagos pueden permanecer en el estado Liquidando y las transacciones relacionadas se atascan en Cancelando, no avanzando a Finalizado o Cancelado. Este problema se produce en casos de capturas parciales, reembolsos o cancelaciones. Durante estos flujos, los importes de liquidación de las matrices de acciones y solicitudes no se alinean correctamente. Cuando los importes totales de ambas matrices no coinciden, el pago no puede completar el proceso de liquidación. Como resultado, el pago permanece en "Liquidando" y la transacción relacionada se atasca en "Cancelando".

## Simulación


No es posible simular.

## Workaround


N/A.



