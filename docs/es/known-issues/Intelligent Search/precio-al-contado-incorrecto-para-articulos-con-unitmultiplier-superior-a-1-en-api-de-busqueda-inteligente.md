---
title: 'Precio al contado incorrecto para artículos con UnitMultiplier superior a 1 en API de búsqueda inteligente'
id: 50Ufh8uqYt76Ddxrz0Id99
status: PUBLISHED
createdAt: 2023-11-11T00:26:08.800Z
updatedAt: 2023-11-11T00:26:09.509Z
publishedAt: 2023-11-11T00:26:09.509Z
firstPublishedAt: 2023-11-11T00:26:09.509Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: wrong-spotprice-for-items-with-unitmultiplier-greater-than-1-in-intelligent-search-apis
locale: es
kiStatus: Backlog
internalReference: 934687
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



## Simulación


En la API REST o GraphQL de Intelligent Search, compruebe la propiedad para los elementos en este escenario específico.



## Workaround


El valor correcto para `spotPrice` se puede recuperar del array `Installments` dentro del mismo objeto `commertialOffer`.




