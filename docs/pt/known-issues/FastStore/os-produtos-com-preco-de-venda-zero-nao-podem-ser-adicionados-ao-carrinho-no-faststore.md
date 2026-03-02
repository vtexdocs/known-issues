---
title: 'Os produtos com preço de venda zero não podem ser adicionados ao carrinho no FastStore.'
slug: os-produtos-com-preco-de-venda-zero-nao-podem-ser-adicionados-ao-carrinho-no-faststore
status: PUBLISHED
createdAt: 2026-03-02T17:31:50.260Z
updatedAt: 2026-03-02T17:31:50.260Z
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

Produtos com preço de venda zero não podem ser adicionados ao carrinho. Esse problema ocorre porque a plataforma FastStore não aceita produtos com preço SKU zero.

## Simulação

Registre um produto com SKU com preço zero no catálogo;
Ao tentar adicionar ao carrinho, você receberá a seguinte mensagem: “A quantidade desejada para o item {nameProduct} não está disponível”; E o carrinho permanecerá vazio;

## Workaround

Para permitir que ele seja adicionado ao carrinho, configure um preço com desconto de 100% para o produto, restringindo a promoção de acordo com o método de envio selecionado, de modo que a promoção só seja concedida após a seleção do envio.