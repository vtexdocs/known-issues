---
title: 'Los productos con precio de venta cero no se pueden añadir al carrito en FastStore.'
slug: los-productos-con-precio-de-venta-cero-no-se-pueden-anadir-al-carrito-en-faststore
status: PUBLISHED
createdAt: 2026-03-02T17:31:54.309Z
updatedAt: 2026-03-02T17:31:54.309Z
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

Los productos con precio de venta cero no se pueden añadir al carrito. Este problema se produce porque la plataforma FastStore no acepta productos con un precio de SKU cero.

## Simulación

Registre un producto con un SKU con precio cero en el catálogo.
Al intentar añadirlo al carrito, recibirá el siguiente mensaje: «La cantidad deseada para el artículo {nameProduct} no está disponible»; y el carrito permanecerá vacío.

## Workaround

Para que se pueda añadir al carrito, configure un descuento del 100 % para el producto, restringiendo la promoción en función del método de envío seleccionado, de modo que la promoción solo se conceda una vez que se haya seleccionado el envío.