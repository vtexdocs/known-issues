---
title: 'La función de indexación de Feed Hook omite eventos en los filtros de FromOrders'
slug: la-funcion-de-indexacion-de-feed-hook-omite-eventos-en-los-filtros-de-fromorders
status: PUBLISHED
createdAt: 2023-05-25T20:20:03.000Z
updatedAt: 2023-05-25T20:23:08.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: feed-hook-indexing-feature-skipping-events-in-fromorders-filters
locale: es
kiStatus: Backlog
internalReference: 832400
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al configurar el filtro de Feed/Hook, se definen las actualizaciones de pedidos que deben mostrarse en el feed. En el feed se pueden utilizar dos tipos de filtros: FromWorkflow y FromOrders.

Con la configuración FromWorkflow, solo se pueden filtrar las actualizaciones de pedidos por estado.
Por su parte, FromOrders permite filtrar las actualizaciones del feed por cualquier propiedad del documento JSON del pedido.

Sin embargo, en la expresión FromOrders, cuando hay una propiedad dinámica en el filtro, como el estado por ejemplo, esto hace que la indexación de los pedidos omita algunas versiones de los mismos.
Y esto puede dar lugar a que no se envíen notificaciones al feed/hook cuando debería ocurrir.

## Simulación

Establece una expresión de FromOrders con el estado del pedido, y muchas posibilidades como el canal de venta, el número de secuencia y otras condiciones.

Es posible que no se notifique debido a la información dinámica, como el estado del pedido.

## Workaround

La recomendación para casos como este es eliminar esa parte dinámica del filtro y gestionarla externamente.
Si la información dinámica es el punto principal, como el estado del pedido, se debería utilizar la opción FromWorkflow.