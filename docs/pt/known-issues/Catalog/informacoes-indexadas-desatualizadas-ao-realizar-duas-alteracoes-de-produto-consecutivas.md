---
title: 'Informações indexadas desatualizadas ao realizar duas alterações de produto consecutivas.'
slug: informacoes-indexadas-desatualizadas-ao-realizar-duas-alteracoes-de-produto-consecutivas
status: PUBLISHED
createdAt: 2023-09-26T14:44:24.000Z
updatedAt: 2023-09-26T14:44:24.000Z
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

Para lojas que utilizam o mecanismo de busca antigo, se duas alterações nos dados de um produto forem realizadas em rápida sucessão (ou seja, se você desativar um produto e, em seguida, reativá-lo imediatamente), e a última alteração restaurar as informações do produto ao estado anterior, o estado desse item pode ficar preso na primeira alteração, uma vez que a última não é reconhecida corretamente.

Esse problema não ocorre em lojas que utilizam o aplicativo de pesquisa inteligente.

## Simulação

1 - selecione um item ativo em sua loja e desative-o
2 - Logo em seguida (< 5 min), reative-o.
3 - Após alguns minutos, verifique seu produto: ele não estará sendo exibido na loja, apesar de estar configurado para isso. (em outras palavras, ele ficou “preso” nesse estado intermediário).

## Workaround

1 - Reindexe os referidos produtos após mais de 5 minutos após a ocorrência do problema.
2 - Use o mecanismo de busca inteligente, que não enfrenta esse problema.
3 - Evite realizar mais de duas alterações consecutivas em um produto, nas quais a última alteração simplesmente reverte a anterior.