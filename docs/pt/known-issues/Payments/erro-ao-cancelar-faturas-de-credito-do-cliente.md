---
title: 'Erro ao cancelar faturas de crédito do cliente'
slug: erro-ao-cancelar-faturas-de-credito-do-cliente
status: PUBLISHED
createdAt: 2023-10-26T21:09:38.000Z
updatedAt: 2024-05-29T17:25:13.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-cancelling-customer-credit-invoices
locale: pt
kiStatus: Backlog
internalReference: 926563
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, as faturas não podem ser canceladas; ao executar a API DELETE, recebemos um erro 500 com a seguinte resposta:

`"message": "Ocorreu um erro."`

## Simulação

Não conseguimos reproduzir esse bug.

## Workaround

N/A