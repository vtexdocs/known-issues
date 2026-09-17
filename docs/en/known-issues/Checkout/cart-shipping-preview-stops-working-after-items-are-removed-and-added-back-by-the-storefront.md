---
title: 'Cart shipping preview stops working after items are removed and added back by the storefront'
slug: cart-shipping-preview-stops-working-after-items-are-removed-and-added-back-by-the-storefront
status: PUBLISHED
createdAt: 2021-03-24T18:07:23.000Z
updatedAt: 2026-09-17T15:40:41.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-shipping-preview-stops-working-after-items-are-removed-and-added-back-by-the-storefront
locale: en
kiStatus: No Fix
internalReference: 348152
---

## Summary

When items are removed from the cart and added back programmatically by the storefront, the shipping preview stops working. Either it is not displayed at all, or it shows an alert as if the postal code entered was not understood. Switching to the pickup option can break the step entirely.

## Simulation

1. Open a cart page on a store that removes and re-adds cart items programmatically
2. Remove all items from the cart.
3. Add an item back.
4. Check the shipping preview — it is either missing or shows an alert as if the postal code was not understood.
5. Switch to the pickup option — the step fails to load.

## Workaround

Reload the page — the problem disappears.