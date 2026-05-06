---
title: 'Las políticas de regionalización o comerciales no se tienen en cuenta al filtrar u ordenar los artículos por precio o descuento'
slug: las-politicas-de-regionalizacion-o-comerciales-no-se-tienen-en-cuenta-al-filtrar-u-ordenar-los-articulos-por-precio-o-descuento
status: PUBLISHED
createdAt: 2022-05-03T06:21:53.000Z
updatedAt: 2025-09-18T20:33:25.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: regionalization-or-trade-policies-arent-considered-while-filtering-or-sorting-items-by-price-or-discount
locale: es
kiStatus: Backlog
internalReference: 571101
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar la Búsqueda inteligente (a través de PLP o incluso de su API) junto con la regionalización (regionId) o las variaciones en las políticas comerciales, la ordenación y el filtrado de artículos por precio no funcionan correctamente.

En este módulo, la regionalización y las políticas comerciales solo pueden filtrar/ordenar según la información de disponibilidad/stock, sin tener en cuenta las variaciones de precio, que siempre están vinculadas al mismo precio indexado. Los precios actualizados se detectan durante la visualización del contenido (por lo que siempre son correctos), pero no afectan a los filtros ni a la ordenación (realizados en un momento anterior), lo que se extiende a las promociones y a los filtros de rango de precios.

Esto también supone un problema para los artículos disponibles únicamente en un contexto regionalizado. Si el «vendedor 1» y sus opciones completas de WL están agotadas, el artículo no tendrá precio (será cero), lo que descarta el artículo de los filtros o puede situarlo al final de los resultados.

## Simulación

En una tienda con precios diferentes según los vendedores de la lista de espera (y que utilice regionalización) o la política comercial, o con artículos no disponibles para el «vendedor 1», acceda a cualquier página de producto (PLP) filtrada o regionalizada según la dimensión aplicable mientras ordena por precio: observará que los precios de los productos no se ordenarán como se esperaba.

## Workaround

Los filtros de regionalización y política comercial no están preparados para funcionar con variaciones de precio, por lo que no hay soluciones alternativas.

En el caso de que el artículo no esté disponible para el «vendedor 1», es importante comprobar si los vendedores globales están configurados correctamente, lo que podría evitar esta situación: solo se verían afectados los artículos que no están disponibles en general.