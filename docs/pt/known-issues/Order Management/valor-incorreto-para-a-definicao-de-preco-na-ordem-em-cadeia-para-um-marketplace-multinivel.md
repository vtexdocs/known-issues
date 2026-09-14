---
title: 'Valor incorreto para a definição de preço na ordem em cadeia para um marketplace multinível'
slug: valor-incorreto-para-a-definicao-de-preco-na-ordem-em-cadeia-para-um-marketplace-multinivel
status: PUBLISHED
createdAt: 2022-09-22T03:13:24.000Z
updatedAt: 2026-09-14T22:58:06.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: wrong-value-for-pricedefinition-in-the-chain-order-for-a-multilevel-marketplace
locale: pt
kiStatus: Fixed
internalReference: 663203
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A propriedade "priceDefinition" para pedidos no nível "chain" em um marketplace multinível não está seguindo o "sellingPrice" como esperado. Em vez disso, está seguindo a propriedade "price".

## Simulação

Crie um pedido com um desconto aplicado desde a camada do marketplace (nível 1), em relação à camada do vendedor (chain, nível 2), em um relacionamento multinível. A camada de fulfillment (nível 3) apresentará os valores corretamente, mas a "chain" não.

## Workaround

Evite usar a propriedade "priceDefinition" nesses tipos de pedidos e faça os cálculos usando as propriedades price, quantity, unitMultiplier e priceTag – para evitar problemas com o "sellingPrice", que não é um valor preciso.