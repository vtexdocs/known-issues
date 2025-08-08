---
title: 'Catálogo Filtro para Vendedor = 1 trae Resultados vacíos'
id: 3BG6c5IPa7W950vCpTFY6H
status: PUBLISHED
createdAt: 2023-05-03T14:37:41.635Z
updatedAt: 2023-05-08T18:31:01.764Z
publishedAt: 2023-05-08T18:31:01.764Z
firstPublishedAt: 2023-05-03T14:37:42.157Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filter-for-seller-1-brings-empty-results
locale: es
kiStatus: Backlog
internalReference: 801538
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, al filtrar exclusivamente por el vendedor principal en los menús del Catálogo, no se muestra ningún resultado. Esto sucede porque este filtro está buscando incorrectamente un vendedor específico cuando, en cambio, el vendedor = 1 (el vendedor principal de la cuenta) es el propio mercado.



##

## Simulación



1. Vaya a cualquier menú del catálogo, como Importar/Exportar
2. 2. Filtre por el vendedor principal de la cuenta:

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Catalog/catalogo-filtro-para-vendedor-1-trae-resultados-vacios_1.png)
3. No se mostrarán resultados



## Workaround


Utilizando una política comercial en la que sólo esté presente el vendedor 1, filtre por esta política comercial dada en su lugar y, en consecuencia, estará filtrando por el vendedor principal.

