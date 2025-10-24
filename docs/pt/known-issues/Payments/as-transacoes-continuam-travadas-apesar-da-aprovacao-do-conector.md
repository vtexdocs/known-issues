---
title: 'As transações continuam travadas apesar da aprovação do conector'
slug: as-transacoes-continuam-travadas-apesar-da-aprovacao-do-conector
status: PUBLISHED
createdAt: 2025-10-21T19:09:25.677Z
updatedAt: 2025-10-21T19:09:25.677Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-despite-connector-approval
locale: pt
kiStatus: Backlog
internalReference: 1302349
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, o Transaction Worker não consegue avançar a transação para o status esperado, mesmo depois de receber uma resposta bem-sucedida (200 OK) do conector. Como resultado, as transações podem permanecer presas em Pending Authorization (Autorização pendente), Authorized (Autorizado) ou Analyzing Risk (Analisando risco), e os pedidos correspondentes permanecem em "Payment Pending" (Pagamento pendente). Esse comportamento pode ocorrer quando o conector retorna corretamente uma resposta aprovada, mas o processo interno que atualiza o status da transação não é executado corretamente.
## Simulação


Não é possível simular.


## Workaround


A solução depende do status da transação atual:

- Cenário 1 - Transação presa em Autorização pendente Execute a seguinte API para avançar manualmente a autorização: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referência da API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request
- Cenário 2 - Transação travada em Authorized (Autorizado)
- Cenário 3 - Transação travada na análise de risco
Para os cenários 2 e 3, é necessário abrir um tíquete para o Product.


