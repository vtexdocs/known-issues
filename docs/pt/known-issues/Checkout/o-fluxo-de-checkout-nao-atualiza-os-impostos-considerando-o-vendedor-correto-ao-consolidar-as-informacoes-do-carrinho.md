---
title: 'O fluxo de checkout não atualiza os impostos considerando o vendedor correto ao consolidar as informações do carrinho'
slug: o-fluxo-de-checkout-nao-atualiza-os-impostos-considerando-o-vendedor-correto-ao-consolidar-as-informacoes-do-carrinho
status: PUBLISHED
createdAt: 2023-02-24T20:16:21.000Z
updatedAt: 2024-07-03T20:21:10.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-pipeline-doesnt-update-taxes-considering-the-correct-seller-when-merging-cart-information
locale: pt
kiStatus: Backlog
internalReference: 759842
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando há dois vendedores no método "SellerElection", sendo que um deles é selecionado por ter o preço mais baixo para entrega e o outro pelo preço mais baixo para retirada no ponto de retirada, a fusão das informações do carrinho não atualiza os impostos ao selecionar a retirada no ponto de retirada, causando um erro ao concluir a compra

## Simulação

- Configure dois vendedores: um com o preço mais barato para entrega e o outro para retirada no ponto de entrega
- Configure impostos _apenas_ para o vendedor que realizará a retirada no ponto de entrega ou impostos diferentes entre eles
- Realize uma simulação de checkout e você verá que não haverá impostos em "priceTags" e a compra não será concluída

## Workaround

N/A