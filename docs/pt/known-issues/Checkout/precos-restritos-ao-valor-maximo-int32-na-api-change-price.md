---
title: 'Preços restritos ao valor máximo "Int32" na API Change Price'
slug: precos-restritos-ao-valor-maximo-int32-na-api-change-price
status: PUBLISHED
createdAt: 2025-11-14T19:17:25.265Z
updatedAt: 2025-11-14T19:17:25.265Z
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


O Checkout REST API Change price não suporta preços maiores que um valor "Int32". Portanto, a aplicação de um "preço manual" será restrita ao número "2.147.483.647" (número em decimais).
## Simulação


Ao usar a API "Change price" (https://developers.vtex.com/vtex-rest-api/reference/pricechange), o envio de uma carga útil como "{"price":2500000000}" (que representa US$ 25.000.000,00) retornará um erro 500 com a mensagem "Value was too large or too small for an Int32."
## Workaround


Use a API Handle cart items para atualizar o preço.


