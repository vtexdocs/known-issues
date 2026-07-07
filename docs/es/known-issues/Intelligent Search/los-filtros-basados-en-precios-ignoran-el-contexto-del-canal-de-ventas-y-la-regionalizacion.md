---
title: 'Los filtros basados ​​en precios ignoran el contexto del canal de ventas y la regionalización.'
slug: los-filtros-basados-en-precios-ignoran-el-contexto-del-canal-de-ventas-y-la-regionalizacion
status: PUBLISHED
createdAt: 2026-07-07T20:38:08.000Z
updatedAt: 2026-07-07T20:38:08.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: pricebased-filters-ignore-sales-channel-and-regionalization-context
locale: es
kiStatus: Backlog
internalReference: 1431340
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al usar la Búsqueda Inteligente junto con la variación del canal de venta o la regionalización (`regionId`), los filtros por rango de precios no funcionan correctamente.

La regionalización y las políticas comerciales afectan la clasificación y el filtrado de disponibilidad/stock, pero la clasificación y el filtrado por precio siempre utilizan el precio base indexado. Esto también se aplica al filtro "promotion=yes".

Dado que los precios reales se resuelven en el momento de la visualización, tanto el **filtro de faceta de precio** como el **filtro de rango de precios** pueden devolver productos cuyo precio efectivo regional o de política comercial se encuentra fuera del rango solicitado, y viceversa.

## Simulación

En una tienda con precios diferentes por región o canal de venta, acceda a cualquier PLP mientras aplica un filtro de rango de precios o la faceta de promoción: observará que los resultados incluyen productos cuyo precio contextual real no coincide con el filtro seleccionado, ya que el índice solo contiene el precio base, independientemente de `regionId` o del canal de venta.

## Workaround

N/A