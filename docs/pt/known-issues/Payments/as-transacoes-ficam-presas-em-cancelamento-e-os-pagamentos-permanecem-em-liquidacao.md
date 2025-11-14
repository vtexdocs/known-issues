---
title: 'As transações ficam presas em "Cancelamento" e os pagamentos permanecem em "Liquidação"'
slug: as-transacoes-ficam-presas-em-cancelamento-e-os-pagamentos-permanecem-em-liquidacao
status: PUBLISHED
createdAt: 2025-11-14T19:34:20.769Z
updatedAt: 2025-11-14T19:34:20.769Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-canceling-and-payments-remain-in-settling
locale: pt
kiStatus: Backlog
internalReference: 1317866
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Os pagamentos podem permanecer no status de Liquidação e as transações relacionadas ficam presas em Cancelamento, não avançando para Concluído ou Cancelado. Esse problema ocorre em casos que envolvem capturas parciais, reembolsos ou cancelamentos. Durante esses fluxos, os valores de liquidação nas matrizes de ações e solicitações não são alinhados corretamente. Quando os valores totais de ambas as matrizes não coincidem, o pagamento não pode concluir o processo de liquidação. Como resultado, o pagamento permanece em "Liquidando" e a transação relacionada fica presa em "Cancelando".
## Simulação


Não é possível simular.


## Workaround


N/A.



