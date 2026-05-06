---
title: 'Incoherencia en el funcionamiento de la opción de pago en una sola cuota al finalizar la compra'
slug: incoherencia-en-el-funcionamiento-de-la-opcion-de-pago-en-una-sola-cuota-al-finalizar-la-compra
status: PUBLISHED
createdAt: 2022-06-27T17:53:30.000Z
updatedAt: 2026-02-19T17:16:11.000Z
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

Al configurar condiciones de pago que incluyen una única opción de pago a plazos, la interfaz de pago no refleja de forma coherente la configuración de plazos que aplicará realmente la pasarela de pago.

En los casos en los que sean aplicables varias reglas de pago, la pasarela siempre aplica la regla más restrictiva, independientemente de la opción de pago a plazos seleccionada por el comprador en la interfaz de pago.

La pasarela de pagos considera que una regla es «más restrictiva» **únicamente** en función de los siguientes atributos:

- **Emisor / país del emisor**
- **Marca compartida**
- **Nivel de la tarjeta**
- **Rangos BIN**
- **Canal de venta**

Como resultado, la interfaz de pago puede mostrar opciones de pago a plazos que no se correspondan con la regla que se aplica en última instancia, o puede mostrar únicamente el importe total mientras la transacción se procesa con una condición de pago a un solo plazo.

Escenario 1 – Dos condiciones de pago (pago único y pago a un solo plazo)
Configuración

Dos condiciones de pago activas para el mismo método de pago:

Condición de pago A (regla): Pago único (1x importe total), sin restricciones

Condición de pago B (regla): Pago a plazos único (10x, no pago único), con restricciones adicionales, tales como:

- Emisor / país del emisor
- Banco BIN / rangos BIN
- Marca compartida
- Nivel de la tarjeta
- Canal de venta

Comportamiento esperado

La interfaz de pago muestra:

Opción de pago en una sola cuota

Independientemente de la opción seleccionada en la interfaz (incluida la selección de pago único), la transacción se procesa utilizando la Condición B, ya que es la regla más restrictiva que coincide con el BIN de la tarjeta y los demás atributos enumerados anteriormente.

Este es el comportamiento actual y esperado de la pasarela de pagos, ya que la priorización de las reglas se basa en el nivel de restricción, no en la selección de la interfaz.

Escenario 2: condición de pago único con una opción de pago a plazos
Configuración

Una condición de pago único configurada con:

Solo una opción de pago a plazos, distinta del pago único

Comportamiento esperado

a. La interfaz de usuario del proceso de pago muestra únicamente la opción de pago único
b. Al completar la compra, la transacción se procesa utilizando la condición de pago a plazos única configurada

La opción de pago a plazos se devuelve correctamente en la respuesta paymentData (visible a través de DevTools → Red).

La opción de pago a plazos no se muestra en el menú desplegable de pago a plazos de la página de pago.

Solo se muestra al comprador el importe total (pago único).

Tras completar la compra, la transacción refleja correctamente la opción de pago a un solo plazo configurada.

## Simulación

- Configura las condiciones de pago según el Escenario 1 o el Escenario 2.
- Vaya a la página de pago y añada cualquier producto al carrito.
- Complete la compra y verifique la regla de pago aplicada a la transacción.

## Workaround

**Escenario 1**: la solución alternativa consiste en alinear el nivel de restricción entre las condiciones de pago único y de pago a plazos único.

En lugar de tener:

Condición de pago A → 1x (importe total), sin restricciones

Condición de pago B → 10x, con restricciones adicionales (emisor/país del emisor, BIN bancario/rangos de BIN, marca compartida, nivel de la tarjeta, canal de venta, etc.)

El comerciante puede configurar:

Condición de pago A → 1x (importe total), con las mismas restricciones que se aplican en la Condición B

Condición de pago B → 10x, con esas mismas restricciones

**Escenario 2**: no hay solución alternativa.%0A