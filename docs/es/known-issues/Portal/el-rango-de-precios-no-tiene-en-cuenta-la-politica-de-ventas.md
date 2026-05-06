---
title: 'El rango de precios no tiene en cuenta la política de ventas'
slug: el-rango-de-precios-no-tiene-en-cuenta-la-politica-de-ventas
status: PUBLISHED
createdAt: 2021-01-08T19:37:43.000Z
updatedAt: 2024-01-19T19:13:25.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: price-range-disregards-sales-policy
locale: es
kiStatus: Backlog
internalReference: 322764
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El filtro de rango de precios, que se configura desde la categoría de opciones, tiene en cuenta el precio registrado en todas las políticas de venta de la tienda, lo que significa que siempre mostrará el valor más bajo registrado en cualquiera de las políticas de venta, por lo que es posible que se muestre un producto que no se encuentre dentro del rango de precios de esa política de venta en concreto.

## Simulación

1. Registra diferentes precios en distintas políticas de venta para el mismo SKU;
2. Crea rangos de precios en la categoría en la que los precios registrados tengan rangos diferentes;
3. En la política de ventas del SKU con el precio más alto, filtra por rango de precios;
4. Observa que el valor del SKU considerado pertenece a otra política de ventas, ya que el filtro solo tiene en cuenta el valor más bajo de cualquier política.

## Workaround

No hay ninguna solución alternativa disponible para este caso.