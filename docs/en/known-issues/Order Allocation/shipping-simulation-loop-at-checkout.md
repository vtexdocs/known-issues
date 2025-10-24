---
title: 'Shipping Simulation Loop at Checkout'
slug: shipping-simulation-loop-at-checkout
status: PUBLISHED
createdAt: 2025-10-16T20:44:56.291Z
updatedAt: 2025-10-16T20:44:56.291Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: shipping-simulation-loop-at-checkout
locale: en
kiStatus: Backlog
internalReference: 1204287
---

## Summary


The problem occurs when a shopping cart, in an account configured not to allow cargo splitting, goes through the shipping flow and initially, only some of the items in that cart share the same SLA, leaving others without a delivery option.

However, during the payments stage, the system splits the purchase into multiple orderForms based on the SLA IDs, which triggers a new freight simulation. This recalculation can make delivery options available for previously unavailable items, changing the cart price and triggering yet another simulation.

The result is a continuous loop, where the system alternates between possible and impossible delivery states due to SLA restrictions and order splitting.


#### Simulation


** **
Setting up an account to not allow cargo splittings (in logistics).

Create a cart with items that have different SLAs, resulting in the absence of a shipping option for some of them.

Proceed to the payment stage and see that the order is split into multiple orderForms.

Check that, with this split, new SLAs are returned for the previously undeliverable items.

Note that this change impacts the cart price, triggering new simulations and potentially leading the checkout into an infinite loop.


#### Workaround


** **
If possible, enable permission of cargo splitting (in logistics system)



