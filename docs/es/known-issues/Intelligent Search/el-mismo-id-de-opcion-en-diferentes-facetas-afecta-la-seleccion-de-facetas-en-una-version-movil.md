---
title: 'El mismo ID de opción en diferentes facetas afecta la selección de facetas en una versión móvil.'
slug: el-mismo-id-de-opcion-en-diferentes-facetas-afecta-la-seleccion-de-facetas-en-una-version-movil
status: PUBLISHED
createdAt: 2025-11-20T22:10:15.000Z
updatedAt: 2026-10-06T17:20:29.000Z
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

En la versión móvil, los identificadores de las casillas de verificación para las opciones de facetas en una página de listado de productos (PLP) no son únicos entre las distintas facetas cuando las opciones comparten el mismo valor (p. ej., «1»). Esto provoca que la selección se aplique a la faceta incorrecta.

Afecta únicamente a la versión **móvil** de la página de listado de productos. La versión de escritorio utiliza identificadores únicos y no presenta este problema.

## Simulación

1. En la versión móvil de la PLP, seleccione un valor idéntico en otra faceta y actualice la página.

2. Borre los filtros y vuelva a actualizar.

3. Seleccione el mismo valor en otra faceta; observe que la selección se aplica a la faceta anterior.

## Workaround

N/A