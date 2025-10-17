---
title: Transactions stuck in "Canceling" and payments remain in "Authorized"
slug: transactions-stuck-in-canceling-and-payments-remain-in-authorized
status: PUBLISHED
createdAt: 2025-10-17T12:43:18.682Z
updatedAt: 2025-10-17T12:43:18.682Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-canceling-and-payments-remain-in-authorized
locale: en
kiStatus: Backlog
internalReference: 1309418
---

## Summary


Some transactions remain in the Canceling status while their corresponding payments stay in Authorized, without progressing to the final Finished or Canceled state. The issue occurs when the Payments Worker fails to update the payment status after receiving the cancellation request.


#### Simulation


It is not possible to simulate.


#### Workaround


Cancel the order manually on the OMS to prevent any issues with inventory management.


