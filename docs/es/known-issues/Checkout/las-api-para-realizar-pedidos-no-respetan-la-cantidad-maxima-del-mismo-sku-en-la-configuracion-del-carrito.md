---
title: 'Las API para realizar pedidos no respetan la cantidad máxima del mismo SKU en la configuración del carrito.'
slug: las-api-para-realizar-pedidos-no-respetan-la-cantidad-maxima-del-mismo-sku-en-la-configuracion-del-carrito
status: PUBLISHED
createdAt: 2022-05-27T20:26:06.000Z
updatedAt: 2026-07-11T00:15:13.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: place-order-apis-dont-respect-the-maximum-quantity-of-the-same-sku-in-the-cart-configuration
locale: es
kiStatus: Backlog
internalReference: 587394
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la tienda configura el campo "Cantidad máxima del mismo SKU en el carrito" y se utiliza una de las siguientes API para realizar el pedido:

`https://..com.br/api/fulfillment/pub/orders?sc=&affiliateId=`
`https://..com.br/api/fulfillment/pvt/orders?sc=&affiliateId=`

Si la cantidad de alguno de los artículos del pedido supera el límite configurado, el sistema permite crear pedidos sin respetar dicho límite.

## Simulación

Intente crear un pedido con una cantidad superior al valor configurado para la cantidad máxima del mismo SKU por carrito utilizando una de las API mencionadas.

## Workaround

Utilice una de las siguientes API para realizar un pedido:

Para pedidos gestionados por terceros (mercados externos):

`https://..com.br/api/fulfillment/pvt/orders?sc=&affiliateId=`

Para pedidos gestionados por marketplaces (pago sin interfaz gráfica):

`https://..com.br/api/checkout/pub/orderForm//transaction`