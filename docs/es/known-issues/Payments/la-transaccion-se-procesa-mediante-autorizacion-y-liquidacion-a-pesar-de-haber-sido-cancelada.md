---
title: 'La transacción se procesa mediante autorización y liquidación a pesar de haber sido cancelada'
slug: la-transaccion-se-procesa-mediante-autorizacion-y-liquidacion-a-pesar-de-haber-sido-cancelada
status: PUBLISHED
createdAt: 2026-06-05T18:29:03.000Z
updatedAt: 2026-06-05T18:29:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-proceeds-through-authorization-and-settlement-despite-being-cancelled
locale: es
kiStatus: Backlog
internalReference: 1417330
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los casos en los que se crean dos subpedidos dentro de la misma sesión de pago (mismo grupo de pedidos), una transacción que ya ha sido **cancelada** puede pasar inesperadamente por todo el proceso de autorización, prevención del fraude y liquidación, lo que da lugar a un **cobro involuntario al cliente**.
Esto se debe a una condición de carrera entre las solicitudes de cancelación y de autorización. Cuando ambas se activan casi simultáneamente, el flujo de autorización puede operar con un estado de transacción desactualizado, omitiendo el estado «Cancelado» y completándose como si el pedido siguiera siendo válido.
**Comportamiento esperado:** Una vez que una transacción alcanza el estado «Cancelada», no debería permitirse ninguna autorización o liquidación adicional.
**Comportamiento observado:** La transacción pasa de «Cancelada» → «Autorizando» → «Liquidada», generando un cargo que no debería haberse producido.

## Simulación

No se puede reproducir en un entorno controlado. El problema se produce de forma intermitente en producción y es más probable que se manifieste en **escenarios de marketplace con pedidos divididos**, donde la cancelación y la autorización pueden activarse casi simultáneamente por diferentes servicios dentro de la misma sesión de grupo de pedidos.

## Workaround

provisional**
No hay ninguna solución provisional disponible.