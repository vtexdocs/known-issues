---
title: 'O slug e o link retornados pela API de facetas do catálogo têm formatos diferentes.'
slug: o-slug-e-o-link-retornados-pela-api-de-facetas-do-catalogo-tem-formatos-diferentes
status: PUBLISHED
createdAt: 2024-03-12T15:42:52.000Z
updatedAt: 2024-03-12T15:42:52.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: slug-and-link-returned-in-the-catalog-facets-api-have-different-formats
locale: pt
kiStatus: Backlog
internalReference: 998397
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API de facetas do catálogo descrita aqui: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/facets/search/-term-
Os objetos de resposta possuem os campos "Slug", "Link" e "LinkEncoded". No entanto, embora esses campos devam ter o mesmo formato, eles divergem no objeto PriceRanges quando o valor contém decimais.

Exemplo:
Slug: "de-100-a-199.99"
Link: "/category-test/de-100-a-199-99?map=c,priceFrom"

O Slug contém o caractere "." enquanto o Link contém o caractere "-".

## Simulação

1. Tenha uma categoria com uma faixa de preço com valores decimais.
2. Solicite a API de facetas
3. Verifique se os caracteres são diferentes.

## Workaround

N/A