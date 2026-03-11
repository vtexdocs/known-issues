---
title: 'Transaction stuck in cancelling and cancel/refund return “Object reference not set to an instance of an object”'
slug: transaction-stuck-in-cancelling-and-cancelrefund-return-object-reference-not-set-to-an-instance-of-an-object
status: PUBLISHED
createdAt: 2026-03-11T19:53:54.277Z
updatedAt: 2026-03-11T19:53:54.277Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-cancelling-and-cancelrefund-return-object-reference-not-set-to-an-instance-of-an-object
locale: en
kiStatus: Backlog
internalReference: 1376434
---

## Summary

Orders get stuck in the **“Canceling”** status when the related transaction remains in **“Cancelling”**. All attempts to cancel or refund the transaction fail, returning the error **"Object reference not set to an instance of an object."**

## Simulation

It is not possible to simulate.

## Workaround

To manually complete the post-purchase flow for a stuck transaction, execute one of the following APIs:

- **Cancel the transaction:**`POST /api/pvt/transactions/{transactionId}/cancellation-request` 🔗 API reference: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/cancellation-request
- **Refund the transaction**: `POST /api/pvt/transactions/{transactionId}/refunding-request` 🔗 API reference: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/refunding-request