---
title: 'Promociones con un valor mínimo y condiciones de regalo en las que el regalo no aparece en el carrito'
slug: promociones-con-un-valor-minimo-y-condiciones-de-regalo-en-las-que-el-regalo-no-aparece-en-el-carrito
status: PUBLISHED
createdAt: 2021-10-07T17:03:27.000Z
updatedAt: 2024-12-19T19:20:01.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-with-minimum-value-and-gift-conditions-not-displaying-gift-in-cart
locale: es
kiStatus: Backlog
internalReference: 445569
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El problema se produce al combinar una promoción con una condición de importe mínimo y un artículo de regalo. En estos casos, el regalo no se muestra al usuario en la interfaz de pago. Aunque la promoción se aplica técnicamente, el usuario no puede ver ni seleccionar el regalo, lo que genera confusión.

## Simulación

Este problema no se produce de forma sistemática en todas las pruebas, lo que dificulta su reproducción. No obstante, los pasos generales para reproducirlo son los siguientes:

1. Crea una promoción que combine una condición de valor mínimo de pedido con un artículo de regalo.
2. Añade artículos elegibles al carrito para cumplir la condición de valor mínimo de la promoción.
3. Procede al pago.
4. Observa si el artículo de regalo se muestra o se puede seleccionar en la interfaz de pago. En algunos casos, la promoción parece aplicarse al pedido, pero el regalo no aparece en la interfaz.

## Workaround

provisional**
No hay ninguna solución provisional disponible para este problema.