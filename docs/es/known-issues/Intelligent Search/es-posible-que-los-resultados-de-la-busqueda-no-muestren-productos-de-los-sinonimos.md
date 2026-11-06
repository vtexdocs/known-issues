---
title: 'Es posible que los resultados de la búsqueda no muestren productos de los sinónimos.'
slug: es-posible-que-los-resultados-de-la-busqueda-no-muestren-productos-de-los-sinonimos
status: PUBLISHED
createdAt: 2026-11-06T22:59:57.000Z
updatedAt: 2026-11-06T22:59:57.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-results-may-not-display-products-from-the-synonyms
locale: es
kiStatus: Backlog
internalReference: 1482294
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al buscar productos a partir de un término con sinónimos, la Búsqueda Inteligente podría no recuperar los productos asociados a dichos sinónimos.

Este comportamiento se produce porque los productos asociados al sinónimo no se reindexaron para vincularse a un producto tras añadir o actualizar un sinónimo. Esto se debe a que la notificación de reindexación se pierde durante el proceso.

## Simulación

Para confirmar que este problema se produce, tenga en cuenta lo siguiente:

1 - El número de resultados difiere entre sí.

- En **Administración > Tienda > Búsqueda Inteligente > Sinónimos**, cree o actualice un sinónimo unidireccional.

- A continuación, en **Administración > Tienda > Búsqueda Inteligente > Búsqueda Explicada**, compare los resultados al buscar el término original y el sinónimo.

- Al comparar los resultados, los resultados al buscar el sinónimo no incluyen todos los productos que aparecen al buscar el término específico original.

2 - La fecha de la última reindexación de un producto es anterior a la fecha de creación del sinónimo.

- Seleccione un producto del término original que no aparezca al buscar con el sinónimo.

- Compare las fechas de la última reindexación del producto (**Administración > Tienda > Búsqueda inteligente > Historial de indexación**) con la fecha de creación/actualización del sinónimo (**Administración > Tienda > Búsqueda inteligente > Sinónimos**).

- Si la fecha de la última reindexación de un producto es anterior a la fecha de creación del sinónimo, este caso podría coincidir con esta información clave.

## Workaround

Abra una incidencia con el equipo de Experiencia del Cliente (CX) con la información que lo respalda para que podamos reindexar los productos afectados.