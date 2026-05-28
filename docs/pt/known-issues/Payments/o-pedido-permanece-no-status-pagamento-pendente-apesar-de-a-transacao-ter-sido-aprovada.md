---
title: 'O pedido permanece no status “Pagamento pendente”, apesar de a transação ter sido aprovada'
slug: o-pedido-permanece-no-status-pagamento-pendente-apesar-de-a-transacao-ter-sido-aprovada
status: PUBLISHED
createdAt: 2025-12-23T17:07:38.000Z
updatedAt: 2026-05-28T19:57:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-payment-pending-despite-approved-transaction
locale: pt
kiStatus: Fixed
internalReference: 1343830
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os pedidos permanecem no status “Pagamento pendente”, mesmo que a transação já tenha sido aprovada. A transação passa para o status “Aprovada” e envia a notificação correspondente ao OMS; no entanto, quando o OMS verifica o status da transação, ela é exibida como “Autorizada” em vez de “Aprovada”.

## Simulação

Não é possível simular.

## Workaround

Abra um ticket para a equipe de suporte do produto