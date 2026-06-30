---
title: 'Las transacciones permanecen en estado de autorización pendiente a pesar de la aprobación del conector.'
slug: las-transacciones-permanecen-en-estado-de-autorizacion-pendiente-a-pesar-de-la-aprobacion-del-conector
status: PUBLISHED
createdAt: 2025-12-26T17:32:57.000Z
updatedAt: 2026-03-09T15:53:15.000Z
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

En algunos casos, el Transaction Worker no logra avanzar la transacción al estado esperado, incluso después de recibir una respuesta exitosa (200 OK) del conector. Como resultado, las transacciones pueden quedar atascadas en "Autorización pendiente" y los pedidos correspondientes permanecen en "Pago pendiente". Este comportamiento puede ocurrir cuando el conector devuelve correctamente una respuesta aprobada, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.

## Simulación

No es posible realizar una simulación.

## Workaround

Transacción atascada en "Autorización pendiente": Ejecute la siguiente API para avanzar manualmente la autorización: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referencia de la API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request