---
title: Caracteres específicos eliminados de la URL de búsqueda filtrada
slug: caracteres-especificos-eliminados-de-la-url-de-busqueda-filtrada
status: PUBLISHED
createdAt: 2025-10-16T20:41:55.129Z
updatedAt: 2025-10-16T20:41:55.129Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: specific-characters-removed-from-the-filtered-search-url
locale: es
kiStatus: Backlog
internalReference: 1196131
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Algunos caracteres especiales, como la coma, pueden ser eliminados de la URL del filtro. Esto puede generar una colisión entre productos con valores diferentes.


#### Simulación



Dos productos diferentes con un atributo Tamaño y valores "2,5" y "25" utilizarán la misma URL: "/tamaño/25".

Aunque se vean los dos valores de filtro a seleccionar en la tienda, darán como resultado los mismos productos

## Workaround


N/A


