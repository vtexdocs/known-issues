---
title: 'Factura aceptada con un valor superior al total del pedido a través de la API de pedidos durante un cambio simultáneo.'
slug: factura-aceptada-con-un-valor-superior-al-total-del-pedido-a-traves-de-la-api-de-pedidos-durante-un-cambio-simultaneo
status: PUBLISHED
createdAt: 2026-01-29T14:38:29.029Z
updatedAt: 2026-01-29T14:38:29.029Z
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

 En algunos casos, cuando se produce un **cambio** y se envía una **factura** casi al mismo tiempo para el mismo pedido, el sistema puede basarse en información desactualizada sobre el importe facturado. Esto puede provocar: - **Factura con un valor superior al total final del pedido** (la factura se acepta basándose en el valor del pedido antes de que se complete totalmente el cambio de reducción). - **Pedido atascado en** «pago aprobado» **incluso con una factura válida** (la factura existe en un sistema externo, pero el flujo de trabajo no la encuentra en el momento de la validación, lo que interpreta la situación como una factura parcial y no mueve el pedido a «facturado»).
En ambos casos, la causa principal es la ejecución casi simultánea de **Cambio** y **Factura**, lo que da lugar a inconsistencias entre el importe real facturado y el estado final del pedido. #### Simulación

## Workaround

