---
title: 'Fallo en la reordenación de colecciones grandes'
slug: fallo-en-la-reordenacion-de-colecciones-grandes
status: PUBLISHED
createdAt: 2025-11-14T19:13:57.152Z
updatedAt: 2025-11-14T19:13:57.152Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: reorder-collection-failing-for-large-collections
locale: es
kiStatus: Backlog
internalReference: 408140
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En la nueva interfaz de administración de colecciones, cuando un usuario intenta reordenar la visualización de pedidos de productos, la mutación GraphQL del catálogo que realiza esta acción suele fallar


#### Simulación


1) Compruebe una colección en el módulo de colecciones con más de 1000 SKUs
2) Intente ejecutar la acción de arrastrar y soltar para reordenar
3) Compruebe que aparece un mensaje de error



#### Workaround


No hay soluciones (sería crear una nueva colección en el orden correcto, pero no es una solución en sí misma, sólo una alternativa).



