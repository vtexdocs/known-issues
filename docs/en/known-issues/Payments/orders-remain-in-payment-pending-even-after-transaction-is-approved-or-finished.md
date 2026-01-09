---
title: 'Orders remain in "Payment Pending" even after transaction is approved or finished'
slug: orders-remain-in-payment-pending-even-after-transaction-is-approved-or-finished
status: PUBLISHED
createdAt: 2026-01-09T17:51:44.789Z
updatedAt: 2026-01-09T17:51:44.789Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: orders-remain-in-payment-pending-even-after-transaction-is-approved-or-finished
locale: en
kiStatus: Backlog
internalReference: 1349138
---

## Summary


Orders may remain stuck in Payment Pending even though the related transaction has already been approved or finalized in Payments.

This happens when the OMS checks the gateway for the transaction status before updating the order to Payment Approved and receives a status that is earlier than the expected Approved state. As a result, the order does not progress, even though the payment notification has already been successfully sent to the OMS.


#### Simulation


It is not possible to simulate.


#### Workaround


Open a ticket for Product.


