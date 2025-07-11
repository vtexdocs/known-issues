---
title: ValidateCart mutación devolver 500 cuando personalizaciones afecta a la disponibilidad del producto
slug: validatecart-mutacion-devolver-500-cuando-personalizaciones-afecta-a-la-disponibilidad-del-producto
status: PUBLISHED
createdAt: 2025-07-11T14:18:54.077Z
updatedAt: 2025-07-11T14:18:54.077Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: validatecart-mutation-returning-500-when-customizations-affects-the-availability-of-the-product
locale: es
kiStatus: Backlog
internalReference: 1258650
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando un producto no está disponible, nuestro comportamiento por defecto es devolver el último carrito válido y los errores en el `cart.messages`. Sin embargo, cuando el cliente personaliza el contexto y la regionalización de la tienda, el producto del carrito puede estar asociado a un vendedor diferente y dejar de estar disponible en un contexto distinto. Este comportamiento puede provocar un error 500 en la mutación validateCart, haciendo que el carrito no esté disponible para las acciones del cliente, como eliminar el producto del carrito.


#### Simulación


No es un contexto fácil de simular; puede implicar personalización en el lado de la tienda.
Pero un ejemplo sería cambiar de un punto de recogida donde el producto estaba disponible a otro donde ya no lo está.

## Workaround

 provisional
Como solución, el equipo ha desarrollado una bandera de función para cambiar el comportamiento del carrito, permitiendo productos no disponibles.
https://github.com/vtex/faststore/pull/2938



