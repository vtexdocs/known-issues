---
title: 'Precio de mercado incorrecto para artículos con un multiplicador de unidades superior a 1 en las API de búsqueda inteligente'
slug: precio-de-mercado-incorrecto-para-articulos-con-un-multiplicador-de-unidades-superior-a-1-en-las-api-de-busqueda-inteligente
status: PUBLISHED
createdAt: 2023-11-11T00:25:53.000Z
updatedAt: 2023-11-11T00:25:53.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: wrong-spotprice-for-items-with-unitmultiplier-greater-than-1-in-intelligent-search-apis
locale: es
kiStatus: Backlog
internalReference: 934687
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las API de búsqueda inteligente (GraphQL o REST), la propiedad `spotPrice` del objeto `items.sellers.commercialOffer` es incorrecta para los artículos en los que el `unitMultiplier` es mayor que `1`.

El `spotPrice` debería representar el método de pago más barato en su opción de pago único para mostrar el «precio al contado», con un descuento (si lo hay), pero en este caso, acaba devolviendo el precio normal del artículo.

Esto no ocurre con los artículos en los que el multiplicador es inferior a `1` (artículos fraccionados).

## Simulación

En la API REST o GraphQL de Intelligent Search, comprueba la propiedad de los artículos en este escenario específico.

## Workaround

El valor correcto para `spotPrice` se puede obtener de la matriz `Installments` dentro del mismo objeto `commertialOffer`.