---
title: 'Quando ocorre um erro após a Firstdata aprovar uma liquidação, a transação não pode ser concluída.'
slug: quando-ocorre-um-erro-apos-a-firstdata-aprovar-uma-liquidacao-a-transacao-nao-pode-ser-concluida
status: PUBLISHED
createdAt: 2023-02-27T15:48:16.000Z
updatedAt: 2023-02-27T15:48:16.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: when-an-error-occurs-after-firstdata-approves-a-settlement-the-transaction-cannot-be-completed
locale: pt
kiStatus: Backlog
internalReference: 760458
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Às vezes, podem ocorrer erros durante o processamento de nossas operações pelo gateway. No caso do conector da Firstdata, pode ocorrer um erro imediatamente após a aprovação da liquidação por nossa parte. Para resolver isso, precisamos solicitar a liquidação novamente. No entanto, devido à idempotência, o provedor não envia uma resposta “aprovada” novamente, o que pode fazer com que a transação fique presa no status “em liquidação” até que uma nova atualização de status seja fornecida.

## Simulação

Não é possível reproduzir o erro, pois ele é intermitente.

## Workaround

Não há solução alternativa disponível