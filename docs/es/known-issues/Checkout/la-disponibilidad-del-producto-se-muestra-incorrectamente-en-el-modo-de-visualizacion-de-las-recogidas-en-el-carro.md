---
title: 'La disponibilidad del producto se muestra incorrectamente en el modo de visualización de las recogidas en el carro'
id: 6aoRWAMSGDwcuUPvGd8bI9
status: PUBLISHED
createdAt: 2022-03-30T17:24:21.013Z
updatedAt: 2024-02-16T20:28:45.041Z
publishedAt: 2024-02-16T20:28:45.041Z
firstPublishedAt: 2022-03-30T17:24:21.669Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: product-availability-is-incorrectly-showed-in-the-pickups-in-cart-display-modal
locale: es
kiStatus: No Fix
internalReference: 552875
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



En la vista previa del envío, tras introducir la ubicación, el modal de selección de recogidas informa incorrectamente de la disponibilidad de los artículos en sus respectivas tiendas. Por ejemplo, la tienda X tiene todos los artículos disponibles, pero en el modal la información es que uno de los artículos no está disponible. Al llegar a la caja, la información se muestra correctamente, tanto en la fase de envío como en el modal de recogidas (cuando hay una división de los artículos en varias recogidas diferentes).



## Simulación



En este caso concreto, había tres artículos en el carrito, cada uno de ellos provenía de un vendedor diferente, pero era el mismo SLA para retirar todos los artículos en una sola recogida. Y con ello, en el modal de recogida del carrito, aparecía que dos artículos no estaban disponibles, aunque sí lo estaban. Al llegar a la fase de pago, la división de paquetes era correcta con la retirada en el SLA único que era equivalente para todos.




## Workaround


N/A

