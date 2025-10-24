---
title: 'ValidateCart mutación devolver 500 cuando personalizaciones afecta a la disponibilidad del producto'
slug: validatecart-mutacion-devolver-500-cuando-personalizaciones-afecta-a-la-disponibilidad-del-producto
status: PUBLISHED
createdAt: 2025-10-16T19:22:12.646Z
updatedAt: 2025-10-16T19:22:12.646Z
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


Cuando un producto no está disponible, nuestro comportamiento por defecto es devolver el último carrito válido y los errores en el `cart.messages`. Los productos ya añadidos al carrito pueden dejar de estar disponibles debido a personalizaciones manuales del comerciante (por ejemplo, cambiar manualmente los puntos de recogida/vendedor en el carrito). Este comportamiento puede provocar un error 500 en la mutación validateCart, haciendo que el carrito no esté disponible para las acciones del cliente, como eliminar el producto del carrito.


#### Simulación


No es un contexto fácil de simular; puede implicar personalización en el lado de la tienda.
Pero un ejemplo sería cambiar de un punto de recogida en el que el producto estaba disponible a otro en el que ya no lo está.

## Workaround

 provisional
Como solución, el equipo ha desarrollado un indicador de función para cambiar el comportamiento predeterminado del carro de la devolución de errores desde el lado del servidor, lo que permite productos no disponibles en el carro y la transferencia de la responsabilidad de manejar los escenarios de error en el lado del cliente a través de personalizaciones comerciante.
https://github.com/vtex/faststore/pull/2938



