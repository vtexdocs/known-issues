---
title: 'El mismo ID de opción en diferentes facetas afecta a la selección de facetas en una versión móvil.'
slug: el-mismo-id-de-opcion-en-diferentes-facetas-afecta-a-la-seleccion-de-facetas-en-una-version-movil
status: PUBLISHED
createdAt: 2025-11-20T19:16:05.788Z
updatedAt: 2025-11-20T19:16:05.788Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: same-option-id-accross-different-facets-affecting-the-facet-selection-in-a-mobile-version
locale: es
kiStatus: Backlog
internalReference: 1328394
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En la versión móvil, los ID de las casillas de verificación de las opciones de las facetas de un PLP no son únicos en las distintas facetas cuando las opciones comparten el mismo valor (por ejemplo, "1"). Esto provoca que la selección se aplique a la faceta incorrecta.

Sólo afecta a la versión **móvil** de la página de listado de productos. La versión de escritorio utiliza identificadores únicos y no presenta este problema.


#### Simulación



1. En la versión móvil del PLP, seleccione un valor que sea el mismo en otra faceta y actualice la página.
2. Borre los filtros y actualice de nuevo.
3. 3. Seleccione el mismo valor en otra faceta; observe que la selección se aplica a la faceta anterior.

## Workaround


N/A



