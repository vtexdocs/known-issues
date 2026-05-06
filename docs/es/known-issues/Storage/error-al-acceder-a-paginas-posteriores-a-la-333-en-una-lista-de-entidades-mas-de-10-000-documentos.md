---
title: 'Error al acceder a páginas posteriores a la 333 en una lista de entidades (más de 10 000 documentos)'
slug: error-al-acceder-a-paginas-posteriores-a-la-333-en-una-lista-de-entidades-mas-de-10-000-documentos
status: PUBLISHED
createdAt: 2021-02-12T16:30:34.000Z
updatedAt: 2023-02-27T19:29:35.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-reaching-pages-over-333-on-a-entity-list-more-than-10000-documents
locale: es
kiStatus: Backlog
internalReference: 334407
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la tienda tiene más de 10 000 documentos (es decir, más de 333 páginas), al intentar acceder a las últimas páginas en el CRM aparece un mensaje de error:

 VTEX - Datos maestros: Se ha producido un error inesperado en el sistema. Inténtalo de nuevo; si el error persiste, ponte en contacto con VTEX.

 ![](https://vtexhelp.zendesk.com/attachments/token/5wXQPX2etczf6IiyzGFLAtIvp/?name=inline1653316518.png)

## Simulación

1. Acceda a un CRM en una entidad con una gran cantidad de datos (más de 10 000 documentos);
2. El error se producirá al intentar acceder a una página que recuperaría el documento número 10 000 o superior. Normalmente, alrededor de la página 334 (10 000 / 30 = 333,33 ~~ 334)

## Workaround

provisional**
Si la tienda desea recuperar los datos más recientes, puede utilizar la API de documentos Scroll:

- MasterData v1: https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/scroll
- MasterData v2: https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/scroll