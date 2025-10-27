---
title: 'Payment status stuck and transaction canceling after risk analysis rejected'
slug: payment-status-stuck-and-transaction-canceling-after-risk-analysis-rejected
status: PUBLISHED
createdAt: 2025-10-14T19:17:16.888Z
updatedAt: 2025-10-14T19:17:16.888Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-status-stuck-and-transaction-canceling-after-risk-analysis-rejected
locale: en
kiStatus: Backlog
internalReference: 1163213
---

## Summary


The payment is stuck, and the transaction status is canceling after the risk analysis is rejected.



#### Simulation


When the auto-settle process occurs before the risk analysis is complete, the payment status is updated to "finished," while the transaction remains in the "analysing risk" state.

If the risk analysis results in a "risk-rejected" outcome, the cancellation process is triggered. However, once a transaction has been settled cannot be canceled.

As a result, transactions get stuck in the "canceling" status, even after a successful refund, while the payment status remains "finished."


#### Workaround



Cancel the order manually on the OMS to prevent any issues with inventory management.



