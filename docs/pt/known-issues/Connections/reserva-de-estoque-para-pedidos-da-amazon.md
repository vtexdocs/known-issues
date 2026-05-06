---
title: 'Reserva de estoque para pedidos da Amazon'
slug: reserva-de-estoque-para-pedidos-da-amazon
status: PUBLISHED
createdAt: 2022-10-03T18:46:51.000Z
updatedAt: 2024-10-08T14:34:37.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-orders-stock-reservation
locale: pt
kiStatus: Backlog
internalReference: 670572
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um pedido é criado no marketplace da Amazon e, após algum tempo, é cancelado antes do pagamento, a reserva de estoque permanece ativa no VTEX.

## Simulação

O pedido não será criado no menu VTEX Order Bridge, mas a reserva permanece ativa.

## Workaround

Como solução alternativa, o vendedor pode cancelar a reserva usando a API de logística