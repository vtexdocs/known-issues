---
title: 'El evento «ProductClick» no se activa en la barra de búsqueda'
slug: el-evento-productclick-no-se-activa-en-la-barra-de-busqueda
status: PUBLISHED
createdAt: 2023-01-30T17:43:30.000Z
updatedAt: 2023-01-30T17:43:30.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: productclick-event-not-triggering-in-searchbar
locale: es
kiStatus: Backlog
internalReference: 742754
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El evento ProductClick no se activa en la barra de búsqueda

https://github.com/vtex-apps/search/blob/8cf2cec70a2d6e1ac616343d07f10d75b45aa8ae/react/components/Autocomplete/components/TileList/TileList.tsx#L76

Deberíamos añadir el evento productClick igual que lo hemos hecho en el bloque product-summary en productSummaryCustom:

https://github.com/vtex-apps/product-summary/blob/8ef1f2b397d35a03b2acaf448c0c70848600c4a5/react/ProductSummaryCustom.tsx

https://github.com/vtex-apps/product-summary/blob/45a6df2afeabd441d3c772b5ee1840206a8cf061/react/ProductSummaryList.tsx#L160-L174

## Simulación

Ve a la barra de búsqueda
Busca cualquier término que tenga productos
Haz clic en el producto
Comprueba el evento dataLayer en la consola

## Workaround

No