---
title: 'Las tablas de precios promocionales en carritos de compra grandes pueden afectar el rendimiento o provocar errores de tiempo de espera.'
slug: las-tablas-de-precios-promocionales-en-carritos-de-compra-grandes-pueden-afectar-el-rendimiento-o-provocar-errores-de-tiempo-de-espera
status: PUBLISHED
createdAt: 2023-12-07T18:47:10.000Z
updatedAt: 2026-09-28T22:43:38.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotional-price-table-in-large-shopping-carts-can-impact-performance-or-lead-to-timeout-errors
locale: es
kiStatus: Fixed
internalReference: 949389
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una tienda tiene tablas de precios promocionales y carritos de compra grandes que aplican dichas promociones, se produce una ralentización en el proceso de compra y errores de tiempo de espera en el carrito.

Cualquier acción en el carrito, como añadir artículos, editarlo o introducir el código postal, puede provocar errores y afectar al rendimiento de la compra.

No podemos determinar con precisión cuántas tablas de precios promocionales se están calculando en el carrito ni qué cantidad de artículos añadidos provocará errores de tiempo de espera o ralentización; según el análisis realizado, puede ocurrir con cualquier cantidad significativa.

## Simulación

Cree varias tablas de precios promocionales y un carrito de compra con muchos artículos (no podemos especificar una cantidad exacta, como 50 o 100, ya que depende de las promociones).

## Workaround

Lamentablemente, no disponemos de ninguna solución alternativa. Desactivar las promociones y utilizar el módulo de precios para introducir los precios podría ayudar.