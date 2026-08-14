---
title: 'Shipping preview loops when an item has multiple delivery options and the freight price changes between simulations'
slug: shipping-preview-loops-when-an-item-has-multiple-delivery-options-and-the-freight-price-changes-between-simulations
status: PUBLISHED
createdAt: 2026-08-14T22:40:27.000Z
updatedAt: 2026-08-14T22:40:27.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-loops-when-an-item-has-multiple-delivery-options-and-the-freight-price-changes-between-simulations
locale: en
kiStatus: Backlog
internalReference: 1448353
---

## Summary

The shipping preview enters an infinite loop of requests immediately after the ZIP code is loaded in the orderForm. Since the Lean Shipping automatically reselects the most economical option, it saves the new SLA via `shippingData`. The order total changes, `paymentData` is resubmitted to synchronize the amount, and the resulting `orderForm` triggers a new

## Simulation

that points to the cheapest SLA.

Because the freight price varies for the same SLA based on package size, the checkout UI never selects the cheapest SLA.


## **Simulation**
The cart must have:

- More than one item
- Multiple sellers - especially one seller for each item
- The carriers of each seller have lower prices for bigger packages. (_For example, carrier "fast" from seller X has a low price to deliver a package of 3 items, but a higher price for a package of one item_)

## Workaround

N/A