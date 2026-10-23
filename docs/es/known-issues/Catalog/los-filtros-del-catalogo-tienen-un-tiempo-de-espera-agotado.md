---
title: 'Los filtros del catálogo tienen un tiempo de espera agotado.'
slug: los-filtros-del-catalogo-tienen-un-tiempo-de-espera-agotado
status: PUBLISHED
createdAt: 2023-10-19T20:11:21.000Z
updatedAt: 2026-10-23T23:32:36.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filters-timeout
locale: es
kiStatus: Backlog
internalReference: 922350
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Para tiendas con un gran volumen de SKU (5 millones o más), al filtrar mediante los filtros de la interfaz de usuario del catálogo, ya sea en el menú principal o en la sección de informes, si la consulta de filtro devuelve un resultado muy grande, la interfaz de usuario agota el tiempo de espera (error 504).

## Simulación

No existe una forma fiable de simularlo de manera consistente; solo se produce este error con consultas grandes específicas para algunas cuentas.

## Workaround

Filtre por grupos más pequeños de productos al usar los filtros de la interfaz de usuario del catálogo.