---
title: 'A transação está travada na fase de captura; o valor enviado ao conector (Yamí) difere do valor do pedido'
slug: a-transacao-esta-travada-na-fase-de-captura-o-valor-enviado-ao-conector-yami-difere-do-valor-do-pedido
status: PUBLISHED
createdAt: 2020-12-18T18:57:08.000Z
updatedAt: 2026-06-05T21:21:40.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-on-capturing-value-sent-to-connector-yami-different-from-order-value
locale: pt
kiStatus: No Fix
internalReference: 317833
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas transações com divisão de transação usando o YamiSplitV1 enviam ao conector um valor diferente do valor do pedido. Ao tentar capturar, a carga útil enviada apresenta um valor diferente do total, geralmente menor; o gateway tenta realizar uma nova captura para completar o valor total; quando isso ocorre, o sistema entende que já houve uma captura e informa que não há mais nada a ser capturado.
Em alguns casos, o gateway informa que não há mais nada a ser capturado.

## Simulação

Não há como replicar esse comportamento em um ambiente de produção.

## Workaround

Não há solução alternativa