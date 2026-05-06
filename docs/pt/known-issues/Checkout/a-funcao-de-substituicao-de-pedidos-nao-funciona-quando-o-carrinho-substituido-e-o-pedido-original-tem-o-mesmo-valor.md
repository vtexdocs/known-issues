---
title: 'A função de substituição de pedidos não funciona quando o carrinho substituído e o pedido original têm o mesmo valor'
slug: a-funcao-de-substituicao-de-pedidos-nao-funciona-quando-o-carrinho-substituido-e-o-pedido-original-tem-o-mesmo-valor
status: PUBLISHED
createdAt: 2023-07-21T14:49:19.000Z
updatedAt: 2023-12-18T20:17:16.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-replacement-feature-doesnt-work-when-the-replaced-cart-and-original-order-have-the-same-value
locale: pt
kiStatus: Fixed
internalReference: 866622
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O recurso de substituição de pedido não funciona quando o carrinho substituído tem o mesmo valor do pedido original e o sistema de pagamento é "Reutilizar pagamento".

## Simulação

- Ative o recurso de substituição de pedido;
- Conclua um pedido e altere algum detalhe, por exemplo, de tamanho pequeno para grande;
- Certifique-se de que o carrinho substituído tenha o mesmo valor do pedido original;
- Na etapa de pagamento, selecione “Reutilizar pagamento”.

## Workaround

Selecione um método de pagamento diferente de “Reutilizar pagamento”. A transação anterior será cancelada e reembolsada; uma nova será criada.