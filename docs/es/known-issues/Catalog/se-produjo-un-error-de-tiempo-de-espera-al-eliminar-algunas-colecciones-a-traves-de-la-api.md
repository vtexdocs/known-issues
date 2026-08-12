---
title: 'Se produjo un error de tiempo de espera al eliminar algunas colecciones a través de la API.'
slug: se-produjo-un-error-de-tiempo-de-espera-al-eliminar-algunas-colecciones-a-traves-de-la-api
status: PUBLISHED
createdAt: 2026-08-13T00:42:15.000Z
updatedAt: 2026-08-13T00:50:49.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: timeout-returned-when-deleting-some-collections-through-api
locale: es
kiStatus: Backlog
internalReference: 1447421
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al eliminar algunas colecciones mediante la API de eliminación de colecciones, esta puede devolver un código de respuesta 500 y un tiempo de ejecución superior a 15 segundos. Si bien la colección que se intenta eliminar probablemente no contenga muchos productos, las subcolecciones asociadas sí tendrán muchos registros, uno por cada SKU. Las subcolecciones con un alto número de SKU pueden provocar que el proceso de eliminación tarde más de lo esperado y falle internamente debido a un tiempo de espera agotado.

## Simulación

- Crear y añadir productos a una colección;

- Añadir muchos productos con más de un SKU (por ejemplo, más de 12 000 SKU);

- Intentar eliminar la colección mediante la API de eliminación de colecciones;

- La API devolverá un código de respuesta 500 y un tiempo de ejecución de entre 15 y 20 segundos hasta que falle el intento.

## Workaround

Antes de usar el punto final Eliminar colección, elimine todas las subcolecciones asociadas al ID de la colección que desea eliminar. Al eliminar todas las subcolecciones del contexto de la colección, el proceso de eliminación no tardará mucho más y no se producirá un error de tiempo de espera.