---
title: 'Transações com o conector TNSPay estão sendo recusadas devido a um erro: Cartão não REGISTRADO no 3DS'
slug: transacoes-com-o-conector-tnspay-estao-sendo-recusadas-devido-a-um-erro-cartao-nao-registrado-no-3ds
status: PUBLISHED
createdAt: 2022-03-14T16:21:44.000Z
updatedAt: 2026-06-05T21:21:11.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
locale: pt
kiStatus: No Fix
internalReference: 541687
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar o conector **TNSPay** com a **autenticação 3DS** configurada, uma condição de corrida faz com que o método de autorização seja chamado **duas vezes em 2 segundos**. A segunda resposta de autorização só chega depois que a transação já entrou no fluxo de cancelamento, resultando na recusa da transação com o erro:

> `Cartão não REGISTRADO no 3DS`

Os campos de pagamento também ficam em um estado inconsistente como consequência da tentativa duplicada de autorização.
O problema é identificável pelo seguinte registro que aparece duas vezes no início da transação:

> `Autorizar usando 3DS, dadas as configurações 3DS: sempre MinimumValue`

## Simulação

Não foi possível reproduzir em um ambiente controlado. A condição de corrida ocorre intermitentemente em produção.

## Workaround

Não há solução alternativa