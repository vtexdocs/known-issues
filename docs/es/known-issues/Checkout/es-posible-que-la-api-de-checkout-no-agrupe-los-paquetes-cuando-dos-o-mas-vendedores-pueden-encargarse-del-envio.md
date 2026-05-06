---
title: 'Es posible que la API de Checkout no agrupe los paquetes cuando dos o más vendedores pueden encargarse del envío'
slug: es-posible-que-la-api-de-checkout-no-agrupe-los-paquetes-cuando-dos-o-mas-vendedores-pueden-encargarse-del-envio
status: PUBLISHED
createdAt: 2023-05-03T22:24:28.000Z
updatedAt: 2023-05-03T22:24:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-api-may-not-group-packages-when-two-or-more-sellers-can-fulfill
locale: es
kiStatus: Backlog
internalReference: 802156
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando dos o más vendedores pueden gestionar un carrito con más de un artículo, es posible que la API de Checkout no agrupe los paquetes y seleccione vendedores diferentes para cada producto. Esto aumenta el coste del envío para el comprador.

Este comportamiento se observó al añadir dos artículos al carrito; uno de los artículos solo podía ser gestionado por un vendedor, y se produjo una división del paquete a pesar de que el otro artículo podía ser gestionado por el mismo vendedor. Pero no se limita a este escenario.

## Simulación

No hay una forma fácil de reproducir el escenario, pero consulte los pedidos/carritos en los que se produjo el problema.

## Workaround

N/A