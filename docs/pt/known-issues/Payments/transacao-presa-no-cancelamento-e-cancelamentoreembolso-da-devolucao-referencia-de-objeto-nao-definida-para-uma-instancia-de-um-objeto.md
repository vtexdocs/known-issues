---
title: 'Transação presa no cancelamento e cancelamento/reembolso da devolução “Referência de objeto não definida para uma instância de um objeto”'
slug: transacao-presa-no-cancelamento-e-cancelamentoreembolso-da-devolucao-referencia-de-objeto-nao-definida-para-uma-instancia-de-um-objeto
status: PUBLISHED
createdAt: 2026-03-11T19:58:57.180Z
updatedAt: 2026-03-11T19:58:57.180Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-cancelling-and-cancelrefund-return-object-reference-not-set-to-an-instance-of-an-object
locale: pt
kiStatus: Fixed
internalReference: 1376434
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os pedidos ficam presos no status **“Cancelando”** quando a transação relacionada permanece em **“Cancelando”**. Todas as tentativas de cancelar ou reembolsar a transação falham, retornando o erro **“Referência de objeto não definida para uma instância de um objeto.”**

## Simulação

Não é possível simular.

## Workaround

Para concluir manualmente o fluxo pós-compra de uma transação travada, execute uma das seguintes APIs:

- **Cancelar a transação:**`POST /api/pvt/transactions/{transactionId}/cancellation-request` 🔗 Referência da API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/cancellation-request
- **Reembolsar a transação**: `POST /api/pvt/transactions/{transactionId}/refunding-request` 🔗 Referência da API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/refunding-request