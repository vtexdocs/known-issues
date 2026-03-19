---
title: 'Refund limited incorrectly due to duplicated receipt from race condition (OMS invoice/restutions)'
slug: refund-limited-incorrectly-due-to-duplicated-receipt-from-race-condition-oms-invoicerestutions
status: PUBLISHED
createdAt: 2026-03-19T14:05:51.153Z
updatedAt: 2026-03-19T14:05:51.153Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: refund-limited-incorrectly-due-to-duplicated-receipt-from-race-condition-oms-invoicerestutions
locale: en
kiStatus: Backlog
internalReference: 1380918
---

## Summary

When issuing a refund via OMS invoice Input with restitutions, some orders are blocked with the error: “`Unable to using the restitution Refund more than xxx`” even though the payment transaction still shows a higher refundable balance. The visible symptom is a lower-than-expected refund limit calculated on the order. In the investigated case, engineering identified a duplicated receipt saved in the order JSON caused by a race condition in a worker that recovers receipts, which reduces the system’s perceived refundable amount. Affects merchants performing refunds via OMS restitutions on orders where the receipt recovery worker races with normal receipt persistence.

## Simulation

There is no known way to replicate this scenario.

## Workaround

-

Open a ticket to PS to remove the duplicated receipt from the order JSON so the refundable balance is recalculated correctly. This is not fixable via Admin or public APIs.





- If urgent refund is required before PS correction:
  -

Perform the remaining refund directly in the payment gateway dashboard to reimburse the shopper, and add an internal note on the order for reconciliation. Note that this will not adjust OMS refundable balances and should be regularized after Engineering correction.



- If you suspect this scenario:
  - Compare gateway totals refunded vs. the sum of receipts recorded on the order; look for duplicated amounts for the same event. Provide PS with timestamps, the order JSON, and the failing invoice Input payload.