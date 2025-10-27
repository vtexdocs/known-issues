---
title: 'El campo lastModifiedBy siempre devuelve "null" en la API de búsqueda.'
slug: el-campo-lastmodifiedby-siempre-devuelve-null-en-la-api-de-busqueda
status: PUBLISHED
createdAt: 2025-10-16T20:47:55.722Z
updatedAt: 2025-10-16T20:47:55.722Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: lastmodifiedby-field-always-returns-null-in-search-api
locale: es
kiStatus: Backlog
internalReference: 1211438
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La propiedad lastModifiedBy en las APIs ssearch actualmente no devuelve nada, sólo un campo "null" cuando se utilizan las APIs de búsqueda, como https://my_account_name.vtexcommercestable.com.br/api/catalog_system/pvt/collection/search


#### Simulación


1 - al editar una colección por cualquier medio, intente realizar cualquier cambio

2 - Utilizando la URL de la API de búsqueda antes mencionada, compruebe el campo lastModifiedBy en la respuesta

3 - Este campo siempre devolverá null.

## Workaround


-



