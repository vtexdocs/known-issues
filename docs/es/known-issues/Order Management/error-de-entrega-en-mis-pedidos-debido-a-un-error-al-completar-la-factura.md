---
title: 'Error de entrega en Mis Pedidos. Debido a un error al completar la factura.'
slug: error-de-entrega-en-mis-pedidos-debido-a-un-error-al-completar-la-factura
status: PUBLISHED
createdAt: 2022-03-21T22:58:11.000Z
updatedAt: 2026-10-29T21:20:17.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delivery-flag-in-my-orders-due-to-an-error-in-filling-the-invoice
locale: es
kiStatus: Fixed
internalReference: 547053
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Si la factura del pedido no contiene la información correcta sobre la cantidad de artículos y los ID de SKU del pedido, no será posible marcar el pedido como "Entregado" en "Mis pedidos".

## Simulación

Para simular este comportamiento, puede realizar un pedido con un solo artículo.

Al facturar el pedido, introduzca el ID de otro artículo en la factura y/o la cantidad de más artículos.

Tras facturar el pedido, actualice el seguimiento e introduzca la información "isDelivered: true".

En la interfaz de usuario, el pedido aparecerá como "Entregado", pero en "Mis pedidos" seguirá apareciendo como "Enviando pedido".

## Workaround

Tenga cuidado de no añadir más artículos a la factura ni artículos con diferentes ID de pedido. En estos casos, el pedido no aparecerá como "Entregado" en "Mis pedidos".