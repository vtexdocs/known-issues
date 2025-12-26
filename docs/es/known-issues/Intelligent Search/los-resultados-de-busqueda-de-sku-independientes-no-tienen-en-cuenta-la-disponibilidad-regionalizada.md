---
title: 'Los resultados de búsqueda de SKU independientes no tienen en cuenta la disponibilidad regionalizada'
slug: los-resultados-de-busqueda-de-sku-independientes-no-tienen-en-cuenta-la-disponibilidad-regionalizada
status: PUBLISHED
createdAt: 2025-12-26T19:01:41.219Z
updatedAt: 2025-12-26T19:01:41.219Z
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


En las tiendas regionalizadas en las que se separan las SKU, las SKU de producto que están agotadas se eliminan del resultado de la búsqueda, pero esto no ocurre.

Las navegaciones regionalizadas pueden devolver SKUs sin stock porque uno de los SKUs del producto está disponible en vendedores regulares o de marca blanca.


#### Simulación


Considerando una tienda con dos vendedores y la siguiente matriz de disponibilidad para un producto específico:

- tamaño: pequeño; vendedor A: disponible; vendedor B: no disponible
- talla: grande; vendedor A: no disponible; vendedor B: no disponible

En una navegación con "regionId: vendedor A", el resultado de la búsqueda devolverá las SKU "talla:pequeña" y "talla:grande".


#### Workaround


N/A


