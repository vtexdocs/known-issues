---
title: 'Valor incorreto para a definição de preço na ordem da cadeia de um marketplace multinível'
slug: valor-incorreto-para-a-definicao-de-preco-na-ordem-da-cadeia-de-um-marketplace-multinivel
status: PUBLISHED
createdAt: 2022-09-22T00:13:24.000Z
updatedAt: 2023-11-27T13:51:29.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: wrong-value-for-pricedefinition-in-the-chain-order-for-a-multilevel-marketplace
locale: pt
kiStatus: Backlog
internalReference: 663203
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A propriedade "priceDefinition" para pedidos no nível "chain" em um marketplace multinível não está seguindo o "sellingPrice" como esperado. Em vez disso, está seguindo a propriedade "price".

## Simulação

Crie um pedido com um desconto aplicado a partir da camada do marketplace (nível 1), em relação à camada do vendedor (chain, nível 2), em uma relação multinível. A camada de atendimento (nível 3) apresentará os valores corretamente, mas a "chain" não.

## Workaround

Evite usar a propriedade "priceDefinition" nesse tipo de pedido e faça os cálculos usando as propriedades price, quantity, unitMultiplier e priceTag – para evitar problemas com o "sellingPrice", que não é um valor preciso.