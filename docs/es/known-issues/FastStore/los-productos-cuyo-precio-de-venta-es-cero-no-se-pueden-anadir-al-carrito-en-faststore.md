---
title: 'Los productos cuyo precio de venta es cero no se pueden añadir al carrito en FastStore'
slug: los-productos-cuyo-precio-de-venta-es-cero-no-se-pueden-anadir-al-carrito-en-faststore
status: PUBLISHED
createdAt: 2025-10-16T20:49:56.463Z
updatedAt: 2025-10-16T20:49:56.463Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: products-with-selling-price-is-zero-cannot-be-added-to-the-cart-in-faststore
locale: es
kiStatus: Backlog
internalReference: 1216105
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los productos con precio de venta es cero no se pueden añadir a la cesta, este problema se produce porque la plataforma FastStore no acepta productos con un precio de la SKU es cero.


#### Simulación


Registrar un producto con un SKU con precio cero en el catálogo;
Al intentar añadirlo al carrito, recibe el siguiente mensaje "La cantidad deseada para el artículo {nombreProducto} no está disponible";
Y el carrito permanece vacío;

## Workaround


Para permitir que se añada al carrito, configure un precio de descuento del 100% para el producto, restringiendo la promoción en función del método de envío seleccionado, de forma que la promoción sólo se conceda una vez seleccionado el envío.



