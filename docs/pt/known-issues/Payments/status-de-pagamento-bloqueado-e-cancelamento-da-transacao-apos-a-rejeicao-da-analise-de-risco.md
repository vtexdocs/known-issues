---
title: Status de pagamento bloqueado e cancelamento da transação após a rejeição da análise de risco
slug: status-de-pagamento-bloqueado-e-cancelamento-da-transacao-apos-a-rejeicao-da-analise-de-risco
status: PUBLISHED
createdAt: 2025-10-14T19:17:13.611Z
updatedAt: 2025-10-14T19:17:13.611Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-status-stuck-and-transaction-canceling-after-risk-analysis-rejected
locale: pt
kiStatus: Backlog
internalReference: 1163213
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O pagamento está bloqueado e o status da transação está sendo cancelado após a rejeição da análise de risco.

## Simulação


Quando o processo de liquidação automática ocorre antes da conclusão da análise de risco, o status do pagamento é atualizado para "concluído", enquanto a transação permanece no estado "analisando risco".

Se a análise de risco resultar em um resultado de "risco rejeitado", o processo de cancelamento será acionado. Entretanto, uma vez que a transação tenha sido liquidada, ela não poderá ser cancelada.

Como resultado, as transações ficam presas no status "cancelando", mesmo após um reembolso bem-sucedido, enquanto o status do pagamento permanece "concluído"
## Workaround



Cancele o pedido manualmente no OMS para evitar problemas com o gerenciamento de estoque.



