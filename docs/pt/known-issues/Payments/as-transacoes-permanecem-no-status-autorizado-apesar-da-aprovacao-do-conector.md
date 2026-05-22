---
title: 'As transações permanecem no status "Autorizado", apesar da aprovação do conector'
slug: as-transacoes-permanecem-no-status-autorizado-apesar-da-aprovacao-do-conector
status: PUBLISHED
createdAt: 2025-12-26T17:37:00.000Z
updatedAt: 2026-05-22T17:50:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-authorized-despite-connector-approval
locale: pt
kiStatus: Fixed
internalReference: 1344357
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, o Transaction Worker não consegue avançar a transação para o status esperado, mesmo após receber uma resposta bem-sucedida (200 OK) do conector. Como resultado, as transações podem ficar paralisadas no status _Autorizado_, e os pedidos correspondentes permanecem em _"Pagamento pendente"_. Esse comportamento pode ocorrer quando o conector retorna corretamente uma resposta de aprovação, mas o processo interno que atualiza o status da transação não é executado adequadamente.

Este problema corresponde ao cenário: _"Silêncio após Autorizado"_, onde foram identificadas cinco causas principais distintas que compartilham o mesmo sintoma superficial, mas mecanismos de falha diferentes. As outras causas são:

- Loop de repetição antifraude do ClearSale devido a `NullReferenceException` no conector. Ticket #1059028
- Loop de repetição antifraude do ClearSale devido a `address.number=null`. Ticket #496298
- Pagamento travado no status `Received` após a autorização, sem status visível na interface do usuário. Ticket #1411012.
- Regressão de status `Approved` → `Authorized` causada por um callback secundário do conector, resolvida juntamente com este KI.

## Simulação

Não é possível simular.

## Workaround

Abra um ticket para a equipe de suporte ao produto.