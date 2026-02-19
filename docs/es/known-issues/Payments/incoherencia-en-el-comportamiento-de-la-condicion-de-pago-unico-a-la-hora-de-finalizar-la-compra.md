---
title: 'Incoherencia en el comportamiento de la condición de pago único a la hora de finalizar la compra.'
slug: incoherencia-en-el-comportamiento-de-la-condicion-de-pago-unico-a-la-hora-de-finalizar-la-compra
status: PUBLISHED
createdAt: 2026-02-19T15:21:12.008Z
updatedAt: 2026-02-19T15:21:12.008Z
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

Al configurar las condiciones de pago que incluyen una opción de pago único, la interfaz de usuario de pago no refleja de forma coherente la configuración de pago que realmente aplicará la pasarela de pagos. En los casos en los que se pueden aplicar varias reglas de pago, la pasarela siempre aplica la regla más restrictiva, independientemente de la opción de pago seleccionada por el comprador en la interfaz de usuario de pago.

La pasarela de pagos considera que una regla es «más restrictiva» **únicamente** en función de los siguientes atributos: - **Emisor/país emisor** - **Marca compartida** - **Nivel de la tarjeta**
- **Rangos BIN** - **Canal de ventas** Como resultado, la interfaz de usuario de pago puede mostrar opciones de pago a plazos que no coinciden con la regla aplicada finalmente, o puede mostrar solo el importe total mientras la transacción se procesa con una condición de pago a plazos único. Escenario 1: dos condiciones de pago (pago único y pago a plazos único) Configuración

Dos condiciones de pago activas para el mismo método de pago: Condición de pago A (regla): pago único (1x importe total), sin restricciones. Condición de pago B (regla): pago único a plazos (10x, no pago único), con restricciones adicionales, tales como: - Emisor/país emisor - Banco BIN/rangos BIN - Marca compartida - Nivel de tarjeta - Canal de venta

Comportamiento esperado La interfaz de usuario de pago muestra: Opción de pago único Independientemente de la opción seleccionada en la interfaz de usuario (incluida la selección de pago único), la transacción se procesa utilizando la condición B, ya que es la regla más restrictiva que coincide con el BIN de la tarjeta y los demás atributos enumerados anteriormente. Este es el comportamiento actual y esperado de la pasarela de pagos, ya que la priorización de las reglas se basa en el nivel de restricción, no en la selección de la interfaz de usuario.

Escenario 2: condición de pago único con una opción de pago a plazos Configuración Una condición de pago único configurada con: Solo una opción de pago a plazos, diferente del pago único Comportamiento esperado a. La interfaz de usuario de pago muestra solo la opción de pago único b. Al completar la compra, la transacción se procesa utilizando la condición de pago único configurada La opción de pago a plazos se devuelve correctamente en la respuesta paymentData (visible a través de DevTools → Network).

La opción de pago a plazos no se muestra en el menú desplegable de pagos a plazos de la caja. Solo se muestra al comprador el importe total (pago único). Una vez completada la compra, la transacción refleja correctamente la opción de pago a plazos única configurada.

## Simulación

- Configure las condiciones de pago según el escenario 1 o el escenario 2.
- Vaya a la página de pago y añada cualquier producto al carrito. - Complete la compra y compruebe la regla de pago aplicada a la transacción.

## Workaround

alternativa** **Escenario 1**: la solución alternativa consiste en alinear el nivel de restricción entre las condiciones de pago único y pago único a plazos.

En lugar de tener: Condición de pago A → 1x (importe total), sin restricciones Condición de pago B → 10x, con restricciones adicionales (emisor/país emisor, rango BIN/rangos BIN, cobrand, nivel de tarjeta, canal de venta, etc.)

El comerciante puede configurar: Condición de pago A → 1x (importe total), con las mismas restricciones aplicadas en la condición B Condición de pago B → 10x, con las mismas restricciones **Escenario 2**: no hay solución alternativa.%0A