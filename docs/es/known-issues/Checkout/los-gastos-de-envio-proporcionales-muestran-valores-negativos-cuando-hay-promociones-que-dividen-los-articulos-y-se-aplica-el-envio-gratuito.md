---
title: 'Los gastos de envío proporcionales muestran valores negativos cuando hay promociones que dividen los artículos y se aplica el envío gratuito'
slug: los-gastos-de-envio-proporcionales-muestran-valores-negativos-cuando-hay-promociones-que-dividen-los-articulos-y-se-aplica-el-envio-gratuito
status: PUBLISHED
createdAt: 2023-09-29T01:29:24.000Z
updatedAt: 2026-03-07T01:55:06.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: proportional-shipping-costs-shows-negative-values-when-there-are-promotion-that-split-items-and-free-shipping-applied
locale: es
kiStatus: Backlog
internalReference: 909925
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar promociones que dividen los artículos, como las del tipo «Más por menos», los gastos de envío proporcionales pueden mostrar valores negativos.

Este problema se observa cuando el vendedor aplica el descuento «Más por menos» y el mercado aplica una promoción de envío gratuito, lo que da lugar a la concesión de un descuento. Este comportamiento provoca un bucle infinito al intentar completar una compra.

## Simulación

Puede haber diferentes combinaciones que provoquen el problema, ya que el peso se utiliza para calcular los gastos de envío proporcionales, lo que dificulta su reproducción.

## Workaround

provisional**

1.  Configura la promoción de envío gratuito para que la aplique el vendedor.
2. Configura la promoción «Más por menos» en el marketplace y restríngela al vendedor utilizando la función de aceptación del vendedor.