---
title: 'Incoherencia en el comportamiento de la condición de pago único en la caja'
slug: incoherencia-en-el-comportamiento-de-la-condicion-de-pago-unico-en-la-caja
status: PUBLISHED
createdAt: 2025-12-17T12:51:44.326Z
updatedAt: 2025-12-17T12:51:44.326Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-in-single-installment-payment-condition-behavior-at-checkout
locale: es
kiStatus: Backlog
internalReference: 605568
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Al configurar condiciones de pago que incluyen una única opción de pago a plazos, la interfaz de usuario de la caja no refleja de forma coherente la configuración de pago a plazos que aplicará realmente la pasarela de pagos.
En situaciones en las que se pueden aplicar varias reglas de pago, la pasarela siempre aplica la regla más restrictiva (por ejemplo, basada en el país emisor y/o el banco BIN), independientemente de la opción de pago a plazos seleccionada por el comprador en la interfaz de pago.
Como resultado, la interfaz de pago puede mostrar opciones de pago a plazos que no coincidan con la regla aplicada en última instancia, o puede mostrar sólo el importe total mientras la transacción se procesa con una condición de pago de un solo plazo.

Escenario 1 - Dos condiciones de pago (pago único y plazo único)
Configuración

Dos condiciones de pago activas para el mismo método de pago:

Condición de pago A (Regla): Pago único (1x importe total), sin restricciones.

Condición de pago B (Regla): Pago único (10 veces el importe completo, sin restricciones), con restricciones adicionales (por ejemplo, país emisor y/o banco BIN)

Comportamiento esperado

Aparece la interfaz de usuario de pago:

Opción de pago único

Independientemente de la opción seleccionada en la IU (incluida la selección de pago único), la transacción se procesa utilizando la Condición B, ya que es la regla más restrictiva que coincide con el BIN de la tarjeta.

Este es el comportamiento actual y esperado de Payments Gateway, ya que la priorización de reglas se basa en el nivel de restricción, no en la selección de la interfaz de usuario.

Situación 2 - Condición de pago única con una opción de pago a plazos
Configuración

Una única condición de pago configurada con:

Una única opción de pago a plazos, diferente del pago único

Comportamiento esperado

a. La interfaz de usuario de pago sólo muestra la opción de pago único
b. Al completar la compra, la transacción se procesa utilizando la condición de pago único configurada

La opción de pago a plazos se devuelve correctamente en la respuesta paymentData (visible a través de DevTools → Red).

La opción de pago a plazos no se muestra en el desplegable de pago a plazos de la caja.

Solo se muestra al comprador el importe total (pago único).

Tras completar la compra, la transacción refleja correctamente la opción de pago único configurada.


#### Simulación



- Configure las condiciones de pago según el Escenario 1 o el Escenario 2.
- Vaya a la página de pago y añada cualquier producto a la cesta.
- Complete la compra y verifique la regla de pago aplicada a la transacción.

## Workaround

 provisional
No hay solución.%0A