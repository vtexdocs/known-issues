---
title: 'Las tablas de precios promocionales en carritos de la compra de gran tamaño pueden afectar al rendimiento o provocar errores por tiempo de espera agotado'
slug: las-tablas-de-precios-promocionales-en-carritos-de-la-compra-de-gran-tamano-pueden-afectar-al-rendimiento-o-provocar-errores-por-tiempo-de-espera-agotado
status: PUBLISHED
createdAt: 2023-12-07T15:47:10.000Z
updatedAt: 2023-12-07T15:57:36.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotional-price-table-in-large-shopping-carts-can-impact-performance-or-lead-to-timeout-errors
locale: es
kiStatus: Backlog
internalReference: 949389
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando tenemos una tienda con tablas de precios promocionales creadas y carritos de la compra con muchos artículos en los que se aplican las promociones, se produce una ralentización en el rendimiento del proceso de compra y se generan errores de tiempo de espera en el carrito.

Cualquier acción realizada en el carrito puede provocar errores; por ejemplo, añadir artículos, realizar modificaciones o introducir el código postal, etc., lo que afectará al rendimiento del proceso de compra.

No podemos saber con exactitud qué número de tablas de precios promocionales que se calculan en el carrito o la cantidad de artículos añadidos en el carrito empezarán a provocar los errores de tiempo de espera o a ralentizar el rendimiento; por lo que se ha analizado, puede ocurrir con cualquier cantidad significativa.

## Simulación

Crea varias tablas de precios promocionales y un carrito de la compra con muchos artículos (aquí no podemos indicar una cifra concreta, como 50 o 100, ya que depende de las promociones).

## Workaround

Lamentablemente, no disponemos de ninguna solución alternativa para esto;
desactivar las promociones y utilizar el módulo de precios para introducir los precios podría ayudar.