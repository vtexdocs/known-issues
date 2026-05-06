---
title: 'El comparador no funciona como se esperaba cuando el nombre del producto o del SKU contiene caracteres especiales'
slug: el-comparador-no-funciona-como-se-esperaba-cuando-el-nombre-del-producto-o-del-sku-contiene-caracteres-especiales
status: PUBLISHED
createdAt: 2023-01-18T18:57:19.000Z
updatedAt: 2023-10-19T15:36:57.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: matcher-does-not-work-as-expected-when-the-productsku-name-contains-special-characters
locale: es
kiStatus: Fixed
internalReference: 736164
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al integrar productos cuyo nombre contiene caracteres especiales, como `. - + # /`, Matcher les asigna una puntuación del 50 % y los mantiene en estado «Pendiente». Por lo tanto, estos productos deben ser aprobados manualmente o a través de la API.

## Simulación

1. A través de un vendedor de VTEX, envía un SKU que contenga caracteres especiales en el nombre
2. En la página «SKU recibidos», comprueba que el SKU en cuestión tendrá una puntuación del 50 % en la pestaña «Pendiente»

## Workaround

Para resolver esta situación, se recomienda que el vendedor cambie el SKU o el nombre del producto, eliminando los caracteres especiales. Si esto no es posible, el marketplace puede utilizar la API https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/api.vtex.com/-accountName-/suggestions/matches/action/-actionName- para hacer coincidir los productos