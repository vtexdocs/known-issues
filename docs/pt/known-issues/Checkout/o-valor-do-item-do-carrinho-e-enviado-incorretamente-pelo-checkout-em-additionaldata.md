---
title: 'O valor do item do carrinho é enviado incorretamente pelo checkout em AdditionalData'
slug: o-valor-do-item-do-carrinho-e-enviado-incorretamente-pelo-checkout-em-additionaldata
status: PUBLISHED
createdAt: 2022-08-17T22:42:19.000Z
updatedAt: 2024-12-05T20:02:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-itemvalue-is-incorrectly-sent-by-checkout-in-additionaldata
locale: pt
kiStatus: Backlog
internalReference: 640386
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando há uma divisão da quantidade na `priceDefinition` devido ao arredondamento do multiplicador de unidade, o gateway pode receber valores diferentes para `value` e `quantity` no objeto do carrinho. Assim, isso pode fazer com que o gateway envie uma solicitação em que a soma dos itens em `miniCart.Items` seja diferente do valor total do pagamento.

## Simulação

- Faça um pedido com um carrinho que tenha uma divisão de quantidade no campo priceDefinition no orderForm.
- Compare o "miniCart.Items" da transação com o "priceDefinition.sellingPrices" dos pedidos; eles podem apresentar valores e quantidades diferentes

## Workaround

N/A