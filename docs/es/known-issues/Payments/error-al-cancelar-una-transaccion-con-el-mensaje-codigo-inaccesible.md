---
title: 'Error al cancelar una transacción con el mensaje «Código inaccesible»'
slug: error-al-cancelar-una-transaccion-con-el-mensaje-codigo-inaccesible
status: PUBLISHED
createdAt: 2024-03-12T19:33:54.000Z
updatedAt: 2026-01-22T23:15:11.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-cancellation-error-with-unreachable-code-message
locale: es
kiStatus: Backlog
internalReference: 998435
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las solicitudes de cancelación de transacciones pueden fallar con el mensaje «Código inaccesible» (visible únicamente a través de la API) cuando se envía una cancelación a la pasarela de pagos.

El error puede producirse en diferentes flujos de cancelación, ya sean totales o parciales, y puede ocurrir antes de la captura de la transacción, independientemente de si ya se ha creado una división del pago.

Escenario 1: cancelación total de la transacción (API de pagos)

Una cancelación total de la transacción puede fallar devolviendo el mensaje «Código inaccesible» (visible solo a través de la API).

Este error se produce en el escenario de división del pago; en la interfaz de usuario se pueden ver los registros del intento de cancelación, pero no hay respuesta.

Escenario 2: cancelación parcial iniciada por OMS (antes de la captura)

Una cancelación parcial iniciada por OMS (por ejemplo, durante una orden de cambio) puede fallar con el mensaje «Código inaccesible», incluso antes de que se capture la transacción.

En el momento del error:

La transacción no se captura;

Aún no existe ninguna división de pago.

## Simulación

No hemos podido simular este error.

## Workaround

Escenario 1
Cancele los pagos por separado, empezando por el de menor valor.

Escenario 2
Abra un ticket con el equipo de Producto/Pagos solicitando que se finalice (capture) la transacción.
Una vez finalizada la transacción, proceda con el reembolso del importe requerido.