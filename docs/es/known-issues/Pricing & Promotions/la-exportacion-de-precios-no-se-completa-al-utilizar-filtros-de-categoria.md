---
title: 'La exportación de precios no se completa al utilizar filtros de categoría'
slug: la-exportacion-de-precios-no-se-completa-al-utilizar-filtros-de-categoria
status: PUBLISHED
createdAt: 2023-02-14T12:11:51.000Z
updatedAt: 2023-02-17T12:22:20.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: price-export-incomplete-when-using-category-filters
locale: es
kiStatus: Backlog
internalReference: 753466
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar exportar una hoja de cálculo de precios fijos utilizando los filtros de categoría, algunos SKU no aparecen en la hoja de cálculo a pesar de tener precios fijos. El número habitual de SKU que se devuelven es 250.

## Simulación

1. Selecciona una categoría con más de 250 SKU con precios fijos y utiliza el filtro de la interfaz de usuario de precios;
2. Exporta los precios fijos;
3. Comprueba que algunos SKU no se han exportado, por lo que no aparecen en la hoja de cálculo.

## Workaround

Utiliza filtros diferentes o una **combinación del filtro de categoría con otro filtro**.