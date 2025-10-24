---
title: 'logisticsInfo com ordem incorreta no orderForm'
slug: logisticsinfo-com-ordem-incorreta-no-orderform
status: PUBLISHED
createdAt: 2025-10-16T20:32:39.947Z
updatedAt: 2025-10-16T20:32:39.947Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: logisticsinfo-with-incorrect-order-in-the-orderform
locale: pt
kiStatus: Backlog
internalReference: 1170225
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Os itens em `shippingData.logisticsInfo` não são ordenados de acordo com a propriedade `itemIndex`, causando inconsistências apenas na interface de checkout, mas ainda é possível fazer o pedido.
## Simulação


Não há um processo passo a passo simples para replicar esse cenário, mas a verificação do orderForm via API.


## Workaround


N/A


