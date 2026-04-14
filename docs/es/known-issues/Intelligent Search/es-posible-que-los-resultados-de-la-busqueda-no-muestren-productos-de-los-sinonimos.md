---
title: 'Es posible que los resultados de la búsqueda no muestren productos de los sinónimos'
slug: es-posible-que-los-resultados-de-la-busqueda-no-muestren-productos-de-los-sinonimos
status: PUBLISHED
createdAt: 2026-04-14T19:22:44.989Z
updatedAt: 2026-04-14T19:22:44.989Z
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

Al buscar productos a partir de un término que tiene sinónimos, es posible que la Búsqueda inteligente no recupere los productos asociados a dichos sinónimos.

Este comportamiento se produce porque los productos asociados al sinónimo no se han reindexado para vincularse a un producto tras añadir o actualizar un sinónimo. Se debe a que la notificación de reindexación se ha perdido durante el proceso.

## Simulación

Para asegurarse de que se produce este problema, tenga en cuenta las siguientes pruebas:

1 - El número de resultados difiere entre sí.

- En **Admin > Tienda > Búsqueda inteligente > Sinónimos**, cree o actualice un sinónimo unidireccional.
- A continuación, en **Admin > Tienda > Búsqueda inteligente >  Búsqueda explicada**, compare los resultados al buscar el término original y el sinónimo.
- Al comparar los resultados, los resultados al buscar el sinónimo no incluyen todos los productos que aparecen al buscar el término específico original.

2 - La última fecha de reindexación de un producto es anterior a la fecha de creación del sinónimo.

- Elige un producto del término original que no aparezca al buscar utilizando el sinónimo.
- Compara las fechas entre la última fecha de reindexación del producto (**Admin > Tienda > Búsqueda inteligente >  Historial de indexación**) y la fecha de creación/actualización del sinónimo (**Admin > Tienda > Búsqueda inteligente > Sinónimos**).
- Si la última fecha de reindexación de un producto es anterior a la fecha de creación del sinónimo, entonces este caso puede encajar con este KI.

## Workaround

provisional**
Envía un ticket al equipo de CX con la información de prueba para que podamos reindexar los productos afectados.