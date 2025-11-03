---
title: 'Transactions stuck in "Canceling" and payments remain in "Settling"'
slug: transactions-stuck-in-canceling-and-payments-remain-in-settling
status: PUBLISHED
createdAt: 2025-11-03T17:59:19.575Z
updatedAt: 2025-11-03T17:59:19.575Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-canceling-and-payments-remain-in-settling
locale: en
kiStatus: Backlog
internalReference: 1317866
---

## Summary


Payments may remain in the Settling status and related transactions get stuck in Canceling, not advancing to Finished or Canceled. This issue occurs in cases involving partial captures, refunds, or cancellations. During these flows, the settlement amounts in the actions and requests arrays are not properly aligned. When the total amounts from both arrays do not match, the payment cannot complete the settlement process. As a result, the payment remains in "Settling" and the related transaction gets stuck in "Canceling".


#### Simulation


It is not possible to simulate.


#### Workaround


N/A.



