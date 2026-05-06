---
title: 'Los carritos creados a partir de la sustitución de un pedido no reciben las promociones correctamente'
slug: los-carritos-creados-a-partir-de-la-sustitucion-de-un-pedido-no-reciben-las-promociones-correctamente
status: PUBLISHED
createdAt: 2021-11-22T20:31:57.000Z
updatedAt: 2023-10-20T17:47:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: carts-created-from-order-replacement-do-not-receive-promotions-correctly
locale: es
kiStatus: Backlog
internalReference: 473424
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los carritos creados a partir de pedidos existentes mediante la función «sustituir pedidos» que aparece en la página «mis pedidos» están limitados a la promoción original, pero sin tener en cuenta que esa misma promoción puede aplicarse a diferentes contextos, como distintos métodos de pago u opciones de envío.

## Simulación

- Disponer de una promoción para varios métodos de pago
- Cerrar el pedido pagando con «A», que debe tener un descuento
- En la pantalla «Mis pedidos», elegir cambiar el método de pago del pedido
- Volver al carrito y elegir pagar con «B»
- El descuento no se mostrará

## Workaround

N/A