---
title: 'Reemplazar pedidos con diferentes canales de venta'
slug: reemplazar-pedidos-con-diferentes-canales-de-venta
status: PUBLISHED
createdAt: 2024-02-16T16:02:01.000Z
updatedAt: 2026-09-14T23:01:50.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: replacing-orders-with-different-sales-channel
locale: es
kiStatus: Fixed
internalReference: 982965
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hemos detectado que no es posible reemplazar una SKU en un pedido si el Canal de Ventas (CV) igual a 1 no está disponible para la cuenta.

Por ejemplo, la cuenta A no tiene el Canal de Ventas=1, solo el CV=2. En la solicitud de reemplazo del pedido, se envía el Canal de Ventas=1 y no el 2.

## Simulación

La cuenta A no tiene el Canal de Ventas=1, solo el CV=2. En la solicitud de reemplazo del pedido, al solicitar el reemplazo de una SKU, se envía el Canal de Ventas=1 y no el 2; por lo tanto, no es posible realizar el reemplazo.

## Workaround

No aplica.