---
title: 'Incoherencia en la selección de las condiciones comerciales'
slug: incoherencia-en-la-seleccion-de-las-condiciones-comerciales
status: PUBLISHED
createdAt: 2025-10-16T20:47:16.150Z
updatedAt: 2025-10-16T20:47:16.150Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-in-comercial-condition-selection
locale: es
kiStatus: Backlog
internalReference: 1210072
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando la diferencia porcentual **del valor SKU en la condición es inferior al 1%,** la pasarela puede tener algunas inconsistencias eligiendo la condición comercial.

Ej:

Los valores SKU pertenecientes a la Condición B deben ser iguales o superiores al 99% en el carrito:

Considerando los siguientes SKUs Valor:

4.400(Condición A)/(4.400(Condición A) *428.397(Condición B)) = 1,01% > 1%

La diferencia porcentual es inferior al 1% (0,01%) - La condición elegida podría ser B


#### Simulación


N/A


#### Workaround


N/A



