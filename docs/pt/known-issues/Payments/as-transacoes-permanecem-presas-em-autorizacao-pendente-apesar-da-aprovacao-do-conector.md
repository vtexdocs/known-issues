---
title: 'As transações permanecem presas em Autorização Pendente apesar da aprovação do conector'
slug: as-transacoes-permanecem-presas-em-autorizacao-pendente-apesar-da-aprovacao-do-conector
status: PUBLISHED
createdAt: 2025-12-26T14:33:24.884Z
updatedAt: 2025-12-26T14:33:24.884Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-pending-authorization-despite-connector-approval
locale: pt
kiStatus: Backlog
internalReference: 1344356
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, o Transaction Worker não consegue avançar a transação para o status esperado, mesmo depois de receber uma resposta bem-sucedida (200 OK) do conector. Como resultado, as transações podem permanecer presas em Pending Authorization (Autorização pendente) e os pedidos correspondentes permanecem em **"Payment Pending "** (Pagamento pendente). Esse comportamento pode ocorrer quando o conector retorna corretamente uma resposta aprovada, mas o processo interno que atualiza o status da transação não é executado corretamente.

## Simulação


Não é possível simular.


## Workaround


Transação presa em autorização pendente Execute a seguinte API para avançar manualmente a autorização: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referência da API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request



