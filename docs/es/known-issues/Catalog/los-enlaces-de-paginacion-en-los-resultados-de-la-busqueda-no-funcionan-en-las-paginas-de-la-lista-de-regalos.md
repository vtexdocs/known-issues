---
title: 'Los enlaces de paginación en los resultados de la búsqueda no funcionan en las páginas de la lista de regalos'
id: 1w6h5MwZthKMM8rvqXZtQi
status: PUBLISHED
createdAt: 2022-11-02T14:01:35.650Z
updatedAt: 2024-02-16T20:26:50.585Z
publishedAt: 2024-02-16T20:26:50.585Z
firstPublishedAt: 2022-11-02T14:01:36.502Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: pagination-links-on-search-results-not-working-on-giftlist-pages
locale: es
kiStatus: No Fix
internalReference: 481330
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los enlaces de paginación en `SearchResult` no funcionan en `Giftlist`.



## Simulación


- Acceda a una lista de regalos con suficientes productos para tener paginación, utilice una plantilla por defecto sin ninguna personalización;
- Compruebe los enlaces de paginación:

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Catalog/los-enlaces-de-paginacion-en-los-resultados-de-la-busqueda-no-funcionan-en-las-paginas-de-la-lista-de-regalos_1.png)

- Estos enlaces no funcionan.



## Workaround


- Utilice una personalización JS para cargar la solicitud correctamente, por ejemplo, la solicitud debe ser algo así (se puede comprobar en Chrome Dev Tools): `buscapagina?PS=16&sl=7ec035e2-ab04-40c0-9cf0-cc669725b10a&cc=16&sm=0&PageNumber=2`

