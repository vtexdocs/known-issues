---
title: 'La función «UseSessionRegionAtCheckout» no funciona correctamente al añadir el primer artículo al carrito'
slug: la-funcion-usesessionregionatcheckout-no-funciona-correctamente-al-anadir-el-primer-articulo-al-carrito
status: PUBLISHED
createdAt: 2023-10-24T22:51:12.000Z
updatedAt: 2023-10-26T10:55:13.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: usesessionregionatcheckout-doesnt-work-properly-when-adding-the-first-item-to-the-cart
locale: es
kiStatus: Backlog
internalReference: 925049
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Si una cuenta tiene configurada la opción «UseSessionRegionAtCheckout», al añadir un artículo y el formulario de pedido no contiene «shippingData», no se establece el vendedor, por lo que se muestran precios y disponibilidad diferentes.

## Simulación

- La cuenta debe estar utilizando UseSessionRegionAtCheckout;
- Establezca un regionId en la sesión;
- Añada un artículo al carrito; es posible que se muestren precios y disponibilidad diferentes.

## Workaround

Actualice el formulario de pedido (API Get actual o cree un nuevo carrito) utilizando el parámetro `?refreshOutdatedData=true`.