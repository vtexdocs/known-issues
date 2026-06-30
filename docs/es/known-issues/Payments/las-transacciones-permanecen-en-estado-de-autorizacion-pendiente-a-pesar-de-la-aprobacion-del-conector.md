---
title: 'Las transacciones permanecen en estado de autorización pendiente a pesar de la aprobación del conector.'
slug: las-transacciones-permanecen-en-estado-de-autorizacion-pendiente-a-pesar-de-la-aprobacion-del-conector
status: PUBLISHED
createdAt: 2026-06-30T19:14:21.000Z
updatedAt: 2026-06-30T22:24:04.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-pending-authorization-despite-connector-approval
locale: es
kiStatus: Backlog
internalReference: 1427794
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Some payment transactions remain stuck in Pending Authorization even after the connector has returned Approved (200 OK) and the corresponding orders stay in "Payment Pending". The visible symptom is that the transaction status does not move forward and no “Started authorization retry for payment” interaction is recorded in the transaction timeline. This affects payment flows in the VTEX Payments Gateway where the worker responsible for progressing the transaction either errors before execution or is never called, leaving the order flow blocked.

## Simulación

It is not possible to simulate.

## Workaround

Transacción atascada en Autorización pendiente. Ejecute la siguiente API para avanzar manualmente la autorización: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referencia de la API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request