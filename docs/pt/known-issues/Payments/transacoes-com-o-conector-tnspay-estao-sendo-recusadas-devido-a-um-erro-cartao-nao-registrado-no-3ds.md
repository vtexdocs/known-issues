---
title: 'Transações com o conector TNSPay estão sendo recusadas devido a um erro: Cartão não REGISTRADO no 3DS'
slug: transacoes-com-o-conector-tnspay-estao-sendo-recusadas-devido-a-um-erro-cartao-nao-registrado-no-3ds
status: PUBLISHED
createdAt: 2022-03-14T13:21:44.000Z
updatedAt: 2023-04-10T16:10:35.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
locale: pt
kiStatus: Backlog
internalReference: 541687
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Por padrão, as transações são canceladas e enviamos duas solicitações de autorização 3DS, mas você ainda não recebeu a resposta à solicitação de autorização.
A segunda resposta só aparece depois que o processo já entrou no fluxo de cancelamento.

O problema se deve a uma condição de corrida, o que faz com que os campos de pagamento fiquem inconsistentes.
No início do processo, o primeiro registro é

`Autorizar usando 3DS, considerando as configurações 3DS: sempre MinimumValue`

O método de autorização foi chamado 2 vezes em 2 segundos.

## Simulação

Não é possível simular

## Workaround

Não há solução alternativa