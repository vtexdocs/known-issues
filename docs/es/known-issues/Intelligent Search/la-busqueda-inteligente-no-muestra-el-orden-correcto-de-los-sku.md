---
title: 'La búsqueda inteligente no muestra el orden correcto de los SKU'
slug: la-busqueda-inteligente-no-muestra-el-orden-correcto-de-los-sku
status: PUBLISHED
createdAt: 2022-10-13T23:43:14.000Z
updatedAt: 2023-05-24T20:15:59.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-not-returning-correct-sku-order
locale: es
kiStatus: Fixed
internalReference: 677937
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La API de búsqueda inteligente no devuelve el orden esperado de las variaciones del SKU de un producto en la búsqueda y en las estanterías

## Simulación

Ve a la página de un producto, comprueba el orden de los SKU; ve a la página de búsqueda y comprueba el orden de los SKU (a veces se muestra correctamente, otras veces no)

## Workaround

provisional**
La propiedad sortVariationsByLabel del selector de SKU podría resolver algunos casos

https://developers.vtex.com/docs/guides/vtex-store-components-skuselector

 ![](https://vtexhelp.zendesk.com/attachments/token/tcCXWNHIw8KJupddSHiMElnxl/?name=image.png)