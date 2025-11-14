---
title: 'Erro acionado por TOKEN substituído no conector do PayPal legado para status de pagamento pendente'
slug: erro-acionado-por-token-substituido-no-conector-do-paypal-legado-para-status-de-pagamento-pendente
status: PUBLISHED
createdAt: 2025-11-14T19:27:38.279Z
updatedAt: 2025-11-14T19:27:38.279Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-triggered-by-overridden-token-in-legacy-paypal-connector-for-pending-payment-status
locale: pt
kiStatus: Backlog
internalReference: 308214
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em nosso conector legado do PayPal, enfrentamos um problema relacionado à substituição do campo `TOKEN` por `PAYMENTINFO_0_TRANSACTIONID`. O problema surge quando o provedor envia um status de pagamento como pendente. Consequentemente, o TOKEN é substituído por nossa implementação do conector, levando a um erro acionado pelo PayPal durante as solicitações subsequentes. Como resultado, a transação fica presa com uma mensagem de "token inválido".
## Simulação


Esse problema só pode ser reproduzido em casos assíncronos.


## Workaround


N/A



