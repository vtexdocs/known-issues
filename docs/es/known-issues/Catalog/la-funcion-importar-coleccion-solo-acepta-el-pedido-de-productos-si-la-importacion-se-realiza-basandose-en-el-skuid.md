---
title: 'La función «Importar colección» solo acepta el pedido de productos si la importación se realiza basándose en el «skuId».'
slug: la-funcion-importar-coleccion-solo-acepta-el-pedido-de-productos-si-la-importacion-se-realiza-basandose-en-el-skuid
status: PUBLISHED
createdAt: 2023-12-15T16:34:57.000Z
updatedAt: 2023-12-21T18:54:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: import-collection-only-accepts-the-order-of-products-if-import-is-made-based-on-skuid
locale: es
kiStatus: Fixed
internalReference: 953862
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al importar una hoja de cálculo con productos a una colección, el usuario puede elegir seleccionar los productos por «skuId», «productId», «skuRefId» o «productRefId».

Sin embargo, el orden de los productos en la colección solo se respeta cuando la hoja de cálculo utiliza «skuId».

## Simulación

1. Crea una nueva colección;
2. Utiliza la hoja de cálculo de importación para añadir productos;
3. Elige un campo distinto de «skuId» para rellenar la hoja de cálculo;
4. Comprueba que el orden de los productos en la colección es diferente al de la hoja de cálculo.

## Workaround

Utiliza la columna «skuId» para rellenar la hoja de cálculo.