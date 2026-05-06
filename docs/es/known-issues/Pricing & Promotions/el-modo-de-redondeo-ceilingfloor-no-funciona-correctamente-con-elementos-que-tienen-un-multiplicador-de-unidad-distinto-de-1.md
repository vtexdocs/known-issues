---
title: 'El modo de redondeo «ceiling/floor» no funciona correctamente con elementos que tienen un multiplicador de unidad distinto de 1'
slug: el-modo-de-redondeo-ceilingfloor-no-funciona-correctamente-con-elementos-que-tienen-un-multiplicador-de-unidad-distinto-de-1
status: PUBLISHED
createdAt: 2024-01-18T17:52:51.000Z
updatedAt: 2024-01-18T17:52:51.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: roundingmode-ceilingfloor-not-working-properly-among-items-with-unitmultiplier-other-than-1
locale: es
kiStatus: Backlog
internalReference: 968349
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Es posible configurar, mediante una tarea para el equipo de producto, cómo se redondea el valor del descuento en el carrito.
En el caso de que la cuenta utilice un modo de redondeo por redondeo al alza o a la baja, este redondeo no funcionará correctamente con artículos cuyo multiplicador de unidad no sea 1.

Esto se debe a que el multiplicador de unidad de este artículo es 100,0. Cuando RnB redondea al alza el valor del descuento para el proceso de pago, redondea al alza el precio unitario. Por lo tanto, toma el valor de una unidad pequeña y lo redondea al alza. A continuación, toma el descuento total, lo divide entre la cantidad multiplicada por el multiplicador de unidad y lo redondea al alza a dos decimales.
Como RnB solo tiene en cuenta dos decimales, redondea a 0,01 o a 0,02.

## Simulación

Ejemplo:
Descuento total: -3,96
Descuento unitario = -3,96 / (2*100) = -0,0198

Entonces, ¿qué artículo se llevará el 0,0198 % del descuento, en lugar del 3,96 %?

## Workaround

Una solución válida sería volver a establecer el modo de redondeo en «no roundingMode», de modo que el problema deje de producirse.