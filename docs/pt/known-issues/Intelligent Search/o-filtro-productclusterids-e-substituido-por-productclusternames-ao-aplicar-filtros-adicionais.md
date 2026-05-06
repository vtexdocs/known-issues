---
title: 'O filtro "productClusterIds" é substituído por "productClusterNames" ao aplicar filtros adicionais'
slug: o-filtro-productclusterids-e-substituido-por-productclusternames-ao-aplicar-filtros-adicionais
status: PUBLISHED
createdAt: 2023-09-13T22:42:41.000Z
updatedAt: 2023-09-21T18:04:39.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filter-productclusterids-is-overwritten-by-productclusternames-while-applying-additional-filters
locale: pt
kiStatus: Backlog
internalReference: 899508
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma pesquisa é iniciada a partir do filtro "productClusterIds", a aplicação de qualquer filtro adicional a converterá para "productClusterNames", perdendo a característica de apresentar os itens com a ordenação definida manualmente na coleção de produtos.

## Simulação

O cenário pode ser observado em qualquer página, como `"store.com/111?map=productClusterIds"`, e ao aplicar qualquer filtro adicional, como uma categoria, especificação, etc.

O usuário será direcionado para `"store.com/clothing/special-sale?initialMap=productClusterIds&initialQuery=111&map=category,productclusternames"`.

## Workaround

Não há solução alternativa para o problema específico se você precisar da classificação especial, mas certifique-se de usar “productClusterIds” apenas nos cenários necessários. Caso contrário, use o filtro como “productClusterNames”.