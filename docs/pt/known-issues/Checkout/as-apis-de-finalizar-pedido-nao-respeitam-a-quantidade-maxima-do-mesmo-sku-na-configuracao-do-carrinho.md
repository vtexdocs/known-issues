---
title: 'As APIs de "Finalizar Pedido" não respeitam a quantidade máxima do mesmo SKU na configuração do carrinho.'
slug: as-apis-de-finalizar-pedido-nao-respeitam-a-quantidade-maxima-do-mesmo-sku-na-configuracao-do-carrinho
status: PUBLISHED
createdAt: 2022-05-27T20:26:06.000Z
updatedAt: 2026-07-11T00:15:13.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: place-order-apis-dont-respect-the-maximum-quantity-of-the-same-sku-in-the-cart-configuration
locale: pt
kiStatus: Backlog
internalReference: 587394
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a loja configura o campo “quantidade máxima do mesmo SKU no carrinho” e uma das seguintes APIs é usada para fazer o pedido:

`https://..com.br/api/fulfillment/pub/orders?sc=&affiliateId=`
`https://..com.br/api/fulfillment/pvt/orders?sc=&affiliateId=`

Se a quantidade de um dos itens no pedido for maior que a configurada nesta API, o Checkout permite a criação do pedido, desrespeitando o limite definido.

## Simulação

Tente criar um pedido com quantidade superior ao valor configurado na configuração de quantidade máxima do mesmo SKU por carrinho usando uma das APIs mencionadas acima.

## Workaround

Use uma das seguintes APIs para fazer um pedido:

Em caso de pedidos de Fulfillment (Marketplaces externos):

`https://..com.br/api/fulfillment/pvt/orders?sc=&affiliateId=`

Em caso de pedidos de Marketplace (Checkout Headless):

`https://..com.br/api/checkout/pub/orderForm//transaction`