---
title: 'La Agencia Tributaria no tiene en cuenta las promociones simbólicas a la hora de realizar pedidos'
slug: la-agencia-tributaria-no-tiene-en-cuenta-las-promociones-simbolicas-a-la-hora-de-realizar-pedidos
status: PUBLISHED
createdAt: 2023-09-14T20:48:24.000Z
updatedAt: 2025-11-08T00:42:31.000Z
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

Al utilizar el servicio de impuestos, si se aplica una promoción nominal en el carrito y se produce una división de artículos, la solicitud enviada al sistema del servicio de impuestos no incluye dicha promoción, lo que impide completar la compra y hace que aparezca el mensaje «No se ha podido crear el pedido solicitado. Inténtalo de nuevo».

## Simulación

- Crea una promoción nominal con el cumplimiento como origen del pedido;
- Añade artículos al carrito y asegúrate de que se dividen (aquí puedes limitar la promoción a una determinada cantidad de artículos);
- Intenta finalizar la compra.

## Workaround

N/A