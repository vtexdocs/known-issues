---
title: 'Los diacríticos se eliminan en CatalogAPI'
id: 2iVyAQ8TSaT3jFYzcQGjSs
status: PUBLISHED
createdAt: 2022-07-22T18:18:04.236Z
updatedAt: 2024-02-16T20:28:19.994Z
publishedAt: 2024-02-16T20:28:19.994Z
firstPublishedAt: 2022-07-22T18:18:05.160Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: diacritics-are-removed-on-catalogapi
locale: es
kiStatus: No Fix
internalReference: 623345
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente, algunos caracteres diacríticos, como ă, no se conservan cuando se guardan utilizando la catalogAPI: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product





## Simulación


1 - utilizar un producto puesto API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product con un diacrítico
Ej:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/los-diacriticos-se-eliminan-en-catalogapi_1.png)

2 - A continuación, comprobar estos datos a través de la API o el catálogo de administración, tendrá estos caracteres eliminados: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/los-diacriticos-se-eliminan-en-catalogapi_2.png)





## Workaround


Actualizar manualmente estos productos a través de la interfaz de administración

