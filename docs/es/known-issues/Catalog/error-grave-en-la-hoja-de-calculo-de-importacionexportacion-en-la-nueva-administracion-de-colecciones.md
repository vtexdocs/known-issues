---
title: 'Error grave en la hoja de cálculo de importación/exportación en la nueva administración de colecciones'
slug: error-grave-en-la-hoja-de-calculo-de-importacionexportacion-en-la-nueva-administracion-de-colecciones
status: PUBLISHED
createdAt: 2021-04-29T14:00:56.000Z
updatedAt: 2023-12-12T21:08:07.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: large-importexport-spreadsheet-error-on-new-collections-admin
locale: es
kiStatus: Fixed
internalReference: 362017
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, no es posible cargar artículos en el nuevo módulo de colecciones utilizando una lista con más de 1000 SKU, ya que el proceso agota el tiempo de espera. Se devuelve un mensaje de error genérico:
"`Tu archivo no se ha importado. Intenta importarlo de nuevo.`"

## Simulación

1. Acceda al nuevo módulo de colecciones
2. Seleccione la pestaña «Importar»
3. Utilice una hoja que contenga más de 1000 SKU (por ejemplo, 300 productos con 50 SKU cada uno)
4. La importación generará un tiempo de espera agotado.

## Workaround

Sube los datos gradualmente utilizando hojas más pequeñas, las colecciones del CMS heredado y/o la API de inserción de SKU en subcolecciones https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit