---
title: 'Error en el campo de cantidad máxima del mismo SKU en el carrito.'
slug: error-en-el-campo-de-cantidad-maxima-del-mismo-sku-en-el-carrito
status: PUBLISHED
createdAt: 2022-05-27T20:26:06.000Z
updatedAt: 2026-07-07T16:33:32.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: error-in-the-maximum-quantity-field-of-the-same-sku-in-the-cart
locale: es
kiStatus: Backlog
internalReference: 587394
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la tienda configura el campo "Cantidad máxima del mismo SKU en el carrito" y se trata de un pedido proveniente de un marketplace, si la cantidad de artículos en el pedido supera la configurada en el panel de administración, se permite la integración del pedido, sin respetar la cantidad máxima de SKU configurada.

Este escenario no se presenta al usar la API de Realización de Pedidos:

`https://..com.br/api/fulfillment/pvt/orders?sc=&affiliateId=`

## Simulación

Intento de insertar un pedido de un marketplace con una cantidad superior al valor configurado en el campo "Cantidad máxima" del mismo SKU en el carrito del panel de administración.

## Workaround

N/A