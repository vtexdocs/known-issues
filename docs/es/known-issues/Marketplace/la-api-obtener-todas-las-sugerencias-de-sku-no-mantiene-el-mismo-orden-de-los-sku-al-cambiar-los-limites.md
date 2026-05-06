---
title: 'La API «Obtener todas las sugerencias de SKU» no mantiene el mismo orden de los SKU al cambiar los límites'
slug: la-api-obtener-todas-las-sugerencias-de-sku-no-mantiene-el-mismo-orden-de-los-sku-al-cambiar-los-limites
status: PUBLISHED
createdAt: 2021-05-11T22:01:47.000Z
updatedAt: 2022-12-05T17:49:32.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: get-all-sku-suggestions-api-doesnt-keep-same-sku-order-when-changing-limits
locale: es
kiStatus: No Fix
internalReference: 367187
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La API «Obtener todas las sugerencias de SKU» tiene un límite de 20 SKU por página.

Documentación de la API: https://developers.vtex.com/vtex-rest-api/reference/get-suggestions#getsuggestions

En el trabajo diario, esto afecta al funcionamiento del Marketplace, ya que cada vez que el Marketplace realiza una solicitud cambiando los límites para obtener los siguientes 20 SKU, el orden de los SKU también cambia y esto da la impresión de que hay SKU duplicados.

Este comportamiento se produce al solicitar esta API utilizando parámetros de consulta como «sellerId». Al solicitar la API sin parámetros de consulta, es posible utilizar el recurso «Next» para evitar este problema.

## Simulación

1. Solicita la API «Get all SKU suggestions» utilizando el parámetro de consulta: «sellerId»;
2. Cambia los límites en los parámetros «**_from**» y «**_to**» para obtener los siguientes SKU;
3. Comprueba si hay algún SKU en esta página que ya haya aparecido en las páginas anteriores.

## Workaround

Para evitar esta situación, utiliza la hoja de cálculo de exportación de la interfaz de usuario o utiliza la API sin parámetros.