---
title: 'Inconsistência na pesquisa por facetas que contêm resultados com valores de especificação elevados'
slug: inconsistencia-na-pesquisa-por-facetas-que-contem-resultados-com-valores-de-especificacao-elevados
status: PUBLISHED
createdAt: 2023-05-11T17:41:54.000Z
updatedAt: 2023-05-11T17:41:54.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inconsistency-when-searching-for-facets-that-contains-results-with-large-specification-values
locale: pt
kiStatus: Backlog
internalReference: 824198
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API de facetas possui um campo `specificationFilters`, e esse campo pode interromper o retorno da API quando os valores registrados em qualquer especificação dessa categoria forem muito grandes

## Simulação

- Em uma categoria, crie um campo de texto grande
- Adicione um valor grande ao produto
- Salve o produto e aguarde até que ele seja indexado
- Chame a API de Facets e observe que ela não retorna nenhum resultado

## Workaround

Ajuste o tamanho dos valores