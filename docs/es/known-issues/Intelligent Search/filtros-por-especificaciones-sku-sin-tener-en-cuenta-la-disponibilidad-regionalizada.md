---
title: Filtros por especificaciones SKU sin tener en cuenta la disponibilidad regionalizada
slug: filtros-por-especificaciones-sku-sin-tener-en-cuenta-la-disponibilidad-regionalizada
status: PUBLISHED
createdAt: 2025-08-28T18:26:33.039Z
updatedAt: 2025-08-28T18:26:33.039Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filters-by-sku-specifications-not-considering-regionalized-availability
locale: es
kiStatus: Backlog
internalReference: 1045111
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al filtrar la búsqueda por una especificación de SKU también se aplicará un filtro por disponibilidad de SKU, eliminando los productos en los que la variación seleccionada esté agotada, pero no se aplica a las tiendas regionalizadas.

Las navegaciones regionalizadas pueden devolver productos en los que la variación filtrada no está disponible porque la disponibilidad indexada para una especificación SKU se basa en todos los vendedores habituales y de marca blanca.


#### Simulación


Considerando una tienda con dos vendedores y la siguiente matriz de disponibilidad para un producto específico:

- tamaño: pequeño; vendedor A: disponible; vendedor B: no disponible
- talla: grande; vendedor A: no disponible; vendedor B: no disponible

En una navegación con "regionId: vendedor B", al filtrar por "talla: pequeña" se obtendrá el producto (ya que estaría disponible) y con "talla: grande" se ocultará el producto (porque no está disponible en todas partes).


#### Workaround


NO DISPONIBLE


