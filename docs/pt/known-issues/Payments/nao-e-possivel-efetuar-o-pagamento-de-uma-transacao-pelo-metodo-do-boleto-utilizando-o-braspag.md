---
title: 'Não é possível efetuar o pagamento de uma transação pelo método do boleto utilizando o BrasPag'
slug: nao-e-possivel-efetuar-o-pagamento-de-uma-transacao-pelo-metodo-do-boleto-utilizando-o-braspag
status: PUBLISHED
createdAt: 2022-04-07T19:01:19.000Z
updatedAt: 2026-06-05T20:23:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: it-is-not-possible-to-settle-a-transaction-with-the-boleto-method-using-braspag
locale: pt
kiStatus: No Fix
internalReference: 558065
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a transação com Boleto Bancário utilizando o conector BrasPag fica parada no status “aprovada”, o pagamento está autorizado e a API “Liquidar a transação” é chamada, ocorre um erro na captura devido ao status estar como “em liquidação”, o que não permite que a transação seja efetivamente capturada.


    Mensagem: O status do pagamento não está pronto para liquidação. Status atual: Liquidação.

## Simulação

Para simular, é necessário que a transação esteja parada no status “aprovada”, o que não é possível forçar.

## Workaround

Solicite à equipe de engenharia que altere o status da transação para “liquidação”