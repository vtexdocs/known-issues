---
title: 'Muestreo para filtros de búsqueda inesperadamente agresivo omitiendo valores de filtro'
slug: muestreo-para-filtros-de-busqueda-inesperadamente-agresivo-omitiendo-valores-de-filtro
status: PUBLISHED
createdAt: 2025-10-16T20:44:30.506Z
updatedAt: 2025-10-16T20:44:30.506Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sampling-for-search-filters-unexpectedly-aggressive-omitting-filter-values
locale: es
kiStatus: Backlog
internalReference: 1202555
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando una búsqueda de productos encuentra más de 30.000 resultados, por motivos de eficiencia, se define que los filtros de atributos se computen sobre sólo los primeros 30.000 productos más relevantes (siguiendo la configuración de relevancia de la tienda) dentro de la búsqueda específica.

Debido a un problema, en realidad los filtros se están computando sobre productos que no son de la búsqueda específica, reduciendo el universo de filtros que deberían ofrecerse porque son de productos no relacionados.


#### Simulación


Para simular el escenario, considere algo así como una tienda con 500k productos y una categoría específica con 35k productos.

Al navegar por esta categoría, dado que se espera que el muestreo utilice los 30k productos más relevantes, los filtros deberían acercarse lo suficiente a todos los valores que la categoría puede ofrecer. Sin embargo, con este problema, puede ofrecer menos filtros de los esperados porque el muestreo se llenó con productos de otras categorías cuyos filtros no se tendrán en cuenta.

## Workaround


N/A