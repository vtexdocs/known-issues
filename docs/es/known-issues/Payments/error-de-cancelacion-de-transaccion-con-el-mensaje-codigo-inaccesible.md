---
title: 'Error de cancelación de transacción con el mensaje «Código inaccesible».'
slug: error-de-cancelacion-de-transaccion-con-el-mensaje-codigo-inaccesible
status: PUBLISHED
createdAt: 2026-01-22T20:15:44.882Z
updatedAt: 2026-01-22T20:15:44.882Z
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

 Las solicitudes de cancelación de transacciones pueden fallar con el mensaje «Código inaccesible» (visible solo a través de la API) cuando se envía una cancelación a la pasarela de pagos. El error puede producirse en diferentes flujos de cancelación, totales o parciales, y puede ocurrir antes de la captura de la transacción, independientemente de si ya se ha creado una división de pago. Escenario 1: cancelación total de la transacción (API de pagos)

Una cancelación completa de la transacción puede fallar y devolver el mensaje «Código inaccesible» (solo visible a través de la API). Este error se produce en el escenario de división del pago; en la interfaz de usuario se pueden ver los registros de intentos de cancelación, pero no hay respuesta. Escenario 2: cancelación parcial activada por OMS (antes de la captura)

Una cancelación parcial iniciada por OMS (por ejemplo, durante un cambio de pedido) puede fallar con el mensaje «Código inaccesible», incluso antes de que se capture la transacción. En el momento del error: La transacción no se captura; aún no existe ninguna división de pago.


#### Simulación

## Workaround

