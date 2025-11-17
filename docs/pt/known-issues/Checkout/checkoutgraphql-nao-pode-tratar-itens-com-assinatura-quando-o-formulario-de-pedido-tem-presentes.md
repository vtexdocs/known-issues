---
title: 'checkout-graphql não pôde tratar itens com assinatura quando o formulário de pedido tem presentes'
slug: checkoutgraphql-nao-pode-tratar-itens-com-assinatura-quando-o-formulario-de-pedido-tem-presentes
status: PUBLISHED
createdAt: 2025-11-17T17:33:56.395Z
updatedAt: 2025-11-17T17:33:56.395Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkoutgraphql-could-not-handle-items-with-subscription-when-the-orderform-has-gifts
locale: pt
kiStatus: Backlog
internalReference: 1293912
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao adicionar vários itens de assinatura do PDP por meio do Store Framework (fluxo tratado pelo aplicativo vtex.checkout-graphql), o aplicativo cria e encaminha subscriptionData incorretamente sempre que o carrinho também contém presentes.

Como resultado, somente o primeiro item recebe o contexto de assinatura de que as Promoções (RnB) precisam, e os itens subsequentes qualificados para assinatura são simulados sem assinatura, o que leva a uma seleção de promoção incorreta ou a nenhuma promoção de assinatura para esses itens.
## Simulação


Crie com dois ou mais itens com uma assinatura.
Crie promoções para os itens de assinatura e uma promoção que insira um presente no carrinho.


## Workaround


Instale a versão beta do aplicativo vtex.checkout-graphql@0.67.2-beta.1



