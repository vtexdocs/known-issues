---
title: 'Inconsistência nos prazos de vencimento das faturas de crédito ao cliente'
slug: inconsistencia-nos-prazos-de-vencimento-das-faturas-de-credito-ao-cliente
status: PUBLISHED
createdAt: 2021-02-04T00:10:07.000Z
updatedAt: 2025-09-05T18:40:48.000Z
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

Em alguns casos, os pedidos realizados utilizando o método de pagamento **Crédito do Cliente** podem não exibir corretamente os campos **customData** no JSON do pedido processado pelo OMS, mesmo quando a transação e a liquidação do pagamento são concluídas com sucesso.
Esse comportamento é causado por inconsistências na forma como `customData` é transmitido do `orderForm` para o pedido final e pode ser afetado por aplicativos que atualizam esse campo ou por personalizações do checkout.
Como resultado, integrações que dependem desses dados (como condições de pagamento ou condições específicas de crédito) podem falhar.

## Simulação

N/A

## Workaround

N/A