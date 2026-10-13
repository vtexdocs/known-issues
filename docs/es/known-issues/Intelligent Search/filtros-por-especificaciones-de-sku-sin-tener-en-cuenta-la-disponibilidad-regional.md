---
title: 'Filtros por especificaciones de SKU sin tener en cuenta la disponibilidad regional.'
slug: filtros-por-especificaciones-de-sku-sin-tener-en-cuenta-la-disponibilidad-regional
status: PUBLISHED
createdAt: 2024-06-05T23:52:38.000Z
updatedAt: 2026-10-13T18:59:09.000Z
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

Filtrar la búsqueda por una especificación de SKU también aplicará un filtro por disponibilidad de SKU, eliminando los productos cuya variante seleccionada esté agotada, pero esto no se aplica a las tiendas regionalizadas.

Las navegaciones regionalizadas pueden mostrar productos cuya variante filtrada no esté disponible, ya que la disponibilidad indexada para una especificación de SKU se basa en todos los vendedores habituales y de marca blanca.

## Simulación

Consideremos una tienda con dos vendedores y la siguiente matriz de disponibilidad para un producto específico:

- Talla: pequeña; vendedor A: disponible; vendedor B: no disponible
- Talla: grande; vendedor A: no disponible; vendedor B: no disponible

En una navegación con "regionId: vendedor B", filtrar por "talla: pequeña" mostrará el producto (como si estuviera disponible) y filtrar por "talla: grande" lo ocultará (porque no está disponible en todas partes).

## Workaround

N/A