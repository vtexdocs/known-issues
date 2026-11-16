---
title: 'A remoção do item Change Order V2 com compensationShippingChanges + frete grátis resulta em um preço/preço de venda diferente de zero por item em logisticsInfo.'
slug: a-remocao-do-item-change-order-v2-com-compensationshippingchanges-frete-gratis-resulta-em-um-precopreco-de-venda-diferente-de-zero-por-item-em-logisticsinfo
status: PUBLISHED
createdAt: 2026-11-16T22:27:56.000Z
updatedAt: 2026-11-16T22:27:56.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: change-order-v2-item-removal-with-compensateshippingchanges-free-shipping-leaves-nonzero-pricesellingprice-per-item-in-logisticsinfo
locale: pt
kiStatus: Backlog
internalReference: 1485635
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um item é removido por meio da Alteração de Pedido V2 em um pedido com promoção de frete grátis, e a conta tem a opção `compensateShippingChanges` habilitada, o valor do frete por item restante em `shippingData.logisticsInfo[].price` e `sellingPrice` muda de 0 para o valor do frete que pertencia ao item removido (por exemplo, 0 → 56). O valor esperado continua sendo 0, pois o comprador não paga frete.

O valor cobrado ao comprador e o valor total do pedido permanecem corretos: o frete recalculado após a remoção é compensado por um desconto manual do mesmo valor (`ManualValues` com sinal negativo nos totais de alteração, `Shipping` com sinal positivo). Apenas o frete por item em `logisticsInfo` está incorreto.

Impacto: integrações que somam o frete por item em `logisticsInfo` (por exemplo, para emitir a fatura) obtêm um total maior que o valor do pedido, e a fatura é rejeitada ou diverge do pedido. A equipe de engenharia confirmou que esse não é o comportamento esperado. Em alguns casos, o preço de lista (listPrice) do item restante também foi alterado (para a parte do item removido); essa parte não pôde ser reproduzida e não foi confirmada.

## Simulação

Descreva aqui os passos necessários para reproduzir esse comportamento. Tenha cuidado para não expor informações confidenciais, como imagens ou anexos.

## Workaround

1. Ao faturar ou conciliar, use o valor do pedido ou o total de frete do pedido nos totais. Não some o frete por item em logisticsInfo após uma modificação.

2. Para obter o frete original por item, use o histórico de modificações: GET /api/order-system/orders/{changeOrderId}/changes (remove.shippingData e replace.from) em vez de price/listPrice em logisticsInfo.