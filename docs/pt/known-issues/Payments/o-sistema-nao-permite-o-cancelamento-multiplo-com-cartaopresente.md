---
title: 'O sistema não permite o cancelamento múltiplo com cartão-presente'
slug: o-sistema-nao-permite-o-cancelamento-multiplo-com-cartaopresente
status: PUBLISHED
createdAt: 2020-11-24T19:45:14.000Z
updatedAt: 2024-06-25T13:51:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-system-does-not-allow-multiple-cancellation-with-giftcard
locale: pt
kiStatus: Backlog
internalReference: 309117
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O sistema não está enviando o cancelamento parcial de uma transação com cartão-presente.
Também identificamos um caso em que ocorre a mesma situação, mas o cancelamento é processado. Isso faz com que o valor do reembolso seja superior ao valor da transação, pois o valor reembolsado corresponde ao primeiro reembolso parcial somado ao segundo reembolso, que é o valor total.

## Simulação

Identifique uma transação em que tenha sido solicitado um reembolso/cancelamento parcial utilizando um cartão-presente.

## Workaround

Não há solução alternativa; no entanto, o usuário pode adicionar o crédito reembolsável por meio da interface de usuário do administrador.