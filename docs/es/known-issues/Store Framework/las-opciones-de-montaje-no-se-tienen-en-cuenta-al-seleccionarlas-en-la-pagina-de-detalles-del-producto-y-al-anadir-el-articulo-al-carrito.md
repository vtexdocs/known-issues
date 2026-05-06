---
title: 'Las opciones de montaje no se tienen en cuenta al seleccionarlas en la página de detalles del producto y al añadir el artículo al carrito'
slug: las-opciones-de-montaje-no-se-tienen-en-cuenta-al-seleccionarlas-en-la-pagina-de-detalles-del-producto-y-al-anadir-el-articulo-al-carrito
status: PUBLISHED
createdAt: 2023-01-31T15:59:59.000Z
updatedAt: 2023-04-05T21:24:21.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: assembly-options-being-ignored-when-selected-on-pdp-and-adding-to-cart
locale: es
kiStatus: Fixed
internalReference: 743529
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En una página de detalles del producto (PDP) con opciones de montaje, cuando el usuario selecciona cantidades diferentes para un mismo artículo y pasa al carrito de la compra, la selección se ignora y las cantidades se restablecen a la cantidad inicial. Sin embargo, si el usuario aumenta, para **todos** los artículos, la cantidad en al menos 1 unidad, la selección se mantiene.

## Simulación

- Inicie sesión en la cuenta;
- Acceda a la página de detalles del producto (PDP) de un producto con opciones de montaje;
- Los artículos se mostrarán con las cantidades iniciales;
- Aumente en 1 la cantidad de cualquiera de los artículos y haga clic en el botón «Añadir al carrito»;
- A continuación, vaya al carrito de la caja y observará las cantidades iniciales, lo que significa que se ha ignorado la selección anterior.

## Workaround

Defina la cantidad mínima de artículos que se pueden seleccionar del grupo en 0 a través de la configuración de adjuntos, por ejemplo: [_**0**_-3]#10000[1-7][1]pricetable1;#20000[2-8][2]pricetable2;#30000[3-6][3]pricetable3