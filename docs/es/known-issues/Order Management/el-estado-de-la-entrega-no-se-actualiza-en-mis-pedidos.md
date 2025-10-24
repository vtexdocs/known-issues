---
title: 'El estado de la entrega no se actualiza en Mis pedidos'
slug: el-estado-de-la-entrega-no-se-actualiza-en-mis-pedidos
status: PUBLISHED
createdAt: 2025-10-16T20:30:02.110Z
updatedAt: 2025-10-16T20:30:02.110Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delivery-status-not-updated-in-my-orders
locale: es
kiStatus: Backlog
internalReference: 1163668
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El problema se produce al mostrar el estado de entrega en Mis Pedidos, especialmente en los pedidos con notas únicas que utilizan la inferencia de artículos.
Estas notas no tienen artículos físicamente listados, lo que causa inconsistencias en la propiedad `isAllDelivered`, y como resultado, los pedidos entregados pueden mostrarse incorrectamente, impactando en la identificación precisa del estado de entrega en el listado de Mis Pedidos.

## Simulación



- Crear un pedido con artículos normales.
- Genere una única factura para el pedido sin asociar artículos directamente.
- Asegúrese de que el valor total de la nota es coherente con el valor total del pedido.
- Marque la nota como "`Finalizado`".
Compruebe la página Mis Pedidos: En la vista previa detallada `(/orders/{id})`, el estado debería aparecer como `Entregado`.

En la lista de pedidos (/user/orders), el estado aparece incorrectamente como `Order Dispatched`.

## Workaround


En Mis Pedidos, siempre que tenga dudas sobre el estado de la entrega, indique a los usuarios que hagan clic en el pedido para abrir la vista previa detallada, esto asegurará que la regla de inferencia se aplica correctamente, mostrando el estado exacto.



