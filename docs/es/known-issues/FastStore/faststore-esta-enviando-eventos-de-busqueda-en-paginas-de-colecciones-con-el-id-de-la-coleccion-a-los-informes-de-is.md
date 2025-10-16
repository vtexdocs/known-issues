---
title: Faststore está enviando eventos de búsqueda en páginas de colecciones con el ID de la colección a los informes de IS
slug: faststore-esta-enviando-eventos-de-busqueda-en-paginas-de-colecciones-con-el-id-de-la-coleccion-a-los-informes-de-is
status: PUBLISHED
createdAt: 2025-10-16T20:28:37.221Z
updatedAt: 2025-10-16T20:28:37.221Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-is-sending-search-events-on-collection-pages-with-the-collection-id-to-is-reports
locale: es
kiStatus: Fixed
internalReference: 1159040
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando se realiza un evento de búsqueda en una página de colección en las tiendas Faststore, la respuesta del módulo IS analytics también contiene el ID de la colección. Esto también puede tener efectos negativos en el autocompletado.


#### Simulación



- Intente entrar en una página de recogida
- Espere a que el módulo de análisis de SI se actualice con esa información
- El ID de la colección aparecerá donde sólo debería estar el nombre de la colección

## Workaround


N/A



