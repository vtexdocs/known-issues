---
title: 'La API de búsqueda no admite caracteres especiales'
slug: la-api-de-busqueda-no-admite-caracteres-especiales
status: PUBLISHED
createdAt: 2023-02-15T12:39:00.000Z
updatedAt: 2023-02-28T18:19:04.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: search-api-does-not-accept-special-characters
locale: es
kiStatus: Backlog
internalReference: 754363
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La API de búsqueda del catálogo, documentada aquí: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search/-search-, no admite términos que contengan caracteres especiales como el apóstrofo ' o las comillas ".

El error que se devuelve en consultas como esta es: `¡Solicitud incorrecta! ¡No se permiten scripts!`

## Simulación

1. Intente utilizar la API de búsqueda con un término que contenga ', por ejemplo: GET https://{accountName}.{environment}.com.br/api/catalog_system/pub/products/search?ft=anyterm'
2. Compruebe que aparece el mensaje de error.

## Workaround

No hay solución alternativa.