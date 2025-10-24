---
title: 'item.value do carrinho é enviado incorretamente pelo checkout em AdditionalData'
slug: itemvalue-do-carrinho-e-enviado-incorretamente-pelo-checkout-em-additionaldata
status: PUBLISHED
createdAt: 2025-10-16T19:56:45.521Z
updatedAt: 2025-10-16T19:56:45.521Z
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


Quando há uma divisão de quantidade na priceDefinition devido ao arredondamento do multiplicador de unidades, o gateway pode receber um `value` e uma `quantity` diferentes no objeto do carrinho. Portanto, isso pode fazer com que o gateway execute uma solicitação em que o miniCart.Items tenha a soma dos itens diferente do valor total do pagamento.
## Simulação



- Faça um pedido com um carrinho com uma divisão de quantidade no campo priceDefinition no formulário de pedido.
- Compare o "miniCart.Items" da transação e o "priceDefinition.sellingPrices" dos pedidos, pois eles podem ter valores e quantidades diferente
## Workaround


N/A

