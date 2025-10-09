---
title: Es posible que los resultados de la búsqueda no muestren los productos de los sinónimos
slug: es-posible-que-los-resultados-de-la-busqueda-no-muestren-los-productos-de-los-sinonimos
status: PUBLISHED
createdAt: 2025-10-09T12:51:41.316Z
updatedAt: 2025-10-09T12:51:41.316Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-results-may-not-display-products-from-the-synonyms
locale: es
kiStatus: Backlog
internalReference: 1094028
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al buscar productos a partir de un término que tiene sinónimos, es posible que la Búsqueda Inteligente no recupere los productos de los sinónimos.

Este comportamiento ocurre porque los productos asociados al sinónimo no se reindexaron para vincularse a un producto después de añadir o actualizar un sinónimo. La causa es que la notificación de reindexación se pierde en el proceso.


#### Simulación


Para asegurarse de que este problema se está produciendo, tenga en cuenta las siguientes pruebas:

1 - El número de resultados difiere entre sí.

- En **Admin > Tienda > Búsqueda inteligente > Sinónimos**, cree o actualice un sinónimo unidireccional.
- A continuación, en **Admin > Tienda > Búsqueda inteligente > Búsqueda explicada**, compare los resultados al buscar el término original y el sinónimo.
- Al comparar los resultados, los resultados al buscar el sinónimo no incluyen todos los productos al buscar el término específico original.

2 - La última fecha de reindexación de un producto es anterior a la fecha de creación del sinónimo.

- Elija un producto del término original que no aparezca al buscar con el sinónimo.
- Compara las fechas entre la última fecha de reindexación del producto (**Admin > Tienda > Búsqueda inteligente > Historial de indexación** ) y la fecha de creación/actualización del sinónimo (**Admin > Tienda > Búsqueda inteligente > Sinónimos**).
- Si la última fecha de reindexación de un producto es anterior a la fecha de creación del sinónimo, entonces este caso puede encajar con este KI.

## Workaround


Abra un ticket al equipo de CX con la información de las pruebas para que podamos reindexar los productos afectados.


