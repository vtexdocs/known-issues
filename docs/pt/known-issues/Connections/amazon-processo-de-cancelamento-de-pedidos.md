---
title: 'Amazon Processo de cancelamento de pedidos'
slug: amazon-processo-de-cancelamento-de-pedidos
status: PUBLISHED
createdAt: 2022-05-30T22:12:14.000Z
updatedAt: 2026-03-10T23:10:41.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-order-cancellation-flow
locale: pt
kiStatus: Backlog
internalReference: 588456
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

1. Quando o pedido é cancelado na Amazon, não o cancelamos no VTEX OMS.
A ponte registra “O status do pedido é cancelado no marketplace”, mas não aciona um cancelamento no VTEX; se o pedido no VTEX ainda não existir, apenas a reserva é cancelada
2. Quando um pedido é cancelado no OMS, o pedido não é cancelado no marketplace.

## Simulação

1. No menu de pedidos da ponte, você verá a informação de que o pedido foi criado, mas quando cancelado na Amazon, isso não se reflete no VTEX.
2. No OMS, o pedido é cancelado, mas esse cancelamento não é refletido no marketplace.

## Workaround

1. Cancele manualmente o pedido no VTEX OMS quando a Amazon o reportar como cancelado.
2. O cancelamento deve ser feito no marketplace.