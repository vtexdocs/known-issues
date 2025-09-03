---
title: Los productos no se actualizan tras la creación/actualización de las políticas comerciales
slug: los-productos-no-se-actualizan-tras-la-creacionactualizacion-de-las-politicas-comerciales
status: PUBLISHED
createdAt: 2025-09-03T20:12:30.996Z
updatedAt: 2025-09-03T20:12:30.996Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-are-not-updated-after-trade-policies-are-createdupdated
locale: es
kiStatus: Backlog
internalReference: 1286569
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Después de crear o actualizar una política comercial, los productos no serán actualizados internamente en el Catálogo ni reindexados a la Búsqueda. Sólo se modificarán tras ser actualizados directamente o por otros medios.

Esto incluye la activación o desactivación de una política comercial o el cambio de la colección asignada.


#### Simulación



- Tener un producto configurado para todas las políticas comerciales.
- Activar o desactivar alguna política comercial.
- Comprobar la información SKU a través de la API (Get SKU).
- La política comercial cambiada no será correcta en la propiedad "SalesChannels" de la API.

## Workaround


Actualmente, no hay solución para este problema. Para escenarios amplios, se requerirá un ticket de soporte.



