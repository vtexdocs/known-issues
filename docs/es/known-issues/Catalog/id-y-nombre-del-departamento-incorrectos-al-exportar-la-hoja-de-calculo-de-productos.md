---
title: 'ID y nombre del departamento incorrectos al exportar la hoja de cálculo de productos'
slug: id-y-nombre-del-departamento-incorrectos-al-exportar-la-hoja-de-calculo-de-productos
status: PUBLISHED
createdAt: 2023-04-03T20:37:08.000Z
updatedAt: 2026-09-22T22:47:02.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrect-id-and-department-name-when-exporting-products-spreadsheet
locale: es
kiStatus: Fixed
internalReference: 783363
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al exportar una hoja de cálculo de productos, el nombre y el ID del departamento se exportan incorrectamente, incluso si pertenecen a un departamento diferente en el catálogo de productos o en las consultas a través de las API.

## Simulación

1. Acceda al catálogo a través del panel de administración;

2. Vaya a Importar y exportar;

3. Exporte la hoja de cálculo de productos y SKU.

## Workaround

No existe una solución alternativa. Sin embargo, esta información puede descartarse. Al importar una hoja de cálculo para actualizaciones de productos y categorías, esta columna no se tiene en cuenta. Solo se considera la columna ID de categoría.