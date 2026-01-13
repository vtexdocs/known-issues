---
title: 'El pedido no se crea y se crea un pedido sin artículos cuando el carrito contiene un vendedor no blanco en pausa.'
slug: el-pedido-no-se-crea-y-se-crea-un-pedido-sin-articulos-cuando-el-carrito-contiene-un-vendedor-no-blanco-en-pausa
status: PUBLISHED
createdAt: 2026-01-13T15:23:54.283Z
updatedAt: 2026-01-13T15:23:54.283Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-creation-fails-and-order-with-no-item-is-created-when-cart-contains-paused-nonwhite-label-seller
locale: es
kiStatus: Backlog
internalReference: 1350336
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Los pedidos fallan al crearse con el error «El índice estaba fuera de rango. Debe ser no negativo y menor que el tamaño de la colección», ya que uno de los pedidos del «orderGroup» se crea sin artículos. Esto ocurre cuando un comprador intenta añadir un SKU de un **vendedor pausado que no es de marca blanca**: los metadatos del vendedor y del artículo se conservan en el carrito aunque no se añada ningún artículo de este vendedor. #### Simulación

## Workaround

