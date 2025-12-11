---
title: 'La API de búsqueda devuelve un tiempo de espera al consultar grandes entidades de datos maestros sin filtros.'
slug: la-api-de-busqueda-devuelve-un-tiempo-de-espera-al-consultar-grandes-entidades-de-datos-maestros-sin-filtros
status: PUBLISHED
createdAt: 2025-12-11T13:04:45.480Z
updatedAt: 2025-12-11T13:04:45.480Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: search-api-returns-timeout-when-querying-large-master-data-entities-without-filters
locale: es
kiStatus: Backlog
internalReference: 1338401
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las solicitudes de la API de búsqueda de datos maestros pueden experimentar tiempos de espera cuando se consultan entidades de datos que contienen un volumen masivo de documentos (por ejemplo, decenas o cientos de millones). Esto ocurre porque la operación de búsqueda calcula por defecto el número total exacto de registros coincidentes. En conjuntos de datos extremadamente grandes, este cálculo requiere una exploración completa que supera el límite de tiempo de espera de la API.
## Simulación



1. Identificar una Entidad de Datos Maestros con un volumen muy elevado de documentos (por ejemplo, > 50 millones).
2. Realizar una petición de búsqueda genérica `GET` a la API de búsqueda sin aplicar filtros específicos o indexados.
3. 3. Observe que la petición tarda mucho tiempo en procesarse y finalmente falla con un error de tiempo de espera (408 Request Timeout).

## Workaround


Para mitigar este problema, asegúrese de que las consultas de búsqueda incluyen filtros específicos -preferiblemente en campos indexados- para reducir el alcance de la exploración de la base de datos. Evite las búsquedas amplias y sin filtros en entidades de gran tamaño.



