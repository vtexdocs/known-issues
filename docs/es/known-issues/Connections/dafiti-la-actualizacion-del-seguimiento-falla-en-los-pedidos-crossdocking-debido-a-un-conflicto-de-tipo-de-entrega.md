---
title: 'Dafiti La actualización del seguimiento falla en los pedidos Crossdocking debido a un conflicto de tipo de entrega'
slug: dafiti-la-actualizacion-del-seguimiento-falla-en-los-pedidos-crossdocking-debido-a-un-conflicto-de-tipo-de-entrega
status: PUBLISHED
createdAt: 2025-11-12T17:38:40.730Z
updatedAt: 2025-11-12T17:38:40.730Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: dafiti-tracking-update-fails-crossdocking-orders-due-to-delivery-type-conflict
locale: es
kiStatus: Backlog
internalReference: 1323882
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Por definición, la integración siempre envía el tipo de entrega como **dropship**.
Sin embargo, algunos comerciantes trabajan con pedidos **crossdocking**.
Al intentar actualizar la información de seguimiento de estos pedidos, Dafiti devuelve un error porque la integración intenta cambiar el tipo de entrega de _crossdocking_ a _dropship_, lo cual no está permitido.


#### Simulación



- Crear o identificar un pedido en Dafiti con **tipo de entrega = crossdocking**.
- Activar una actualización de seguimiento desde VTEX a Dafiti.
- Observa que la respuesta de la API falla, ya que la integración intenta establecer el tipo de entrega en **dropship**, creando un conflicto con el valor actual.

## Workaround


N/A



