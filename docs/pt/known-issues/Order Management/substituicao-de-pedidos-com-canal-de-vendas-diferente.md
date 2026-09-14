---
title: 'Substituição de pedidos com canal de vendas diferente'
slug: substituicao-de-pedidos-com-canal-de-vendas-diferente
status: PUBLISHED
createdAt: 2024-02-16T16:02:01.000Z
updatedAt: 2026-09-14T23:01:50.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: replacing-orders-with-different-sales-channel
locale: pt
kiStatus: Fixed
internalReference: 982965
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Identificamos que não é possível substituir um SKU no pedido se o Canal de Vendas (CV) igual a 1 não estiver disponível para a conta.

Por exemplo, a conta A não possui o canal de vendas 1, apenas o CV 2. Na solicitação de substituição do pedido, estamos enviando o canal de vendas 1 e não o 2.

## Simulação

A conta A não possui o canal de vendas 1, apenas o CV 2. Na solicitação de substituição do pedido, quando solicita a substituição de um SKU, estamos recebendo o canal de vendas 1 e não o 2. Portanto, não é possível realizar a substituição.

## Workaround

N/A.