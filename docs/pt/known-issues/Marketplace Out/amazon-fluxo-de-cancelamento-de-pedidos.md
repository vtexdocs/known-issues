---
title: 'Amazon Fluxo de cancelamento de pedidos'
slug: amazon-fluxo-de-cancelamento-de-pedidos
status: PUBLISHED
createdAt: 2022-05-30T22:12:14.000Z
updatedAt: 2026-06-30T21:04:57.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-order-cancellation-flow
locale: pt
kiStatus: Fixed
internalReference: 588456
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

1. Quando um pedido é cancelado na Amazon, o cancelamento não ocorre no VTEX OMS. O sistema de gerenciamento de pedidos (OMS) registra "Status do pedido cancelado no marketplace", mas isso não aciona o cancelamento no VTEX; se o pedido no VTEX ainda não existir, apenas a reserva é cancelada.

2. Quando um pedido é cancelado no OMS, ele não é cancelado no marketplace.

## Simulação

1. No menu de pedidos do sistema de gerenciamento de pedidos, você verá a informação de que o pedido foi criado, mas o cancelamento na Amazon não é refletido no VTEX.

2. No OMS, o pedido é cancelado, mas esse cancelamento não é refletido no marketplace.

## Workaround

1. Cancele manualmente o pedido no VTEX OMS quando a Amazon o reportar como cancelado.

2. O cancelamento deve ser feito no marketplace.

## **Notas Internas**
Este cartão consolida o trabalho para alinhar o cancelamento de pedidos entre a Amazon e o VTEX OMS em ambas as direções, conforme descrito no Problema Conhecido.

Escopo (detalhamento):

- Subtarefa Amazon → VTEX (OMS): o cancelamento originado no marketplace deve ser refletido corretamente no VTEX (inclui Bridge, OMS e casos extremos descritos na subtarefa). **Concluído.**
- Subtarefa OMS → Amazon: o cancelamento feito no OMS deve ser refletido no marketplace (Amazon). **Concluído.**