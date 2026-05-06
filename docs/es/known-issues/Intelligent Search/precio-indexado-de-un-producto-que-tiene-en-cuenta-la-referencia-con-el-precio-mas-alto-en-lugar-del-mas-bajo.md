---
title: 'Precio indexado de un producto que tiene en cuenta la referencia con el precio más alto en lugar del más bajo'
slug: precio-indexado-de-un-producto-que-tiene-en-cuenta-la-referencia-con-el-precio-mas-alto-en-lugar-del-mas-bajo
status: PUBLISHED
createdAt: 2023-05-09T14:39:44.000Z
updatedAt: 2023-08-18T17:23:52.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: indexed-price-for-a-product-considering-the-sku-with-the-highest-instead-of-the-lowest-price
locale: es
kiStatus: Fixed
internalReference: 822120
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El precio indexado, que es un valor único para todo el producto (junto con sus SKU) y se utiliza para ordenar y filtrar los productos en la Búsqueda inteligente, tiene en cuenta el precio más alto entre las SKU, mientras que lo esperado es que se tenga en cuenta la SKU con el precio más bajo, junto con reglas adicionales sobre la política comercial y los vendedores de las SKU.

## Simulación

- tener un artículo con varias SKU con precios diferentes
- aplicar un filtro por precio, normalmente mediante el filtro «rango de precios»
- observar que se basará en la SKU más cara en lugar de en la más barata

## Workaround

N/A