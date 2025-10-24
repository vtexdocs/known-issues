---
title: 'Produtos com preço de venda igual a zero não podem ser adicionados ao carrinho no FastStore'
slug: produtos-com-preco-de-venda-igual-a-zero-nao-podem-ser-adicionados-ao-carrinho-no-faststore
status: PUBLISHED
createdAt: 2025-10-16T20:49:50.736Z
updatedAt: 2025-10-16T20:49:50.736Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: products-with-selling-price-is-zero-cannot-be-added-to-the-cart-in-faststore
locale: pt
kiStatus: Backlog
internalReference: 1216105
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Produtos com preço de venda igual a zero não podem ser adicionados ao carrinho. Esse problema ocorre porque a plataforma FastStore não aceita produtos com preço de SKU igual a zero.
## Simulação


Registre um produto com um SKU com preço zero no catálogo;
Ao tentar adicionar ao carrinho, você recebe a seguinte mensagem: "A quantidade desejada para o item {nameProduct} não está disponível";
E o carrinho permanece vazio
## Workaround


Para permitir que ele seja adicionado ao carrinho, configure um preço com 100% de desconto para o produto, restringindo a promoção dependendo do método de envio selecionado, de modo que a promoção só seja concedida depois que o envio for selecionado.



