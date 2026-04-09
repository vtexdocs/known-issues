---
title: 'O título da coleção não é exibido ao acessar por meio da consulta ?map=productClusterIds em contas multilíngues'
slug: o-titulo-da-colecao-nao-e-exibido-ao-acessar-por-meio-da-consulta-mapproductclusterids-em-contas-multilingues
status: PUBLISHED
createdAt: 2026-04-09T19:01:40.107Z
updatedAt: 2026-04-09T19:01:40.107Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: collection-title-is-not-displayed-when-accessing-through-mapproductclusterids-query-in-multilanguage-accounts
locale: pt
kiStatus: Backlog
internalReference: 1390606
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao alterar o idioma da loja em uma página de coleção por meio de `?map=productClusterIds`, o título da coleção e a trilha de navegação podem desaparecer.

Embora as coleções não devam depender do idioma, o fluxo de indexação atual pode tratar valores vazios relacionados à coleção de uma forma que resulte nesse comportamento inesperado na prateleira.

## Simulação

1 - Acesse uma página de coleção por meio de `?map=productClusterIds`.
2 - Quando a página da coleção é aberta, o título e a trilha de navegação desaparecem.

## Workaround

Acesse a página da coleção por meio de `?map=productClusterNames`.