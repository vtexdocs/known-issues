---
title: 'Resultados de búsqueda de SKU independientes que no tienen en cuenta la disponibilidad regional.'
slug: resultados-de-busqueda-de-sku-independientes-que-no-tienen-en-cuenta-la-disponibilidad-regional
status: PUBLISHED
createdAt: 2025-12-26T22:00:45.000Z
updatedAt: 2026-09-22T16:53:47.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: detached-sku-search-results-not-considering-regionalized-availability
locale: es
kiStatus: Backlog
internalReference: 1344487
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En tiendas regionalizadas donde los SKU están desvinculados, los SKU de productos agotados se eliminan de los resultados de búsqueda, pero esto no sucede.

Las navegaciones regionalizadas pueden mostrar SKU agotados porque uno de los SKU de productos está disponible en vendedores habituales o de marca blanca.

## Simulación

Considerando una tienda con dos vendedores y la siguiente matriz de disponibilidad para un producto específico:

- Talla: pequeña; vendedor A: disponible; vendedor B: no disponible
- Talla: grande; vendedor A: no disponible; vendedor B: no disponible

En una navegación con "regionId: vendedor A", los resultados de búsqueda mostrarán los SKU "talla: pequeña" y "talla: grande".

## Workaround

N/A