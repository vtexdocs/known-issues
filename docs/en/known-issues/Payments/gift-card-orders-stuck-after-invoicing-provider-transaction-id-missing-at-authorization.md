---
title: 'Gift card orders stuck after invoicing (provider transaction ID missing at authorization)'
slug: gift-card-orders-stuck-after-invoicing-provider-transaction-id-missing-at-authorization
status: PUBLISHED
createdAt: 2023-07-05T15:50:22.000Z
updatedAt: 2026-10-21T12:10:34.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-orders-stuck-after-invoicing-provider-transaction-id-missing-at-authorization
locale: en
kiStatus: Backlog
internalReference: 855864
---

## Summary

Orders paid fully or partly with a gift card from an external Gift Card Hub provider are invoiced but never move forward: the order stays in "Verifying invoice" and the gift card payment is never captured. It happens when the provider answers the create transaction request without a transaction ID. The payment is still approved, but every later capture attempt has no ID to reference and fails, and retrying does not help. Order stays in "Verifying invoice" (Verificando fatura) after the invoice is sent. Order history shows "An error with Gateway has occurred" (SalesOrderSystem009), repeated on every retry. Transaction stays "Approved" in VTEX Payments and never reaches "Finished"

## Simulation

1. Register a test gift card provider in the Gift Card Hub whose create transaction endpoint returns a success response with an empty transaction ID.
2. Place an order on a test store paying with a gift card from that provider.
3. Check the order: the payment is approved, and the order reaches "Ready for handling".
4. Invoice the order.
5. The order stays in "Verifying invoice" and its history shows "An error with Gateway has occurred" on each retry.

## Workaround

Provider (prevention): the create transaction response must always include a non-empty transaction ID, as the Gift Card Hub provider protocol requires.