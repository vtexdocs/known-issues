---
title: 'As transações realizadas com o PayU não mudam de status após o cancelamento'
slug: as-transacoes-realizadas-com-o-payu-nao-mudam-de-status-apos-o-cancelamento
status: PUBLISHED
createdAt: 2021-02-25T15:56:28.000Z
updatedAt: 2026-06-05T21:12:59.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-made-with-payu-do-not-change-from-cancelling-status
locale: pt
kiStatus: No Fix
internalReference: 338124
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma transação que utiliza o conector **PayU** entra no status **"Cancelando"**, ela não consegue avançar para o status **"Cancelada"**. Isso ocorre porque o conector PayU retorna o código de resposta `PENDING_TRANSACTION_REVIEW` com a mensagem `PENDING_REVIEW`, que o VTEX Gateway não reconhece como uma resposta de cancelamento válida — deixando a transação permanentemente presa no status “Cancelando”.

## Simulação

Não foi possível reproduzir o problema em um ambiente controlado. A falha não ocorre em todas as contas e se manifesta de forma intermitente em produção. As transações presas no status “Cancelando” podem ser identificadas filtrando-se por status no painel de administração do Gateway.

## Workaround

Acionar manualmente o cancelamento da transação via API:

    POST /api/payments/pvt/transactions/{transactionId}/cancellation-request

Referência: https://developers.vtex.com/vtex-developer-docs/reference/transaction-flow#cancelthetransaction