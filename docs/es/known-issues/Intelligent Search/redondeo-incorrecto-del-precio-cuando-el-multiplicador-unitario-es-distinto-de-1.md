---
title: Redondeo incorrecto del precio cuando el multiplicador unitario es distinto de 1
slug: redondeo-incorrecto-del-precio-cuando-el-multiplicador-unitario-es-distinto-de-1
status: PUBLISHED
createdAt: 2025-07-14T12:56:36.059Z
updatedAt: 2025-07-14T12:56:36.059Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: incorrect-price-rounding-when-unit-multiplier-is-different-from-1
locale: es
kiStatus: -
internalReference: 1258875
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La Búsqueda Inteligente puede recuperar el precio de un producto con más de 2 decimales cuando el multiplicador de unidades es distinto de 1.

Por ejemplo, una unidad de un producto cuesta 69,26 $, cuando el multiplicador de unidades es 85.

Entonces, el cálculo que realiza la Búsqueda Inteligente, cuando el multiplicador unitario es diferente de 1, da como resultado un precio de $0,815.

Como el precio resulta en un precio con tres decimales, cuando se redondea por el `vtex.format-currency` , el redondeo del precio diverge, resultando en $0,82 en lugar de $0,81, que es el precio mostrado en la simulación de la caja.

Este precio redondeado se utiliza para calcular el precio del componente. Como se redondea antes del cálculo, el precio final es incorrecto.


#### Simulación


En un contexto de búsqueda, cargue un producto que tenga un multiplicador unitario distinto de 1 y cuyo unitMultiplier*price dé como resultado un número con más de 2 decimales.

## Workaround


Es posible desarrollar un componente personalizado para evitar este problema.

Además, hay una posibilidad menos viable que es registrar sólo los valores de precio que cuando se multiplica por el unitMultiplier, no dará lugar a 3+ fracciones decimales.



