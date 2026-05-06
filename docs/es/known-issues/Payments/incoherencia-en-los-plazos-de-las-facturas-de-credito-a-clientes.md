---
title: 'Incoherencia en los plazos de las facturas de crédito a clientes'
slug: incoherencia-en-los-plazos-de-las-facturas-de-credito-a-clientes
status: PUBLISHED
createdAt: 2021-02-04T00:10:07.000Z
updatedAt: 2025-09-05T18:40:48.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-on-the-deadlines-of-customer-credit-invoices
locale: es
kiStatus: Backlog
internalReference: 331279
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, es posible que los pedidos realizados mediante el método de pago **Crédito del cliente** no muestren correctamente los campos **customData** en el JSON del pedido procesado por OMS, incluso cuando la transacción y la liquidación del pago se hayan completado con éxito.
Este comportamiento se debe a inconsistencias en la forma en que se transmite `customData` desde el `orderForm` al pedido final y puede verse afectado por aplicaciones que actualizan este campo o por personalizaciones del proceso de pago.
Como resultado, las integraciones que dependen de estos datos (como las condiciones de pago o las condiciones de crédito específicas) pueden fallar.

## Simulación

N/A

## Workaround

N/A