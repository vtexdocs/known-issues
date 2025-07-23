---
title: 'Los filtros de especificación de SKU no se cargan cuando la SKU sólo está disponible en un vendedor de etiqueta blanca'
id: 5SpoacD49oxDDGJjepUEoL
status: PUBLISHED
createdAt: 2022-03-21T17:41:20.048Z
updatedAt: 2024-02-16T20:29:10.321Z
publishedAt: 2024-02-16T20:29:10.321Z
firstPublishedAt: 2022-03-21T17:41:20.389Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sku-specification-filters-arent-loaded-when-the-sku-is-only-available-in-a-whitelabel-seller
locale: es
kiStatus: No Fix
internalReference: 431888
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Desde una reciente actualización en el comportamiento de la Búsqueda, los filtros de especificación de SKUs no disponibles no se muestran en las páginas de resultados de la búsqueda.

Si la arquitectura de una tienda depende únicamente de los vendedores de marca blanca para la disponibilidad de los productos, los filtros de especificación tampoco se muestran, porque la disponibilidad de los vendedores no se está considerando en los filtros de búsqueda.



## Simulación


Tener cero disponibilidad de productos para un resultado de búsqueda específico (término de búsqueda, departamento, marca, etc.) en la tienda principal. Incluso si la disponibilidad de un vendedor de marca blanca se está mostrando en los estantes, los filtros relacionados con las especificaciones de SKU no aparecerán.



## Workaround


Tener disponibilidad de productos en la tienda principal. De esta manera, todos los filtros de especificación de SKU estarán disponibles.

Si esto no se ajusta al funcionamiento del negocio, es posible personalizar el frente para no permitir a los clientes comprar artículos del almacén principal.

