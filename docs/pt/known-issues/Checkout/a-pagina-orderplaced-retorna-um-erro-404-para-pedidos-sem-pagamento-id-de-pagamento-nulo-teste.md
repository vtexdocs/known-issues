---
title: 'A página `orderPlaced` retorna um erro 404 para pedidos sem pagamento (ID de pagamento nulo) - teste'
slug: a-pagina-orderplaced-retorna-um-erro-404-para-pedidos-sem-pagamento-id-de-pagamento-nulo-teste
status: PUBLISHED
createdAt: 2026-05-30T00:36:12.000Z
updatedAt: 2026-05-30T00:36:12.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderplaced-page-returns-404-for-orders-with-no-payment-null-payment-id-test
locale: pt
kiStatus: Backlog
internalReference: 1414430
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A página `orderPlaced` retorna um erro 404 quando um pedido tem valor total de $0, como pedidos que contêm apenas itens de presente ou brindes. Nesse cenário, a plataforma cria uma transação fictícia identificada como `"NO-PAYMENT"` sem nenhum registro de pagamento associado, o que significa que o `paymentId` do pedido é nulo.

Quando a página `orderPlaced` é carregada, ela aciona uma consulta GraphQL `getOrderGroup`. Como o campo `Payment.id` no esquema `order-placed-graphql` é definido como não nulo, retornar um valor nulo para esse campo faz com que toda a consulta falhe com o seguinte erro:

> `Não é possível retornar nulo para o campo não nulo Payment.id.`

Isso faz com que a página `orderPlaced` não consiga ser renderizada, retornando um erro 404 ao cliente.

Observação: os status da transação e do pagamento não são afetados; o pedido em si é criado e processado corretamente. O problema está isolado à página de confirmação `orderPlaced`.

## Simulação

Qualquer pedido com valor total de $0, em que não é necessário nenhum pagamento efetivo, por exemplo, um pedido composto inteiramente por produtos com 100% de desconto ou itens gratuitos.

## Workaround

Não há solução alternativa disponível.