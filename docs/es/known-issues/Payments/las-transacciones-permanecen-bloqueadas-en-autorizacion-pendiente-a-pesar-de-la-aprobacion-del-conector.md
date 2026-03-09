---
title: 'Las transacciones permanecen bloqueadas en «Autorización pendiente» a pesar de la aprobación del conector.'
slug: las-transacciones-permanecen-bloqueadas-en-autorizacion-pendiente-a-pesar-de-la-aprobacion-del-conector
status: PUBLISHED
createdAt: 2026-03-09T12:53:40.750Z
updatedAt: 2026-03-09T12:53:40.750Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-pending-authorization-despite-connector-approval
locale: es
kiStatus: Fixed
internalReference: 1344356
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, el trabajador de transacciones no logra avanzar la transacción al estado esperado, incluso después de recibir una respuesta satisfactoria (200 OK) del conector. Como resultado, las transacciones pueden permanecer bloqueadas en «Autorización pendiente» y los pedidos correspondientes permanecen en «Pago pendiente». Este comportamiento puede ocurrir cuando el conector devuelve correctamente una respuesta aprobada, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.

## Simulación

No es posible simularlo.

## Workaround

Transacción atascada en «Autorización pendiente» Ejecute la siguiente API para avanzar manualmente la autorización: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referencia de la API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request