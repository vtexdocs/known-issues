---
title: 'No es posible añadir al carrito un artículo con accesorio si ya hay otra unidad de ese mismo artículo sin accesorio en el carrito'
slug: no-es-posible-anadir-al-carrito-un-articulo-con-accesorio-si-ya-hay-otra-unidad-de-ese-mismo-articulo-sin-accesorio-en-el-carrito
status: PUBLISHED
createdAt: 2021-08-12T14:26:40.000Z
updatedAt: 2024-02-02T15:01:12.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: it-is-not-possible-to-add-an-item-with-attachment-to-the-cart-if-there-is-already-another-unit-of-this-item-without-attachment-in-the-cart
locale: es
kiStatus: No Fix
internalReference: 412041
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Durante el proceso de compra, si el cliente añade un artículo que ya se había incluido anteriormente en el carrito y la nueva incorporación tiene opciones de montaje, el segundo artículo no se añade al carrito.

Por ejemplo, si durante el proceso de compra el cliente añade un SKU al carrito y, a continuación, otra unidad del mismo SKU pero con una garantía ampliada (a través de assemblyOptions), el último artículo añadido (el artículo con garantía ampliada) no estará disponible en el carrito.

## Simulación

Para realizar la simulación, asegúrate de que haya artículos con opciones de configuración en tu tienda.


1. Acceda a la tienda;
2. Añada un producto al carrito;
3. Añada el producto una vez más e incluya una opción de montaje en el artículo (una personalización o una garantía ampliada, por ejemplo);
4. Compruebe el carrito y verifique que el artículo con la opción de montaje no se ha añadido.

## Workaround

No hay ninguna solución alternativa disponible.