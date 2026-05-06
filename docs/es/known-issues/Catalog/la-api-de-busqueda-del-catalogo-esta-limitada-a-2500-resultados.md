---
title: 'La API de búsqueda del catálogo está limitada a 2500 resultados'
slug: la-api-de-busqueda-del-catalogo-esta-limitada-a-2500-resultados
status: PUBLISHED
createdAt: 2023-08-31T17:59:19.000Z
updatedAt: 2025-11-06T16:45:15.000Z
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

Al utilizar la API de búsqueda del catálogo, el número máximo de resultados obtenidos es 2500, aunque haya más productos.
La paginación es de hasta 50 productos y funciona correctamente hasta que el parámetro _from alcanza el número 2500. Cuando se establece `_from` por encima de 2500, aparece el mensaje `"El parámetro _from no puede ser superior a 2500."`

## Simulación

Esta situación puede darse al realizar una solicitud a la API mediante Postman o al utilizar el catálogo compartido en las cuentas del portal de vendedores (que utiliza la misma API en la interfaz de usuario).

Al utilizar la API: - realiza la solicitud utilizando el parámetro `_from` por encima de 2500
Al utilizar el Catálogo compartido: - omite la paginación en la pestaña de productos disponibles hasta llegar a 2500. Las páginas siguientes no se actualizarán y mostrarán los mismos resultados que la página anterior a la 2500.

## Workaround

N/A