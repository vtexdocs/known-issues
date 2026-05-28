---
title: 'Transação travada no status "cancelando"'
slug: transacao-travada-no-status-cancelando
status: PUBLISHED
createdAt: 2021-01-23T01:47:19.000Z
updatedAt: 2026-05-28T19:52:10.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-canceling-status
locale: pt
kiStatus: No Fix
internalReference: 327248
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As transações processadas através do conector de pagamento **MundiPagg** podem ficar presas no status **"Cancelando"** indefinidamente, mesmo após o envio de várias solicitações de cancelamento. O conector não retorna uma resposta de cancelamento bem-sucedido, impedindo que o VTEX Gateway altere o status da transação para **"Cancelado"**.
Como resultado, o pedido permanece congelado no OMS e o estoque do cliente fica bloqueado.

> ⚠️ Este problema é **específico do conector MundiPagg** (`affiliations_mundipagg`). Se a transação estiver usando um conector diferente, este KI não se aplica.

## Simulação

Não é possível simular.

## Workaround

Não há solução alternativa disponível no momento.