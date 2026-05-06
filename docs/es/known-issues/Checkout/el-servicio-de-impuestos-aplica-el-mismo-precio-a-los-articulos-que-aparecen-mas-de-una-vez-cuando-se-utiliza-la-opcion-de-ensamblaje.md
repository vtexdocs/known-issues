---
title: 'El Servicio de Impuestos aplica el mismo precio a los artículos que aparecen más de una vez cuando se utiliza la opción de ensamblaje'
slug: el-servicio-de-impuestos-aplica-el-mismo-precio-a-los-articulos-que-aparecen-mas-de-una-vez-cuando-se-utiliza-la-opcion-de-ensamblaje
status: PUBLISHED
createdAt: 2023-09-25T13:27:03.000Z
updatedAt: 2023-09-27T12:47:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-consider-the-same-price-for-items-that-appear-more-than-once-when-using-assembly-option
locale: es
kiStatus: Fixed
internalReference: 906518
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar las opciones de conjunto, si el artículo se vuelve a añadir al carrito, aparecerá dos veces y el servicio de impuestos solo tendrá en cuenta el precio del artículo que se encuentra en primer lugar en el carrito, lo que provocará discrepancias en los valores de los impuestos al realizar el pedido.

## Simulación

- Configure Tax Hub en una cuenta;
- Configure las opciones de montaje;
- Añada al carrito un artículo que se haya incluido en la opción de montaje;

## Workaround

N/A