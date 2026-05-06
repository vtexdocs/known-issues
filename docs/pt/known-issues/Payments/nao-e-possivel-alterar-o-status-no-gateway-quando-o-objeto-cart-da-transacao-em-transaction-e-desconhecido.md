---
title: 'Não é possível alterar o status no gateway quando o objeto Cart da transação em /transaction é "desconhecido".'
slug: nao-e-possivel-alterar-o-status-no-gateway-quando-o-objeto-cart-da-transacao-em-transaction-e-desconhecido
status: PUBLISHED
createdAt: 2023-03-23T14:27:02.000Z
updatedAt: 2023-03-23T14:27:02.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: unable-to-change-status-on-gateway-when-transaction-cart-object-in-transaction-is-unknown
locale: pt
kiStatus: Backlog
internalReference: 776837
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para cancelar ou alterar um pedido em cenários de divisão, nosso gateway requer um objeto de carrinho. No entanto, se o processo de checkout via OMS enviar um objeto de carrinho nulo ou desconhecido, nosso gateway não poderá processar essas operações, resultando em um erro de análise da biblioteca Newtonsoft utilizada no gateway.

## Simulação

Para reproduzir o problema, atualize o objeto carrinho na entidade /transaction com um valor nulo usando nossa API para envio de dados adicionais.
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data

## Workaround

Se o objeto cart inicial não estiver mais disponível, recuperá-lo e enviá-lo de volta para a entidade /transaction usando nossa API para envio de dados adicionais pode ser um processo desafiador. Se for esse o caso, entre em contato com a equipe de suporte da VTEX para obter assistência.