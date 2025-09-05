---
title: Inconsistência nos prazos das faturas de crédito do cliente
slug: inconsistencia-nos-prazos-das-faturas-de-credito-do-cliente
status: PUBLISHED
createdAt: 2025-09-05T15:41:33.855Z
updatedAt: 2025-09-05T15:41:33.855Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-on-the-deadlines-of-customer-credit-invoices
locale: pt
kiStatus: Backlog
internalReference: 331279
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, os pedidos feitos usando o método de pagamento **Customer Credit** podem não exibir corretamente os campos **customData** no JSON do pedido processado pelo OMS, mesmo quando a transação e a liquidação do pagamento são concluídas com êxito.
Esse comportamento é causado por inconsistências na forma como o `customData` é transmitido do `orderForm` para o pedido final e pode ser afetado por aplicativos que atualizam esse campo ou por personalizações de checkout.
Como resultado, as integrações que dependem desses dados (como termos de pagamento ou condições de crédito específicas) podem falhar.
## Simulação


N/A


## Workaround


N/A