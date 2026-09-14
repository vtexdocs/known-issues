---
title: 'Split refund recorded but never sent to the provider (external tax)'
slug: split-refund-recorded-but-never-sent-to-the-provider-external-tax
status: PUBLISHED
createdAt: 2026-08-31T19:20:00.000Z
updatedAt: 2026-09-15T00:50:19.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: split-refund-recorded-but-never-sent-to-the-provider-external-tax
locale: en
kiStatus: Backlog
internalReference: 1454215
---

## Summary

On stores that use an external tax provider, refunding an already-invoiced seller sub-order fails inside the gateway. Nothing reaches the payment provider, and the shopper is not refunded — but a refund for the full amount is still recorded as an e-mail notification, with the refunded total at zero, so it looks like it worked. The transaction may stay in `Settling`.

Cause: the gateway recalculates how to split the refund between marketplace and seller, and that recalculation does not see the external tax. It over-credits the seller, then corrects the seller but not the marketplace, so the shares no longer add up to the amount being refunded, and the gateway rejects its own request: `Value in recipients (xx.xx) is different than operation value (xx.xx)`.

Cancelling the order before it is invoiced refunds normally.

## Simulation

### How to recognise it

- A refund on a split order never reached the shopper, and the connector says no request arrived.
- The transaction shows a refund for the full amount as an **e-mail notification**, with the refunded total still zero.
- The store's tax comes from an external provider, and the missing amount is close to the sub-order's tax.

###

### Steps
Needs a split-enabled marketplace account, a store with an external tax provider, and a third-party seller item with a commission.


1. Place an order mixing a marketplace item and a third-party seller item with a commission.
2. Let it be paid and captured.
3. In the seller account, start handling the seller sub-order.
4. Invoice it for the full value — a sales invoice.
5. Wait until it shows as invoiced. Invoicing before handling starts leaves the return refused with "pedido sem valor faturado".
6. Register the return for the same value — a return invoice. The refund fails here.


**Result:** the refund is rejected, the refunded total stays at zero, and only an e-mail notification is recorded.

## Workaround

There is no workaround available.