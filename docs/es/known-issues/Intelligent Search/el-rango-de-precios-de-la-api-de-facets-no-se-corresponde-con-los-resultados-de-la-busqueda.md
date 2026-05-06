---
title: 'El rango de precios de la API de Facets no se corresponde con los resultados de la búsqueda'
slug: el-rango-de-precios-de-la-api-de-facets-no-se-corresponde-con-los-resultados-de-la-busqueda
status: PUBLISHED
createdAt: 2024-03-08T22:36:28.000Z
updatedAt: 2024-03-08T22:36:28.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: price-range-at-the-facets-api-doesnt-correspond-to-the-search-results
locale: es
kiStatus: Backlog
internalReference: 997121
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los rangos de precios de la API de facetas («Obtener la lista de facetas posibles para una consulta determinada») pueden variar entre devolver intervalos de valores «desde» y «hasta» con precios redondeados y los precios mínimo y máximo entre los resultados de la búsqueda.

Aunque los precios redondeados generan una mejor experiencia de usuario al presentar una lista de rangos de precios al comprador, no es recomendable utilizarlos como un «control deslizante» de precios.

Además, dado que los precios mínimo y máximo se aplican en un segundo momento, los rangos de precios como «intervalos» en una búsqueda que ya aplica un filtro de precio se salen de los límites especificados en relación con los precios indicados.

## Simulación

Utilizando la API, realiza una solicitud con y sin un filtro de precio como «/price/100:500» y observa los rangos de precios devueltos (de/a) en el objeto «values» para la faceta de tipo «PRICERANGE».

## Workaround

N/A