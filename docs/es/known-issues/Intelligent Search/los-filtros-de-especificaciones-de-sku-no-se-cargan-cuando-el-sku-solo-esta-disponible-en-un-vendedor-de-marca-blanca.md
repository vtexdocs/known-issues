---
title: 'Los filtros de especificaciones de SKU no se cargan cuando el SKU solo está disponible en un vendedor de marca blanca'
slug: los-filtros-de-especificaciones-de-sku-no-se-cargan-cuando-el-sku-solo-esta-disponible-en-un-vendedor-de-marca-blanca
status: PUBLISHED
createdAt: 2021-09-16T20:48:37.000Z
updatedAt: 2025-08-08T18:38:45.000Z
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

Desde una actualización reciente del comportamiento de la búsqueda, los filtros de especificaciones de los SKU no disponibles ya no se muestran en las páginas de resultados de búsqueda.

Si la arquitectura de una tienda depende exclusivamente de vendedores de marca blanca para la disponibilidad de productos, tampoco se muestran los filtros de especificaciones, ya que la disponibilidad de los vendedores no se tiene en cuenta en los filtros de búsqueda.

## Simulación

Establece una disponibilidad de producto nula para un resultado de búsqueda específico (término de búsqueda, departamento, marca, etc.) en la tienda principal. Aunque se muestre la disponibilidad de un vendedor de marca blanca en las estanterías, los filtros relacionados con las especificaciones de SKU no aparecerán.

## Workaround

Asegúrate de que haya disponibilidad de productos en la tienda principal. De esta forma, todos los filtros de especificaciones de SKU estarán disponibles.

Si esto no se ajusta al funcionamiento del negocio, es posible personalizar la interfaz para no permitir que los clientes compren artículos del almacén principal.