---
title: 'delayToAutoSettleAfterAntifraud: aciona a captura automática mesmo sem a verificação antifraude'
slug: delaytoautosettleafterantifraud-aciona-a-captura-automatica-mesmo-sem-a-verificacao-antifraude
status: PUBLISHED
createdAt: 2021-05-17T18:47:36.000Z
updatedAt: 2023-05-08T19:58:51.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: delaytoautosettleafterantifraud-triggering-automatic-capture-even-without-antifraud
locale: pt
kiStatus: Backlog
internalReference: 369633
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a transação **NÃO** possui antifraude, ela adota o menor valor entre `delayToAutoSettle` e `delayToAutoSettleAfterAntifraud`. Nesse caso, o `EarlySettlementWorker` é responsável pela captura, sendo este o worker para a captura antecipada. Tecnicamente, é o worker chamado após a execução da proteção antifraude, mas, quando não há proteção antifraude, ele inicia sua contagem regressiva após a autorização do pagamento.

Por outro lado, no cenário em que a proteção antifraude **EXISTE**, o comportamento é o esperado: o que ocorrer primeiro é chamado. A captura automática inicia a contagem regressiva após a aprovação do pagamento. A captura antecipada inicia a contagem regressiva após a aprovação da proteção antifraude.

Por exemplo, se `delayToAutoSettle` for igual a 1 minuto e `delayToAutoSettleAfterAntifraud` for igual a 1 segundo, e a antifraude for chamada e aprovada antes de 1 minuto após a autorização do pagamento, então o `EarlySettlementWorker` será chamado.

## Simulação

Para simular, é necessário que o conector em questão esteja enviando diferentes períodos para delayto[...]. Considerando que isso esteja configurado, é necessário criar uma condição de pagamento sem um antifraude associado. Prossiga com a realização de um pedido e verifique o tempo que leva para a liquidação ser chamada (que será a referência para `delayToAutoSettleAfterAntifraud` e não para `delayToAutoSettle`).

## Workaround

N/A