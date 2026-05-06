---
title: 'La función de sustitución de pedidos no funciona cuando el carrito sustituido y el pedido original tienen el mismo valor'
slug: la-funcion-de-sustitucion-de-pedidos-no-funciona-cuando-el-carrito-sustituido-y-el-pedido-original-tienen-el-mismo-valor
status: PUBLISHED
createdAt: 2023-07-21T14:49:19.000Z
updatedAt: 2023-12-18T20:17:16.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-replacement-feature-doesnt-work-when-the-replaced-cart-and-original-order-have-the-same-value
locale: es
kiStatus: Fixed
internalReference: 866622
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La función de sustitución de pedidos no funciona cuando el carrito sustituido tiene el mismo valor que el pedido original y el sistema de pago es «Reutilizar pago».

## Simulación

- Activa la función de sustitución de pedidos;
- Completa un pedido y cambia algún dato, por ejemplo, de la talla pequeña a la grande;
- Asegúrate de que el carrito sustituido tiene el mismo valor que el pedido original;
- En el paso de pago, selecciona «Reutilizar pago».

## Workaround

Selecciona un método de pago distinto de «Reutilizar pago». La transacción anterior se cancelará y se reembolsará; se creará una nueva.