---
title: 'As transações permanecem presas no status "Autorização Pendente", apesar da aprovação do conector.'
slug: as-transacoes-permanecem-presas-no-status-autorizacao-pendente-apesar-da-aprovacao-do-conector
status: PUBLISHED
createdAt: 2026-06-30T19:14:21.000Z
updatedAt: 2026-06-30T19:14:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-pending-authorization-despite-connector-approval
locale: pt
kiStatus: Backlog
internalReference: 1427794
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas transações de pagamento permanecem travadas em "Autorização Pendente" mesmo após o conector retornar "Aprovado" (200 OK) e os pedidos correspondentes permanecerem em "Pagamento Pendente". O sintoma visível é que o status da transação não avança e nenhuma interação "Iniciada nova tentativa de autorização para pagamento" é registrada na linha do tempo da transação. Isso afeta os fluxos de pagamento no VTEX Payments Gateway, onde o worker responsável por processar a transação apresenta erros antes da execução ou nunca é chamado, bloqueando o fluxo de pedidos.

## Simulação

Não é possível simular.

## Workaround

Transação travada em "Autorização Pendente" Execute a seguinte API para avançar a autorização manualmente: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referência da API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request