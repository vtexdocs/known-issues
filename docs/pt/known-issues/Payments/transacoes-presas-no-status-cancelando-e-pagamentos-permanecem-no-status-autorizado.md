---
title: 'Transações presas no status “Cancelando” e pagamentos permanecem no status “Autorizado”'
slug: transacoes-presas-no-status-cancelando-e-pagamentos-permanecem-no-status-autorizado
status: PUBLISHED
createdAt: 2025-10-17T15:42:19.000Z
updatedAt: 2026-06-19T22:52:39.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-canceling-and-payments-remain-in-authorized
locale: pt
kiStatus: Backlog
internalReference: 1309418
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas transações permanecem no status “Em cancelamento”, enquanto os pagamentos correspondentes permanecem no status “Autorizado”, sem avançar para o estado final “Concluído” ou “Cancelado”. O problema ocorre quando o Payments Worker não consegue atualizar o status do pagamento após receber a solicitação de cancelamento, o que pode ser causado por fatores internos ou externos.

## Simulação

Não é possível simular.

## Workaround

Cancele o pedido manualmente no OMS para evitar quaisquer problemas com o gerenciamento de estoque.