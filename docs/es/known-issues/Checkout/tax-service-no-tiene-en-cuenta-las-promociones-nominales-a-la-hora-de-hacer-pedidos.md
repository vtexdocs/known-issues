---
title: 'Tax Service no tiene en cuenta las promociones nominales a la hora de hacer pedidos'
slug: tax-service-no-tiene-en-cuenta-las-promociones-nominales-a-la-hora-de-hacer-pedidos
status: PUBLISHED
createdAt: 2025-11-07T21:43:34.630Z
updatedAt: 2025-11-07T21:43:34.630Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-doesnt-consider-nominal-promotions-when-placing-orders
locale: es
kiStatus: Backlog
internalReference: 900120
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al utilizar el servicio de impuestos, si hay una promoción nominal aplicada en el carrito y se produce una división de artículos, la solicitud al sistema de servicio de impuestos no tiene la promoción nominal aplicada, no permitiendo finalizar la compra, y se mostrará el mensaje "No se ha podido crear el pedido solicitado. Por favor, inténtelo de nuevo".


#### Simulación



- Cree una promoción nominal con cumplimiento como origen del pedido;
- Añada artículos al carrito, asegúrese de que los artículos se dividen (aquí puede limitar la promoción a una determinada cantidad de artículos);
- Intente finalizar la compra.

## Workaround


N/A


