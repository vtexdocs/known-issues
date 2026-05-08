---
title: 'Anexos perdidos após a divisão do item ao usar o checkout-graphql addToCart'
slug: anexos-perdidos-apos-a-divisao-do-item-ao-usar-o-checkoutgraphql-addtocart
status: PUBLISHED
createdAt: 2026-05-08T21:48:53.000Z
updatedAt: 2026-05-08T21:48:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: attachments-lost-after-item-split-when-using-checkoutgraphql-addtocart
locale: pt
kiStatus: Backlog
internalReference: 1404093
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os anexos aplicados por meio do método `addToCart` do `checkout-graphql` podem não ser mantidos em todas as linhas de item quando o Checkout divide um item (por exemplo, devido a promoções) após a adição inicial.

O sintoma visível é que apenas um dos SKUs divididos mantém o anexo, enquanto os outros o perdem. Isso afeta lojas que utilizam o `addToCart` do GraphQL com anexos de item e promoções que acionam uma divisão.

## Simulação

- Crie uma promoção que possa causar a divisão de itens para o mesmo SKU (por exemplo, “Mais por menos”);
- Use o addToCart do GraphQL para adicionar um SKU com anexos/opções obrigatórios e com uma quantidade que dividirá os itens no carrinho (por exemplo, 4 unidades, sendo que uma delas recebe um desconto)

## Workaround

N/A