---
title: 'Transacción bloqueada en la cancelación y devolución de cancelación/reembolso «Referencia de objeto no establecida en una instancia de un objeto».'
slug: transaccion-bloqueada-en-la-cancelacion-y-devolucion-de-cancelacionreembolso-referencia-de-objeto-no-establecida-en-una-instancia-de-un-objeto
status: PUBLISHED
createdAt: 2026-03-11T19:54:00.259Z
updatedAt: 2026-03-11T19:54:00.259Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-cancelling-and-cancelrefund-return-object-reference-not-set-to-an-instance-of-an-object
locale: es
kiStatus: Backlog
internalReference: 1376434
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos se quedan bloqueados en el estado **«Cancelando»** cuando la transacción relacionada permanece en **«Cancelando»**. Todos los intentos de cancelar o reembolsar la transacción fallan, devolviendo el error **«Referencia de objeto no establecida en una instancia de un objeto».**

## Simulación

No es posible simularlo.

## Workaround

Para completar manualmente el flujo posterior a la compra de una transacción atascada, ejecute una de las siguientes API:

- **Cancelar la transacción:**`POST /api/pvt/transactions/{transactionId}/cancellation-request` 🔗 Referencia de la API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/cancellation-request
- **Reembolsar la transacción**: `POST /api/pvt/transactions/{transactionId}/refunding-request` 🔗 Referencia de la API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/refunding-request