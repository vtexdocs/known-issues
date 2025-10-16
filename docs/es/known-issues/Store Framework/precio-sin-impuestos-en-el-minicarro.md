---
title: Precio sin impuestos en el minicarro
slug: precio-sin-impuestos-en-el-minicarro
status: PUBLISHED
createdAt: 2025-10-16T20:58:28.390Z
updatedAt: 2025-10-16T20:58:28.390Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: price-without-taxes-being-considered-in-the-minicart
locale: es
kiStatus: Backlog
internalReference: 1234933
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente no es posible mostrar el precio del producto con impuestos dentro del contexto de la lista de minicart.


#### Simulación



1. Añade al carrito un producto que tiene impuestos asociados.
2. Abre el minicarrito y observa los detalles del producto.
3. Observe que los impuestos adicionales no se muestran, aunque puedan estar presentes y calculados en el checkout.

## Workaround


Sólo es posible añadir el importe del impuesto en el campo totalizadores.

Esto se configura añadiendo la opción "Tax" a la prop `totalizersToShow` del bloque `checkout-summary.compact`:


      "checkout-summary.compact#minicart": {"children": ["summary-totalizers#minicart"], "props": {"totalizersToShow": ["Items", "Discounts", "Tax"] } }




