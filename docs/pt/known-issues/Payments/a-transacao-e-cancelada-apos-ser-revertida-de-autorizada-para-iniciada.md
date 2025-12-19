---
title: 'A transação é cancelada após ser revertida de Autorizada para Iniciada'
slug: a-transacao-e-cancelada-apos-ser-revertida-de-autorizada-para-iniciada
status: PUBLISHED
createdAt: 2025-12-19T13:48:49.496Z
updatedAt: 2025-12-19T13:48:49.496Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-gets-cancelled-after-reverting-from-authorized-to-started
locale: pt
kiStatus: Backlog
internalReference: 1341471
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Alguns pagamentos aprovados e capturados pelo conector passam posteriormente para Cancelamento e terminam como Cancelados sem uma ação de cancelamento do cliente. O sintoma visível é que as transações que foram autorizadas/capturadas de repente mostram Cancelamento, e os registros internos mostram uma tentativa de transição de status inválida de Iniciado para Autorizado, indicando que o fluxo de trabalho reverteu para um estado anterior.
O problema afeta o fluxo de trabalho do VTEX Payments Gateway quando ocorre uma transição inválida e aciona o fluxo de cancelamento após um tempo limite.
## Simulação


Não é possível simular


## Workaround


Nenhuma solução alternativa disponível no momento.



