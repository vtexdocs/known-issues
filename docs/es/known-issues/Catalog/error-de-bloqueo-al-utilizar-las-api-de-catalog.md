---
title: 'Error de bloqueo al utilizar las API de Catalog'
slug: error-de-bloqueo-al-utilizar-las-api-de-catalog
status: PUBLISHED
createdAt: 2023-07-14T18:28:58.000Z
updatedAt: 2023-07-19T14:16:24.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: deadlocked-error-when-using-catalog-apis
locale: es
kiStatus: Backlog
internalReference: 862626
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El uso constante de algunas API del catálogo, como «Añadir SKU a una subcolección», o intentar vincular productos a través del módulo de sugerencias puede provocar errores de interbloqueo para el comerciante.

Los errores de interbloqueo pueden producirse cuando hay concurrencia al guardar los datos en la base de datos. Por lo tanto, al realizar demasiadas solicitudes a la API en un breve periodo de tiempo, estos errores se hacen más evidentes.

## Simulación

1. Utilice, por ejemplo, la API «Añadir SKU a subcolección» (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit) para añadir muchos SKU a una colección en un breve periodo de tiempo;
2. Compruebe si se producen errores, como por ejemplo un interbloqueo.

## Workaround

Intente realizar menos solicitudes por minuto.