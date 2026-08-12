---
title: 'La política de envío con un volumen máximo incorrecto en la hoja de cálculo no muestra el mensaje de error en la simulación.'
slug: la-politica-de-envio-con-un-volumen-maximo-incorrecto-en-la-hoja-de-calculo-no-muestra-el-mensaje-de-error-en-la-simulacion
status: PUBLISHED
createdAt: 2021-06-10T23:32:40.000Z
updatedAt: 2026-08-12T20:51:18.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-policy-with-incorrect-maxvolume-on-spreadsheet-does-not-show-message-error-on-simulation
locale: es
kiStatus: Backlog
internalReference: 380471
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la Política de Envíos tiene un volumen máximo inferior al especificado en la hoja de cálculo, no se muestra ningún mensaje de error en la

## Simulación

.

Por lo tanto, el sistema desconoce el motivo del rechazo de esta política de envíos.

## **Simulación**
Para observar el problema, el valor de Volumen Máximo en la hoja de cálculo debe ser inferior al volumen calculado para el producto.

En este caso, el valor inferior al especificado en el campo Volumen Máximo no permite la aplicación de la política de envíos, lo cual es correcto. El problema radica en que el sistema no muestra ningún mensaje de error relacionado con esta Política de Envíos.

## Workaround

No existe ninguna solución alternativa para este caso.