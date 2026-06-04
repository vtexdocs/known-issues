---
title: 'B2B Organizations no limita el número de colecciones que se pueden configurar para una organización, lo que puede provocar que el filtro de búsqueda no funcione'
slug: b2b-organizations-no-limita-el-numero-de-colecciones-que-se-pueden-configurar-para-una-organizacion-lo-que-puede-provocar-que-el-filtro-de-busqueda-no-funcione
status: PUBLISHED
createdAt: 2026-06-03T20:26:23.000Z
updatedAt: 2026-06-04T20:18:43.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-does-not-limit-the-number-of-collections-set-for-an-organization-which-may-lead-to-search-filter-not-working
locale: es
kiStatus: Backlog
internalReference: 1416519
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas que utilizan B2B Suite, si se añaden demasiadas colecciones a la configuración de la organización, es posible que el filtrado de la página de búsqueda no funcione, lo que provoca que se muestren todos los productos, incluidos aquellos que no están asignados a ninguna colección de la organización del usuario.

Esto ocurre porque se añaden demasiados `productClusterIds` al segmento, lo que hace que la cookie `vtex_segment` supere los límites de tamaño y se eliminen las facetas; cualquier flujo que dependa de la cookie del segmento puede verse afectado, no solo la búsqueda.

La aplicación B2B Organizations debería limitar el número de colecciones añadidas a una organización al crearla o actualizarla para evitar esta situación, algo que actualmente no hace.

## Simulación

- Requisitos previos:
  - B2B Suite instalada y configurada con muchos clústeres de productos asignados a la organización del comprador.
  - Espacio de trabajo limpio con el tema nativo de B2B, sin aplicaciones personalizadas.

- Pasos:
  - Inicie sesión como un usuario que tenga acceso a la organización configurada con muchas colecciones asignadas.
  - Cargue la tienda y realice una búsqueda de texto completo que debería devolver solo productos de las colecciones asignadas.
  - Comprueba que también se devuelven productos de otras colecciones.
  - Inspecciona:
    - `GET /api/sessions?items=*` y confirma que `public.facets` y `search.facets` contienen los `productClusterIds` de la colección.
    - `GET /api/segments` y observa que el segmento se devuelve sin facetas, lo que indica que la cookie no las transportó debido a límites de tamaño. En la consola, también puedes ver un error de límite de tamaño de Set-Cookie.
    - Se envía la solicitud `productSearch` con un segmento sin facetas, y la búsqueda devuelve productos que no se encuentran en las colecciones permitidas de la organización.

## Workaround

Reduzca el número de colecciones asignadas a la organización (consolide o agrupe colecciones).