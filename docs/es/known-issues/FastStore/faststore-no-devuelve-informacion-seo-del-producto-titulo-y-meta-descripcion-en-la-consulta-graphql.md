---
title: 'FastStore no devuelve información SEO del producto (título y meta descripción) en la consulta GraphQL.'
slug: faststore-no-devuelve-informacion-seo-del-producto-titulo-y-meta-descripcion-en-la-consulta-graphql
status: PUBLISHED
createdAt: 2023-11-01T20:08:19.000Z
updatedAt: 2026-10-02T15:53:47.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-does-not-return-product-seo-information-title-and-meta-description-on-graphql-query
locale: es
kiStatus: Fixed
internalReference: 929029
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al ejecutar la consulta de producto en la API GraphQL de FastStore, el campo `seo` debería devolver la información SEO registrada para el producto en el Catálogo ("Título SEO" y "Descripción de la metaetiqueta"). En su lugar, devuelve el nombre y la descripción del producto. Como resultado, las etiquetas `<title>` y `<meta name="description">` de la página de detalles del producto (PDP) también muestran el nombre y la descripción del producto en lugar de los valores SEO.

Este comportamiento afecta a todas las versiones de FastStore anteriores a la 4.4.0. A partir de la versión 4.4.0, la información SEO se devuelve correctamente, siempre que la tienda se haya creado e implementado después del 14 de agosto de 2026.

## Simulación

- En el panel de administración, complete los campos "Título SEO" y "Descripción de la metaetiqueta" del producto con valores diferentes al nombre y la descripción del producto;

- Acceda al entorno de pruebas GraphQL de la tienda y ejecute la consulta de producto con los campos SEO, o abra la PDP y vea su código fuente;
- Compara el título y la descripción devueltos (o las etiquetas `<title>` y `<meta name="description">`) con los campos SEO registrados en el catálogo. En las versiones afectadas, los valores devueltos son el nombre y la descripción del producto, no los campos SEO.

Simulación con v1 (sin corrección):

![](https://vtexhelp.zendesk.com/attachments/token/dEgo1w6gMc0YT4mOOErfo9WiU/?name=image.png)

![](https://vtexhelp.zendesk.com/attachments/token/r85OfGmL9GxB5vJ42LRdWhGao/?name=image.png)

Simulación con v4 (tras actualizar la versión):

![](https://vtexhelp.zendesk.com/attachments/token/yVJbuEPpNRV7g1aGf6ihRxYUl/?name=image.png)

Ver código fuente:

![](https://vtexhelp.zendesk.com/attachments/token/efGeO2PZDpwSEcXQb2Ul2mjBo/?name=image.png)

## Workaround

Actualice la tienda a FastStore versión 4.4.0 o posterior y ejecute una nueva compilación/despliegue (esto debe hacerse después del 14 de agosto de 2026). Con los campos SEO correctamente completados en el Catálogo, la información se devolverá como se espera.

Para las tiendas que aún no pueden actualizarse, los demás campos StoreSEO se pueden recuperar extendiendo el esquema GraphQL, como se describe en la documentación: https://v1.faststore.dev/reference/api/objects/#storeseo

![](blob:https://vtexhelp.zendesk.com/735d2d86-687f-4418-87ac-e9b179f170f4)
Sin embargo, en ese caso, los campos `title` y `description` seguirán presentando el problema.

Recordatorio: FastStore 1.0 y 2.0 ya no reciben actualizaciones:

![](https://vtexhelp.zendesk.com/attachments/token/rKD45Q5kLSCzy3mIsz5TmAANU/?name=image.png)

Puedes consultar las versiones aquí: https://developers.vtex.com/docs/guides/faststore/getting-started-faststore-versions-and-support-levels