---
title: 'Em um cenário de divisão de pagamento em que o valor já foi registrado, o gateway não permite mais uma solicitação de cancelamento'
slug: em-um-cenario-de-divisao-de-pagamento-em-que-o-valor-ja-foi-registrado-o-gateway-nao-permite-mais-uma-solicitacao-de-cancelamento
status: PUBLISHED
createdAt: 2023-01-27T20:13:08.000Z
updatedAt: 2023-01-27T20:13:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: in-a-payout-split-scenario-when-the-amount-was-already-captured-the-gateway-no-longer-allows-a-cancellation-request
locale: pt
kiStatus: Backlog
internalReference: 742046
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um cenário de divisão, quando o usuário solicita uma alteração no pedido ou mesmo um simples cancelamento após o pagamento já ter sido capturado, o gateway não permite mais receber um novo UpdateAdditionalData.
Portanto, nesse caso, o gateway lançará uma exceção chamada PayoutSplitWasAlreadyDone.

## Simulação

Tente cancelar uma transação juntamente com um updateAdditionalData após a transação ter capturado seu pagamento.

## Workaround

Conclua a transação capturando o valor restante e, em seguida, execute um reembolso total ou parcial do valor da transação.