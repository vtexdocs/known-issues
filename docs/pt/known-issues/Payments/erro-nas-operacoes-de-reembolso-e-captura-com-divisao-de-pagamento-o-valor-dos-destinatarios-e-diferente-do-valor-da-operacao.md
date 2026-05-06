---
title: 'Erro nas operações de reembolso e captura com divisão de pagamento - "O valor dos destinatários * é diferente do valor da operação *."'
slug: erro-nas-operacoes-de-reembolso-e-captura-com-divisao-de-pagamento-o-valor-dos-destinatarios-e-diferente-do-valor-da-operacao
status: PUBLISHED
createdAt: 2022-11-14T20:24:52.000Z
updatedAt: 2024-02-02T20:52:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-in-refund-and-capture-operations-with-payout-split-value-in-recipients-is-different-than-operation-value
locale: pt
kiStatus: Backlog
internalReference: 698005
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Devido a problemas de arredondamento ao recalcular os destinatários de uma transação com Payout Split, seja na captura ou no reembolso, recebemos a seguinte exceção do gateway, uma vez que a soma do valor dos destinatários difere do valor da transação.


    Vtex.Practices.ExceptionHandling.ValidationException: O valor nos destinatários (xx.989999999999999999999999988) é diferente do valor da operação (xx.99). em Vtex.PaymentGateway.PaymentSplit.RecipientsBuilder.ValidateRecipientsValue(List`1 recipients, Decimal value)...

## Simulação

Não é possível simular

## Workaround

Não há solução alternativa