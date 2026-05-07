---
title: 'La hoja de cálculo de asignación de categorías no incluye las ofertas en «En espera de revisión»'
slug: la-hoja-de-calculo-de-asignacion-de-categorias-no-incluye-las-ofertas-en-en-espera-de-revision
status: PUBLISHED
createdAt: 2026-05-04T19:22:28.000Z
updatedAt: 2026-05-07T17:05:39.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: category-mapping-spreadsheet-does-not-include-offers-in-waitingreview
locale: es
kiStatus: Backlog
internalReference: 1401046
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al descargar la hoja de cálculo de asignación de categorías en el módulo del mercado, el sistema actualmente solo recupera **las ofertas con el estado «Pendiente»**. Las ofertas con otros estados, como **«En espera de revisión»**, no se incluyen en el conjunto de datos utilizado para generar el archivo.

## Simulación

- Cuando la oferta está **Pendiente**, la consulta la devuelve y la hoja de cálculo se genera con todas las columnas esperadas, incluida la de `categoría sin asignar`.
- Cuando la oferta está **En espera de revisión**, la consulta utilizada para crear la hoja de cálculo **no la devuelve**.
- Como resultado, la hoja de cálculo **no contiene estas ofertas** y, por lo tanto, **la** columna `category unmapped` **no se rellena** para ellas.

## Workaround

N/A