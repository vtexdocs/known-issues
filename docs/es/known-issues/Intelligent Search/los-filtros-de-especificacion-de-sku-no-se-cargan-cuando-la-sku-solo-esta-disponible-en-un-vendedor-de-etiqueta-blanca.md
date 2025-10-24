---
title: 'Los filtros de especificación de SKU no se cargan cuando la SKU sólo está disponible en un vendedor de etiqueta blanca'
slug: los-filtros-de-especificacion-de-sku-no-se-cargan-cuando-la-sku-solo-esta-disponible-en-un-vendedor-de-etiqueta-blanca
status: PUBLISHED
createdAt: 2025-08-12T18:59:30.771Z
updatedAt: 2025-08-12T18:59:30.771Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sku-specification-filters-arent-loaded-when-the-sku-is-only-available-in-a-whitelabel-seller
locale: es
kiStatus: Fixed
internalReference: 431888
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Desde una reciente actualización en el comportamiento de Búsqueda, los filtros de especificación de SKUs no disponibles no se muestran en las páginas de resultados de búsqueda.

Si la arquitectura de una tienda depende únicamente de los vendedores de marca blanca para la disponibilidad de los productos, los filtros de especificación tampoco se muestran, ya que la disponibilidad de los vendedores no se tiene en cuenta en los filtros de búsqueda.

## Simulación


Tener cero disponibilidad de productos para un resultado de búsqueda específico (término de búsqueda, departamento, marca, etc.) en la tienda principal. Aunque se muestre la disponibilidad de un vendedor de marca blanca en las estanterías, los filtros relacionados con las especificaciones SKU no se mostrarán.

## Workaround


Disponga de los productos en la tienda principal. De esta forma, todos los filtros de especificaciones SKU estarán disponibles.

Si esto no se ajusta al funcionamiento del negocio, es posible personalizar el frontal para no permitir a los clientes comprar artículos del almacén principal.


