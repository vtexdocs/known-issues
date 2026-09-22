---
title: 'O título da coleção não é exibido ao acessar por meio da consulta ?map=productClusterIds em contas multilíngues.'
slug: o-titulo-da-colecao-nao-e-exibido-ao-acessar-por-meio-da-consulta-mapproductclusterids-em-contas-multilingues
status: PUBLISHED
createdAt: 2026-04-09T22:00:58.000Z
updatedAt: 2026-09-22T16:50:25.000Z
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

Ao alterar o idioma da loja em uma página de coleção por meio de `?map=productClusterIds`, o título da coleção e o caminho de navegação podem desaparecer.

Embora as coleções não devam ser dependentes de idioma, o fluxo de indexação atual pode lidar com valores vazios relacionados à coleção de uma forma que resulta nesse comportamento inesperado na prateleira.

## Simulação

1 - Acesse uma página de coleção por meio de `?map=productClusterIds`.

2 - Ao abrir a página da coleção, o título e o caminho de navegação desaparecem.

## Workaround

Acesse a página da coleção por meio de `?map=productClusterNames`.