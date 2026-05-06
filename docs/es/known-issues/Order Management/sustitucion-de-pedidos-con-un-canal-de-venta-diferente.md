---
title: 'Sustitución de pedidos con un canal de venta diferente'
slug: sustitucion-de-pedidos-con-un-canal-de-venta-diferente
status: PUBLISHED
createdAt: 2024-02-16T13:02:01.000Z
updatedAt: 2024-02-16T13:05:06.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: replacing-orders-with-different-sales-channel
locale: es
kiStatus: Backlog
internalReference: 982965
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hemos detectado que no es posible sustituir una referencia (SKU) en el pedido si el canal de ventas (SC), igual a 1, no está disponible para la cuenta.

Por ejemplo, la cuenta A no tiene el canal de ventas = 1, solo SC = 2; en la solicitud de sustitución del pedido, enviamos el canal de ventas = 1 y no el 2.

## Simulación

La cuenta A no tiene el canal de ventas = 1, solo SC = 2. En la solicitud de sustitución del pedido, cuando solicitan la sustitución de una SKU, se nos envía el canal de ventas = 1 y no el 2; por lo tanto, no es posible llevar a cabo la sustitución.

## Workaround

N/A.