---
title: 'El valor del artículo del carrito se envía incorrectamente durante el proceso de pago en «AdditionalData»'
slug: el-valor-del-articulo-del-carrito-se-envia-incorrectamente-durante-el-proceso-de-pago-en-additionaldata
status: PUBLISHED
createdAt: 2022-08-17T22:42:19.000Z
updatedAt: 2024-12-05T20:02:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-itemvalue-is-incorrectly-sent-by-checkout-in-additionaldata
locale: es
kiStatus: Backlog
internalReference: 640386
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se produce una división de la cantidad en la definición de precio debido al redondeo del multiplicador de unidades, la pasarela puede recibir un `valor` y una `cantidad` diferentes en el objeto del carrito. Por lo tanto, esto podría provocar que la pasarela realice una solicitud en la que la suma de los artículos de `miniCart.Items` difiera del importe total del pago.

## Simulación

- Realice un pedido con un carrito que tenga una división de cantidad en el campo priceDefinition del formulario de pedido (orderForm).
- Compare «miniCart.Items» de la transacción y «priceDefinition.sellingPrices» de los pedidos; es posible que tengan valores y cantidades diferentes.

## Workaround

N/A