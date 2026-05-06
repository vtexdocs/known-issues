---
title: 'Ofertas que provocan un orden o filtrado incorrecto por precio o descuento'
slug: ofertas-que-provocan-un-orden-o-filtrado-incorrecto-por-precio-o-descuento
status: PUBLISHED
createdAt: 2023-08-25T21:38:33.000Z
updatedAt: 2023-11-10T00:44:05.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: promotions-resulting-in-wrong-sortingfiltering-by-price-or-discount
locale: es
kiStatus: Backlog
internalReference: 888304
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las listas de productos y los resultados de búsqueda pueden aparecer mal ordenados o filtrados al utilizar la ordenación o el filtrado por precio o descuento si hay precios de artículos desactualizados a nivel de índice, incluso aunque la tienda muestre el precio correcto.

La ordenación de los productos se basa siempre en información indexada previamente (datos fríos), mientras que la tienda suele recalcular toda la información en tiempo de ejecución (datos calientes), por lo que los precios mostrados son siempre correctos en relación con el carrito.

Se espera que cada cambio de precio (e incluso otros cambios) ponga en cola los artículos para ser reindexados, de modo que el índice esté actualizado con las nuevas condiciones. El problema es que el módulo de Promociones no admite el envío de notificaciones al servicio de indexación cuando comienza o finaliza una promoción, lo que ocasionalmente da lugar a precios de artículos desactualizados, en los que el módulo de Búsqueda no es capaz de ordenar/filtrar los artículos correctamente en comparación con los precios en tiempo real.

Cualquier acción que reindexe las condiciones comerciales del artículo (como cambios en el stock) también actualizará orgánicamente su precio teniendo en cuenta la promoción, ocultando eventualmente el problema para algunos artículos.

Nota: las tiendas que utilicen «simulationBehavior=skip» no verán divergencias entre la ordenación de los artículos y los filtros aplicados en la PLP, ya que este parámetro hace que se muestren allí los «datos fríos», pero estas aparecerán al comparar el mismo artículo en la PLP con su PDP, que funciona de forma fija como un «simulationBehavior=default», recuperando información actualizada en tiempo de ejecución.

## Simulación

La forma más sencilla de ver los efectos de este problema es tener una lista de productos ordenados por precio más bajo, crear una promoción para un producto en el centro de la lista y observar que su ordenación no cambia tras habilitar la promoción, incluso cuando se vuelve más barato que otros productos.

## Workaround

provisional**
N/A