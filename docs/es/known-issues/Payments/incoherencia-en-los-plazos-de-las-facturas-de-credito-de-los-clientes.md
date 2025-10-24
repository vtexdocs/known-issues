---
title: 'Incoherencia en los plazos de las facturas de crédito de los clientes'
slug: incoherencia-en-los-plazos-de-las-facturas-de-credito-de-los-clientes
status: PUBLISHED
createdAt: 2025-09-05T15:41:45.708Z
updatedAt: 2025-09-05T15:41:45.708Z
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


En algunos casos, es posible que los pedidos realizados con el método de pago **Customer Credit** no muestren correctamente los campos **customData** en el JSON del pedido procesado por OMS, incluso cuando la transacción y la liquidación del pago se hayan completado correctamente.
Este comportamiento se debe a incoherencias en el modo en que se transmiten los "datos personalizados" desde el "formulario de pedido" al pedido final, y puede verse afectado por aplicaciones que actualicen este campo o por personalizaciones del proceso de pago.
Como resultado, las integraciones que dependen de estos datos (como las condiciones de pago o condiciones de crédito específicas) pueden fallar.

## Simulación


N/A


#### Workaround


N/A