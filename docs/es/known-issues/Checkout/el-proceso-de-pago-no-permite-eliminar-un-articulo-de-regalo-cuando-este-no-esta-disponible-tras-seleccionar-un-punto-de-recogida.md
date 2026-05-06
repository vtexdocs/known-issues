---
title: 'El proceso de pago no permite eliminar un artículo de regalo cuando este no está disponible tras seleccionar un punto de recogida'
slug: el-proceso-de-pago-no-permite-eliminar-un-articulo-de-regalo-cuando-este-no-esta-disponible-tras-seleccionar-un-punto-de-recogida
status: PUBLISHED
createdAt: 2021-05-04T13:58:58.000Z
updatedAt: 2023-01-30T16:37:08.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-cant-remove-gift-item-when-unavailable-after-pickuppoint-selected
locale: es
kiStatus: Backlog
internalReference: 363885
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se utiliza un artículo del carrito que incluye una ventaja promocional de regalo, dicho artículo no se puede eliminar si ya no está disponible tras seleccionar el punto de recogida.

## Simulación

- Crea un carrito con un artículo normal y un regalo (que se ofrece a través de una promoción)
- Elige la recogida en punto de recogida, pero a través de una opción en la que el artículo de regalo no está disponible.
- Aparecerá un mensaje para elegir una opción de recogida diferente o eliminar el artículo del carrito, que es un botón/enlace a modo de llamada a la acción.
- Al hacer clic en la opción para eliminar el artículo, esta no funcionará debido al problema que se produce cuando el artículo es un regalo.

## Workaround

N/A