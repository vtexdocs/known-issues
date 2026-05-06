---
title: 'Incoherencia en la cantidad de artículos con opciones de montaje en el carrito'
slug: incoherencia-en-la-cantidad-de-articulos-con-opciones-de-montaje-en-el-carrito
status: PUBLISHED
createdAt: 2021-08-20T22:59:31.000Z
updatedAt: 2024-08-02T11:02:59.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: inconsistency-in-the-quantity-of-items-with-assembly-options-in-the-cart
locale: es
kiStatus: Fixed
internalReference: 417098
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los productos con opciones de personalización de montaje, un artículo principal tiene componentes, denominados artículos secundarios. Este es el caso, por ejemplo, de un frigorífico (artículo principal) con garantía ampliada (artículo secundario). Existe una inconsistencia en la plataforma al añadir al carrito la cantidad total disponible en stock del artículo principal y la misma cantidad de uno de sus artículos secundarios. Supongamos que un cliente está comprando un producto que tiene opciones de personalización de montaje. Cuando añade al carrito la cantidad total disponible en stock del artículo principal y la misma cantidad de un artículo secundario asociado a él, la cantidad final del artículo secundario será diferente de la cantidad final del artículo principal. El carrito tendrá una unidad más del artículo secundario en relación con el artículo principal.

## Simulación

- Accede a la tienda;
- Añada al carrito un producto que tenga un artículo secundario (seleccione la cantidad total disponible en stock);
- Seleccione el artículo secundario del producto, en la misma cantidad;
- Compruebe los artículos del carrito.

Observe que el carrito contiene una unidad más del artículo secundario en relación con el artículo principal.

## Workaround

N/A