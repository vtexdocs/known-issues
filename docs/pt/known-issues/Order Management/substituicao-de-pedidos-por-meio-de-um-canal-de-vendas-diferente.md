---
title: 'Substituição de pedidos por meio de um canal de vendas diferente'
slug: substituicao-de-pedidos-por-meio-de-um-canal-de-vendas-diferente
status: PUBLISHED
createdAt: 2024-02-16T13:02:01.000Z
updatedAt: 2024-02-16T13:05:06.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: replacing-orders-with-different-sales-channel
locale: pt
kiStatus: Backlog
internalReference: 982965
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Constatamos que não é possível substituir um SKU no pedido se o Canal de Vendas (CV), igual a 1, não estiver disponível para a conta.

Por exemplo, a conta A não possui o canal de vendas=1, apenas CV=2; no pedido de substituição, enviamos o canal de vendas=1 e não o 2.

## Simulação

A conta A não possui o canal de vendas=1, apenas SC=2. Na solicitação de substituição do pedido, quando solicitam a substituição de um SKU, recebemos o canal de vendas=1 e não o 2; portanto, não é possível realizar a substituição.

## Workaround

N/A.