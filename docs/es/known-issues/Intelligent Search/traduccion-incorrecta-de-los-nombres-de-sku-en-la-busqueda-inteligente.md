---
title: 'Traducción incorrecta de los nombres de SKU en la Búsqueda Inteligente'
slug: traduccion-incorrecta-de-los-nombres-de-sku-en-la-busqueda-inteligente
status: PUBLISHED
createdAt: 2025-10-16T20:37:01.505Z
updatedAt: 2025-10-16T20:37:01.505Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: wrong-translation-for-sku-names-at-the-intelligent-search
locale: es
kiStatus: Fixed
internalReference: 1180016
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En productos con múltiples SKUs, la traducción de los nombres de SKU se realiza erróneamente sobre el primer SKU.


#### Simulación


Considerando que un producto tiene sus cuatro SKUs nombrados respectivamente como "P/M/G/GG" en `pt-BR` como idioma principal. Mientras que una traducción a `en-US` debería generar los nombres como "S/M/L/XL" en realidad se traducirá como "S/S/S/S".

## Workaround


N/A


