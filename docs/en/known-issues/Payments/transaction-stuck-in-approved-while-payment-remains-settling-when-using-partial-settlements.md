---
title: 'Transaction stuck in Approved while payment remains Settling when using partial settlements'
slug: transaction-stuck-in-approved-while-payment-remains-settling-when-using-partial-settlements
status: PUBLISHED
createdAt: 2025-11-05T14:31:41.076Z
updatedAt: 2025-11-05T14:31:41.076Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-approved-while-payment-remains-settling-when-using-partial-settlements
locale: en
kiStatus: Backlog
internalReference: 1319395
---

## Summary


Transactions become stuck in the Approved status when the corresponding payment remains in Settling, preventing the transactions from progressing through the expected flow.
The visible symptom is that capture requests are sent, but requests and actions do not align, and the order status does not move forward, even if the transaction is forced to settle.

In OMS, it is possible to observe a message that shows “An error with Gateway has occurred”.


#### Simulation


It's not possible to reproduce the error


#### Workaround


There is no workaround available.



