---
title: 'Transaction stuck in Approved with settled payments - blocking invoicing'
slug: transaction-stuck-in-approved-with-settled-payments-blocking-invoicing
status: PUBLISHED
createdAt: 2026-09-15T13:38:03.000Z
updatedAt: 2026-09-15T13:38:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-approved-with-settled-payments-blocking-invoicing
locale: en
kiStatus: Backlog
internalReference: 1461229
---

## Summary

A transaction whose payments were settled stays in `Approved` and never reaches `Finished`, leaving the order stuck in "checking invoice status". The settlement is recorded, and the connector responds successfully, but the payment never advances out of `Authorized` or `Settling`. Because a settlement record already consumes the payment's full value, every later invoice finds no balance left and fails.
Visible symptoms:

- Order stuck in "checking invoice status" / "verifying invoice"
- Transaction in `Approved`, payment in `Authorized` or `Settling` on `/payments`, despite a settlement already recorded
- Response from Gateway settlement: `The payment with Id = {paymentId} was not settled because the settlement value was 0.00` (`HTTP 500`)
- OMS: `{"error":{"code":"001","message":"An error with Gateway has occurred"}}`

On single-payment orders, the defect is silent — the transaction just sits in `Approved`. It only becomes blocking when the order generates more than one invoice.

## Simulation

Not reproducible on demand.
To confirm a case is this bug, check all three:

1. `GET /api/pvt/transactions/{transactionId}/settlements` → `actions` sum to the full authorized value, `requests` is `[]`
2. `GET /api/pvt/transactions/{transactionId}/payments` → a payment still in `"status": "Authorized"` or `"Settling"` while its `settlement` field is already populated
3. `GET /api/pvt/transactions/{transactionId}/capabilities` → `"minimumValue": 0.01` even though settlements exist

## Workaround

There is no workaround available.