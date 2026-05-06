---
title: 'Preços limitados ao valor máximo de "Int32" na API de alteração de preço'
slug: precos-limitados-ao-valor-maximo-de-int32-na-api-de-alteracao-de-preco
status: PUBLISHED
createdAt: 2022-04-25T17:27:47.000Z
updatedAt: 2023-10-18T17:12:52.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: prices-restricted-to-int32-max-value-on-change-price-api
locale: pt
kiStatus: Backlog
internalReference: 566142
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API REST de checkout "Alterar preço" não suporta valores superiores a um "Int32". Portanto, a aplicação de um "preço manual" será limitada ao número "2.147.483.647" (número com casas decimais).

## Simulação

Ao utilizar a API "Alterar preço" (https://developers.vtex.com/vtex-rest-api/reference/pricechange), enviar uma carga útil como "{"price":2500000000}" (que representa $25.000.000,00) retornará um erro 500 com a mensagem "O valor era muito grande ou muito pequeno para um Int32.".

## Workaround

Use a API "Handle cart items" para atualizar o preço.