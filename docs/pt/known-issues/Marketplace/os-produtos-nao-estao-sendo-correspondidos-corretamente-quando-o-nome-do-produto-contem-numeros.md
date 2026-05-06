---
title: 'Os produtos não estão sendo correspondidos corretamente quando o nome do produto contém números'
slug: os-produtos-nao-estao-sendo-correspondidos-corretamente-quando-o-nome-do-produto-contem-numeros
status: PUBLISHED
createdAt: 2023-03-01T18:54:58.000Z
updatedAt: 2023-10-19T12:08:10.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: products-not-being-correctly-matched-when-the-productname-contains-numbers
locale: pt
kiStatus: Fixed
internalReference: 762525
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o vendedor envia um SKU para o marketplace, o sistema Matcher é responsável por consultar o catálogo do marketplace e verificar se já existe um produto semelhante aos SKUs do vendedor.
Isso é feito principalmente com base no Nome do Produto.

No entanto, essa pesquisa nem sempre funciona quando o nome do produto contém caracteres numéricos.

## Simulação

1. O vendedor envia SKUs para o marketplace com números no nome do produto;
2. Os SKUs serão aprovados separadamente (em vez de terem uma correspondência) no catálogo do marketplace.

## Workaround

Envie o produto sem números no nome.