---
title: 'Los slugs y los enlaces devueltos por la API de facetas del catálogo tienen formatos diferentes.'
slug: los-slugs-y-los-enlaces-devueltos-por-la-api-de-facetas-del-catalogo-tienen-formatos-diferentes
status: PUBLISHED
createdAt: 2024-03-12T15:42:52.000Z
updatedAt: 2024-03-12T15:42:52.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: slug-and-link-returned-in-the-catalog-facets-api-have-different-formats
locale: es
kiStatus: Backlog
internalReference: 998397
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La API de facetas del catálogo que se describe aquí: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/facets/search/-term-
Los objetos de respuesta tienen los campos «Slug», «Link» y «LinkEncoded». Sin embargo, aunque estos campos deberían tener el mismo formato, difieren en el objeto PriceRanges cuando el valor contiene decimales.

Ejemplo:
Slug: «de-100-a-199.99»
Link: «/category-test/de-100-a-199-99?map=c,priceFrom»

El Slug contiene el carácter «.», mientras que el Link contiene el carácter «-».

## Simulación

1. Disponer de una categoría con un rango de precios que contenga valores decimales.
2. Solicitar la API de facetas.
3. Comprobar que los caracteres son diferentes.

## Workaround

N/A