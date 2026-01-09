---
title: 'Factura aceptada con un valor superior al total del pedido a través de la API de pedidos durante un cambio simultáneo.'
slug: factura-aceptada-con-un-valor-superior-al-total-del-pedido-a-traves-de-la-api-de-pedidos-durante-un-cambio-simultaneo
status: PUBLISHED
createdAt: 2026-01-09T14:22:59.512Z
updatedAt: 2026-01-09T14:22:59.512Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: invoice-accepted-with-value-higher-than-order-total-via-orders-api-during-concurrent-change
locale: es
kiStatus: Backlog
internalReference: 1348894
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Los pedidos pueden recibir facturas con un valor superior al total final del pedido cuando aún se está procesando simultáneamente una acción de cambio del pedido (por ejemplo, una cancelación parcial). El síntoma visible es una factura JSON que muestra un importe superior al valor final del pedido.
Esto afecta a los casos en los que la facturación se activa al mismo tiempo que los cambios, como los flujos de estado de «gestión» que facturan automáticamente mientras aún se está procesando un cambio de reducción de valor. #### Simulación

## Workaround

