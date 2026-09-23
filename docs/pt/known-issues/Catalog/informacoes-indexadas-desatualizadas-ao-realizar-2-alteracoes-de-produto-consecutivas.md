---
title: 'Informações indexadas desatualizadas ao realizar 2 alterações de produto consecutivas.'
slug: informacoes-indexadas-desatualizadas-ao-realizar-2-alteracoes-de-produto-consecutivas
status: PUBLISHED
createdAt: 2023-09-26T17:44:24.000Z
updatedAt: 2026-09-23T17:00:45.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: outdated-indexed-information-when-performing-2-product-changes-in-a-row
locale: pt
kiStatus: No Fix
internalReference: 907428
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para lojas que utilizam o mecanismo de busca legado, se duas alterações nos dados de um produto forem feitas em rápida sucessão (ou seja, você desativou um produto e o reativou logo em seguida), e a segunda alteração restaurar as informações do produto para o estado anterior, o estado do item pode ficar preso na primeira alteração, pois a segunda não é reconhecida corretamente.

Esse problema não ocorre em lojas que utilizam o aplicativo de busca inteligente.

## Simulação

1 - Obtenha um item ativo em sua loja e desative-o.
2 - Logo em seguida (< 5 min), reative-o.
3 - Após alguns minutos, verifique o produto: ele não estará sendo exibido na loja, apesar de estar configurado para aparecer. (Em outras palavras, ele ficou "preso" nesse estado intermediário).

## Workaround

1 - Reindexe os produtos após 5 minutos ou mais de ocorrência do problema.

2 - Utilize o mecanismo de busca inteligente, que não apresenta esse problema. 3 - Evite realizar duas ou mais alterações consecutivas em um produto, em que a última alteração simplesmente reverta a anterior.