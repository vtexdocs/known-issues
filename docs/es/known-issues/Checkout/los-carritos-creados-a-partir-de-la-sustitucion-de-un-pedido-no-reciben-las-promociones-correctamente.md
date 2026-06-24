---
title: 'Los carritos creados a partir de la sustitución de un pedido no reciben las promociones correctamente.'
slug: los-carritos-creados-a-partir-de-la-sustitucion-de-un-pedido-no-reciben-las-promociones-correctamente
status: PUBLISHED
createdAt: 2021-11-22T23:31:57.000Z
updatedAt: 2026-06-24T23:48:41.000Z
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

Los carritos creados mediante la opción "Reemplazar pedido" en la página "Mis pedidos" conservan la promoción del pedido original. Sin embargo, el sistema no reevalúa la elegibilidad para la promoción cuando el comprador cambia el método de pago o la dirección de envío, aunque las reglas de la promoción puedan variar según estos factores.

Esto se ha observado durante el proceso de reemplazo de pedidos cuando los compradores actualizan su dirección o método de pago. Como resultado, el descuento desaparece del carrito.

## Simulación

- Tener una promoción para métodos de pago o envío gratuito.
- Cerrar el pedido, que debe tener un descuento de dichas promociones.
- En la pantalla "Mis pedidos", seleccionar "Modificar pedido".
- Volver al carrito, seleccionar "Pagar con un método de pago diferente" o cambiar la dirección de envío o el plazo de entrega.
- El descuento no se mostrará.

## Workaround

N/A