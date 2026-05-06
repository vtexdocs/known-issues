---
title: 'Data estimada de envio incorreta para o pedido FOB'
slug: data-estimada-de-envio-incorreta-para-o-pedido-fob
status: PUBLISHED
createdAt: 2020-07-29T15:26:39.000Z
updatedAt: 2023-01-05T20:25:43.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-shippingestimatedate-for-order-fob
locale: pt
kiStatus: Backlog
internalReference: 269104
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O parâmetro "shippingEstimateDate" é calculado incorretamente para pedidos do tipo FOB

## Simulação

- Crie um pedido via API enviando o parâmetro `"isFOB": true` no campo "shippingData"
- Faça uma consulta Get Order e verifique se o parâmetro "ShippingEstimateDate" não está levando em consideração o "shippingEstimate" enviado pelo marketplace

## Workaround

N/A