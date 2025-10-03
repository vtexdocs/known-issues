---
title: As transações permanecem em autorização pendente apesar da aprovação do conector
slug: as-transacoes-permanecem-em-autorizacao-pendente-apesar-da-aprovacao-do-conector
status: PUBLISHED
createdAt: 2025-10-03T19:09:24.964Z
updatedAt: 2025-10-03T19:09:24.964Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-in-pending-authorization-despite-connector-approval
locale: pt
kiStatus: -
internalReference: 1302349
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As transações podem ficar presas em uma autorização pendente mesmo depois que o conector de pagamento retorna um 200 OK com o status "aprovado". Os usuários afetados veem os pedidos permanecerem em "pagamento pendente" e as transações não avançarem para Autorizado/Aprovado. Isso pode afetar qualquer fluxo em que o gateway aprova, mas o trabalhador interno não avança o estado da transação.
## Simulação


Não é possível simular.


## Workaround



- Acione o avanço da autorização manualmente por meio da API do gateway de pagamentos:
- POST /api/pvt/transactions/{transactionId}/authorization-request
- Referência: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request


