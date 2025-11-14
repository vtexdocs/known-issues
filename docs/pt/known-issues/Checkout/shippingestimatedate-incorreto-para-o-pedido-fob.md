---
title: 'ShippingEstimateDate incorreto para o pedido FOB'
slug: shippingestimatedate-incorreto-para-o-pedido-fob
status: PUBLISHED
createdAt: 2025-11-14T19:16:42.452Z
updatedAt: 2025-11-14T19:16:42.452Z
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


## Simulação



- Crie um pedido via API enviando o parâmetro `"isFOB": true` em "shippingData"
- Faça um Get Order e verifique se o parâmetro "ShippingEstimateDate" não está considerando o "shippingEstimate" enviado pelo marketplac
## Workaround


N/A


