---
title: 'El descuento nominal no se está aplicando a todos los artículos del carrito'
slug: el-descuento-nominal-no-se-esta-aplicando-a-todos-los-articulos-del-carrito
status: PUBLISHED
createdAt: 2021-02-11T20:46:12.000Z
updatedAt: 2024-07-20T02:21:57.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: nominal-discount-is-not-being-distributed-among-all-items-in-the-cart
locale: es
kiStatus: Backlog
internalReference: 334130
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El descuento nominal de las promociones no se está distribuyendo entre todos los artículos del carrito.

Esta situación solo se da en unas pocas cuentas.

La tienda tiene una promoción nominal y el descuento solo se aplica a un artículo del carrito, en lugar de distribuirse proporcionalmente entre todos los artículos como debería.

## Simulación

1. Crea una promoción normal con un descuento nominal;
2. Crea un enlace al carrito en el que se aplique la promoción;
3. Comprueba que el descuento se aplica íntegramente a un solo artículo, en lugar de distribuirse entre todos los artículos.

PD: Esto no ocurre siempre ni en todas las cuentas.

## Workaround

Para mitigar este problema, puedes utilizar la API «Crear o actualizar cupón» para aumentar el campo `maxItemsPerClient`. Esto permite que el cupón se aplique a tantos SKU como permita este campo.