---
title: 'La ordenación de la búsqueda inteligente por precio ignora el contexto del canal de ventas y la regionalización.'
slug: la-ordenacion-de-la-busqueda-inteligente-por-precio-ignora-el-contexto-del-canal-de-ventas-y-la-regionalizacion
status: PUBLISHED
createdAt: 2022-05-03T06:21:53.000Z
updatedAt: 2026-07-07T20:41:30.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sorting-intelligent-search-by-price-ignores-sales-channel-and-regionalization-context
locale: es
kiStatus: Fixed
internalReference: 571101
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al usar la Búsqueda Inteligente junto con la regionalización (`regionId`) o la variación del canal de venta, la ordenación de artículos por precio no funciona correctamente.

La regionalización y los canales de venta solo permiten ordenar por disponibilidad/stock, sin tener en cuenta las variaciones de precio, que siempre están vinculadas al mismo precio indexado. Los precios actualizados se detectan al renderizar el contenido (por lo que siempre son correctos), pero no afectan a la ordenación (realizada previamente), lo que incluye las promociones y los filtros de rango de precios.

Esto también supone un problema para los artículos disponibles únicamente en un contexto regionalizado. Si el "vendedor 1" y sus opciones de marca blanca no tienen stock, el artículo no tendrá precio (será cero), lo que provoca que se descarte de los filtros o que aparezca al final de los resultados.

## Simulación

En una tienda con precios diferentes para cada vendedor de marca blanca mediante regionalización o canal de venta, o con artículos no disponibles para el "vendedor 1", acceda a cualquier PLP con un filtro/regionalización según la dimensión aplicable y ordene por precio. Observará que los precios de los productos no se ordenan como se espera.

## Workaround

No aplica