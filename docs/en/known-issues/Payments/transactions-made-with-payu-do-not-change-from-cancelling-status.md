---
title: 'Transactions made with PayU do not change from cancelling status'
slug: transactions-made-with-payu-do-not-change-from-cancelling-status
status: PUBLISHED
createdAt: 2021-02-25T15:56:28.000Z
updatedAt: 2026-06-05T21:12:59.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-made-with-payu-do-not-change-from-cancelling-status
locale: en
kiStatus: No Fix
internalReference: 338124
---

## Summary

When a transaction using the **PayU** connector enters **"Canceling"** status, it fails to progress to **"Canceled"**. This happens because the PayU connector returns the response code `PENDING_TRANSACTION_REVIEW` with the message `PENDING_REVIEW`, which VTEX Gateway does not recognize as a valid cancellation response — leaving the transaction permanently stuck in "Canceling".

## Simulation

Unable to reproduce in a controlled environment. The issue does not occur on all accounts and manifests intermittently in production. Transactions stuck in "Canceling" can be identified by filtering by status in the Gateway admin panel.

## Workaround

Manually trigger the transaction cancellation via API:

    POST /api/payments/pvt/transactions/{transactionId}/cancellation-request

Reference: https://developers.vtex.com/vtex-developer-docs/reference/transaction-flow#cancelthetransaction