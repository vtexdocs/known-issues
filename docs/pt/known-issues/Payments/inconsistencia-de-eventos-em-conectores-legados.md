---
title: 'Inconsistência de eventos em conectores legados'
slug: inconsistencia-de-eventos-em-conectores-legados
status: PUBLISHED
createdAt: 2024-05-07T17:29:59.000Z
updatedAt: 2026-05-28T19:46:30.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: event-inconsistency-in-legacy-connectors
locale: pt
kiStatus: No Fix
internalReference: 1028677
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Isso é causado por um evento que foi publicado e nunca foi consumido nos conectores legados.
Normalmente, o status do pedido fica travado em “pagamento pendente”, e a transação pode ficar travada em “autorização” ou “aprovado”.

## Simulação

Não é possível simular esse problema.

## Workaround

Podemos alterar manualmente o status reprocessando o evento por meio de APIs internas.