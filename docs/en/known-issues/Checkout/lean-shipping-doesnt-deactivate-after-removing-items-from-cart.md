---
title: "Lean Shipping doesn't deactivate after removing items from cart"
slug: lean-shipping-doesnt-deactivate-after-removing-items-from-cart
status: PUBLISHED
createdAt: 2023-10-09T14:19:49.000Z
updatedAt: 2023-10-09T14:19:49.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-doesnt-deactivate-after-removing-items-from-cart
locale: en
kiStatus: Backlog
internalReference: 916461
---

## Summary

Lean Shipping doesn't deactivate automatically after removing items from the cart, keeping only one where it should show all options.

## Simulation

- Add 2 or more items from different sellers that have different SLAs;
- Lean shipping will be active;
- Remove all items, keeping only 1;
- Lean shipping will be still active.

## Workaround

Refresh the page