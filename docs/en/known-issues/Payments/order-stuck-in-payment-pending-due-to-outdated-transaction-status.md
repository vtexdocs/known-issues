---
title: 'Order Stuck in Payment Pending Due to Outdated Transaction Status'
slug: order-stuck-in-payment-pending-due-to-outdated-transaction-status
status: PUBLISHED
createdAt: 2025-10-01T12:55:43.235Z
updatedAt: 2025-10-01T12:55:43.235Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-payment-pending-due-to-outdated-transaction-status
locale: en
kiStatus: Fixed
internalReference: 1195265
---

## Summary


Sometimes, when the OMS checks the gateway for the transaction status before changing the order to Payment Approved, the status is previous from the expected one, which should be **Approved.** Making the order stays stuck in Payment Pending status.


#### Simulation


The error is intermittent and cannot be simulated.


#### Workaround


Open a ticket with VTEX requesting the payment approved notification to be resent to OMS.



