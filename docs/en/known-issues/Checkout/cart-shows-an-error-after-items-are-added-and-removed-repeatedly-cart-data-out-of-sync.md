---
title: 'Cart shows an error after items are added and removed repeatedly (cart data out of sync)'
slug: cart-shows-an-error-after-items-are-added-and-removed-repeatedly-cart-data-out-of-sync
status: PUBLISHED
createdAt: 2021-11-30T17:16:13.000Z
updatedAt: 2026-09-17T15:32:07.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-shows-an-error-after-items-are-added-and-removed-repeatedly-cart-data-out-of-sync
locale: en
kiStatus: No Fix
internalReference: 478063
---

## Summary

After the buyer adds and removes items from the cart several times, the cart shows an error message. At that point, the cart is out of sync: it attempts to update items that are no longer in the cart.

## Simulation

Not reproducible on demand. Every test made before this KI was registered added and removed items with no problem

1. Items added and removed from the cart several times.
2. An error message shown in the cart right after that sequence.

## Workaround

There is no workaround available.