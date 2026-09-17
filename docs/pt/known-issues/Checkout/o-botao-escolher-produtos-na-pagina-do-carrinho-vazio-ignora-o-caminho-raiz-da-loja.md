---
title: 'O botão "Escolher produtos" na página do carrinho vazio ignora o caminho raiz da loja.'
slug: o-botao-escolher-produtos-na-pagina-do-carrinho-vazio-ignora-o-caminho-raiz-da-loja
status: PUBLISHED
createdAt: 2021-01-12T18:39:44.000Z
updatedAt: 2026-09-17T16:17:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: choose-products-button-on-the-empty-cart-page-ignores-the-stores-rootpath
locale: pt
kiStatus: No Fix
internalReference: 323515
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em lojas que utilizam rootPath, o botão "escolher produtos" na página do carrinho vazio redireciona o comprador para o domínio raiz em vez do caminho configurado para aquela loja, levando-o para fora da página correta da loja virtual.

## Simulação

1. Em uma loja que utiliza rootPath, abra a página de finalização da compra com o carrinho vazio.

2. Observe o botão "escolher produtos" na página do carrinho vazio.

3. O botão aponta para o domínio raiz (ex.: www.store.com) em vez do caminho da loja (ex.: www.store.com/nl).

## Workaround

Personalize esse botão no front-end para corrigir o URL.