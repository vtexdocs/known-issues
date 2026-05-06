---
title: 'Artículos incluidos en las prestaciones que no se han generado en promociones con colecciones asociadas'
slug: articulos-incluidos-en-las-prestaciones-que-no-se-han-generado-en-promociones-con-colecciones-asociadas
status: PUBLISHED
createdAt: 2024-02-21T15:08:45.000Z
updatedAt: 2024-02-21T15:08:45.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: items-in-benefits-not-generated-in-promotions-with-collections-associated
locale: es
kiStatus: Backlog
internalReference: 985850
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se crea una promoción con productos o SKU asociados a través de una colección, el `productContext` no está preparado para generar la matriz de artículos dentro de los beneficios asociados a los productos de la colección

## Simulación

- Crea una promoción
- Asocia los productos a esta promoción a través de una colección
- Abre uno de los productos que debería tener una promoción
- Abre la consola de tu navegador
- Comprueba en la extensión React Dev Tools si aparece productContextProvider
- Abre benefits.items; estará vacío o contendrá el SKU con el mismo ID de la colección

## Workaround

La única forma posible de que benefits.items se llene es rellenando todos los SKU asociados a la promoción en lugar de un clúster o una colección