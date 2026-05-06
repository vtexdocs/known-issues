---
title: 'Preço indexado de um produto, considerando o SKU com o preço mais alto em vez do mais baixo'
slug: preco-indexado-de-um-produto-considerando-o-sku-com-o-preco-mais-alto-em-vez-do-mais-baixo
status: PUBLISHED
createdAt: 2023-05-09T14:39:44.000Z
updatedAt: 2023-08-18T17:23:52.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: indexed-price-for-a-product-considering-the-sku-with-the-highest-instead-of-the-lowest-price
locale: pt
kiStatus: Fixed
internalReference: 822120
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O preço indexado, que é um valor único para todo o produto (juntamente com seus SKUs) e é usado para classificar e filtrar os produtos na Pesquisa Inteligente, considera o preço mais alto entre os SKUs, enquanto o esperado seria considerar o SKU com o preço mais baixo – além de regras adicionais sobre a política comercial e os vendedores dos SKUs.

## Simulação

- ter um item com vários SKUs com preços diferentes
- aplicar um filtro por preço, geralmente por meio do filtro “faixa de preço”
- observar que ele será baseado no SKU mais caro, em vez do mais barato

## Workaround

N/A