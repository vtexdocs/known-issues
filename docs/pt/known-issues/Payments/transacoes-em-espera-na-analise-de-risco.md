---
title: 'Transações em espera na análise de risco'
slug: transacoes-em-espera-na-analise-de-risco
status: PUBLISHED
createdAt: 2022-03-11T21:56:32.000Z
updatedAt: 2025-03-06T16:20:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-analysing-risk
locale: pt
kiStatus: Backlog
internalReference: 541149
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As tentativas automáticas estão ficando travadas em algumas transações que utilizam um provedor antifraude; isso pode ocorrer em dois cenários possíveis:

1. Demora mais do que o esperado para que uma nova tentativa seja solicitada e altere seu status.
2. Não é iniciada a próxima tentativa, o que deixa a transação travada

Isso está bloqueando o estoque dos clientes.

## Simulação

Não é possível simular, pois esse comportamento ocorre de forma intermitente.

## Workaround

N/A