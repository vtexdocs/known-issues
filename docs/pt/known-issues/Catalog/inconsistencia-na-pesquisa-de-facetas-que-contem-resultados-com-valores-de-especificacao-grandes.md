---
title: 'Inconsistência na pesquisa de facetas que contêm resultados com valores de especificação grandes'
id: 4taz7hmgvjn3hqWyyjxiKz
status: PUBLISHED
createdAt: 2023-05-11T17:42:06.008Z
updatedAt: 2023-05-11T17:42:06.506Z
publishedAt: 2023-05-11T17:42:06.506Z
firstPublishedAt: 2023-05-11T17:42:06.506Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inconsistency-when-searching-for-facets-that-contains-results-with-large-specification-values
locale: pt
kiStatus: Backlog
internalReference: 824198
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A API de facetas tem um campo specificationFilters e esse campo pode interromper o retorno da API quando os valores registrados em qualquer especificação dessa categoria forem muito grandes

## Simulação



- Em uma categoria, crie um campo Large Text (Texto grande)
- Adicione um valor grande ao produto
- Salve o produto e espere que ele seja indexado
- Chame a API Facets e veja que ela não retorna nenhum resultad

## Workaround


Ajuste o tamanho dos valores




