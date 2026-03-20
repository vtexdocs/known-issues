---
title: 'A transação está parada na etapa "Aprovada", enquanto o pagamento continua como "Concluído" ou "Em liquidação"'
slug: a-transacao-esta-parada-na-etapa-aprovada-enquanto-o-pagamento-continua-como-concluido-ou-em-liquidacao
status: PUBLISHED
createdAt: 2026-03-20T15:12:45.553Z
updatedAt: 2026-03-20T15:12:45.553Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-approved-while-payment-remains-finished-or-settling
locale: pt
kiStatus: Backlog
internalReference: 1381639
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As transações ficam presas no status "Aprovado" quando o pagamento correspondente permanece em "Em liquidação" ou "Concluído"; a transação não passa para o status "Concluído"; e as tentativas de captura retornam erro quando há reembolsos parciais ou cancelamentos parciais e uma divergência entre as ações e as solicitações na rota de liquidação.

## Simulação

Não é possível reproduzir o erro.

## Workaround

Não há solução alternativa disponível.