---
title: 'Erro no campo de quantidade máxima do mesmo SKU no carrinho.'
slug: erro-no-campo-de-quantidade-maxima-do-mesmo-sku-no-carrinho
status: PUBLISHED
createdAt: 2022-05-27T20:26:06.000Z
updatedAt: 2026-07-07T16:33:32.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: error-in-the-maximum-quantity-field-of-the-same-sku-in-the-cart
locale: pt
kiStatus: Backlog
internalReference: 587394
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a loja configura o campo “quantidade máxima do mesmo SKU no carrinho” e se trata de um pedido proveniente de um marketplace, se a quantidade de itens no pedido for maior que a configurada no painel administrativo, o sistema permite a integração dos pedidos, desrespeitando a quantidade máxima de SKUs configurada.

O cenário não ocorre ao utilizar a API Place Fulfillment Order:

`https://..com.br/api/fulfillment/pvt/orders?sc=&affiliateId=`

## Simulação

Tentando inserir um pedido de um marketplace com quantidade superior ao valor configurado no campo de quantidade máxima do mesmo SKU no carrinho do painel administrativo.

## Workaround

N/A