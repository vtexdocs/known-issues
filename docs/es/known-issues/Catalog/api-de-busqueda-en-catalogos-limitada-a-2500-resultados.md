---
title: 'API de búsqueda en catálogos limitada a 2.500 resultados'
slug: api-de-busqueda-en-catalogos-limitada-a-2500-resultados
status: PUBLISHED
createdAt: 2025-11-06T13:45:59.829Z
updatedAt: 2025-11-06T13:45:59.829Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-search-api-limited-to-2500-results
locale: es
kiStatus: No Fix
internalReference: 891184
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al utilizar la API de Búsqueda por Catálogo el máximo de resultados obtenidos es de 2500, aunque haya más productos.
La paginación es hasta 50 productos y funciona correctamente hasta que el parámetro _from alcanza el número de 2500. Cuando establecen `_from` por encima de 2500 obtienen `"Parameter _from can't be greater than 2500."`.


#### Simulación


Esta situación puede ocurrir al solicitar la API utilizando postman o utilizando el catálogo compartido en las cuentas del portal del vendedor (utiliza la misma API en la interfaz de usuario).

Cuando se utiliza la API: - hacer la solicitud utilizando el paramenter `_from` por encima de 2500
Al utilizar el catálogo compartido - omita la paginación en la pestaña de productos disponibles hasta llegar a 2500. Las páginas siguientes no se actualizarán y mostrarán los mismos resultados que la página anterior a 2500.

## Workaround


N/A



