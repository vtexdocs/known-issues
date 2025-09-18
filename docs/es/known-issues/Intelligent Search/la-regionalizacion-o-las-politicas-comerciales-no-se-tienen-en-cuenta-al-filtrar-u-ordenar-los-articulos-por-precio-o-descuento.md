---
title: La regionalización o las políticas comerciales no se tienen en cuenta al filtrar u ordenar los artículos por precio o descuento.
slug: la-regionalizacion-o-las-politicas-comerciales-no-se-tienen-en-cuenta-al-filtrar-u-ordenar-los-articulos-por-precio-o-descuento
status: PUBLISHED
createdAt: 2025-09-18T17:34:09.662Z
updatedAt: 2025-09-18T17:34:09.662Z
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


Cuando se utiliza la búsqueda inteligente (a través de PLP o incluso de su API) junto con la regionalización (regionId) o la variación de la política comercial, la clasificación y el filtrado de artículos por precio no funcionan correctamente.

Para este módulo, la regionalización y las políticas comerciales pueden filtrar/clasificar sólo por la información de disponibilidad/existencias, sin tener en cuenta las variaciones de precio, que siempre están vinculadas al mismo precio indexado. Los precios actualizados se descubren al renderizar el contenido (por lo que siempre son correctos) pero no afectan a los filtros y/o ordenaciones (realizados en un momento anterior), lo que se extiende a las promociones y a los filtros de rango de precios.

Esto también es un problema para los artículos disponibles sólo en un contexto regionalizado. Si el "vendedor 1" y sus opciones globales de WL están agotados, el artículo no tendrá precio (será cero), lo que descarta el artículo de los filtros o puede ponerlos al final de los resultados.


#### Simulación


En una tienda con diferentes precios por vendedores WL (y usando regionalización) o política comercial, o con artículos no disponibles para el "vendedor 1", acceda a cualquier PLP con un filtrado/regionalizado por la dimensión aplicable mientras ordena por precio - notará que los precios de los productos no se ordenarán como se espera.

## Workaround


Los filtros de regionalización y política comercial no están preparados para trabajar con variaciones de precio, por lo que no existen soluciones.

Para el escenario en el que el artículo no está disponible para el "vendedor 1", es importante revisar si los vendedores integrales están configurados correctamente, lo que puede evitar el escenario - sólo los artículos ampliamente no disponibles se verían afectados.


