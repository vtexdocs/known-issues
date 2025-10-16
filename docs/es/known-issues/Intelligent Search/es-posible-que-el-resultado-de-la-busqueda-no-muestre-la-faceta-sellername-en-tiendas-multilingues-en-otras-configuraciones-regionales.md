---
title: Es posible que el resultado de la búsqueda no muestre la faceta sellerName en tiendas multilingües en otras configuraciones regionales.
slug: es-posible-que-el-resultado-de-la-busqueda-no-muestre-la-faceta-sellername-en-tiendas-multilingues-en-otras-configuraciones-regionales
status: PUBLISHED
createdAt: 2025-10-16T20:38:51.548Z
updatedAt: 2025-10-16T20:38:51.548Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-result-may-not-display-the-facet-sellername-on-multilanguage-stores-in-additional-locales
locale: es
kiStatus: Backlog
internalReference: 1186137
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

## Simulación



Los pasos para simular el Problema conocido son:

1. En la herramienta Postman, u otra herramienta de desarrollador, crear una petición API del endpoint Obtener lista de las facetas posibles para una consulta dada.
2. En la petición API, añade una configuración regional que no sea la predeterminada al parámetro `locale` de la cadena de consulta.
3. 3. Ejecute el endpoint.

El resultado de la búsqueda no devuelve la faceta `sellerName`.

## Workaround


N/A


