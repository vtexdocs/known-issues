---
title: 'Las transacciones permanecen en estado de autorización pendiente a pesar de la aprobación del conector.'
slug: las-transacciones-permanecen-en-estado-de-autorizacion-pendiente-a-pesar-de-la-aprobacion-del-conector
status: PUBLISHED
createdAt: 2026-06-30T19:14:21.000Z
updatedAt: 2026-06-30T19:14:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-pending-authorization-despite-connector-approval
locale: es
kiStatus: Backlog
internalReference: 1427794
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas transacciones de pago se quedan atascadas en "Autorización pendiente" incluso después de que el conector haya devuelto "Aprobado" (200 OK), y los pedidos correspondientes permanecen en "Pago pendiente". El síntoma visible es que el estado de la transacción no avanza y no se registra ninguna interacción de "Inicio de reintento de autorización para el pago" en la línea de tiempo de la transacción. Esto afecta a los flujos de pago en la pasarela de pagos VTEX, donde el proceso responsable de procesar la transacción falla antes de la ejecución o nunca se llama, lo que provoca el bloqueo del flujo de pedidos.

## Simulación

No es posible realizar una simulación.

## Workaround

Transacción atascada en Autorización pendiente. Ejecute la siguiente API para avanzar manualmente la autorización: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referencia de la API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request