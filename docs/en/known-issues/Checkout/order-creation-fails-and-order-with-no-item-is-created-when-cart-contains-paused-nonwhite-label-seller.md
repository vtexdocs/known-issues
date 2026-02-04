---
title: 'Order creation fails and order with no item is created when cart contains paused non-white label seller'
slug: order-creation-fails-and-order-with-no-item-is-created-when-cart-contains-paused-nonwhite-label-seller
status: PUBLISHED
createdAt: 2026-02-04T22:04:16.101Z
updatedAt: 2026-02-04T22:04:16.101Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-creation-fails-and-order-with-no-item-is-created-when-cart-contains-paused-nonwhite-label-seller
locale: en
kiStatus: Backlog
internalReference: 1350336
---

## Summary



Orders fail at creation with the error `“Index was out of range. Must be non-negative and less than the size of the collection”` since one of the orders from the `orderGroup` is created with no items. This occurs when a shopper tries to add an SKU from a _**paused non-white label seller**_: the seller and item metadata are retained in the cart even though no item from this seller is added.


#### Simulation


Prerequisites:


- Have at least one paused non-white label seller in the account.

Steps:


-

Create a new cart. Add an SKU from a paused non-white-label seller. Result: the SKU is not added to `items[]`, but the paused seller is added to `sellers[]` and the item’s metadata is added to `itemMetadata[]` (these remain until place order).



-

Add a valid SKU from any active seller to the same cart. Proceed to fill Shipping, Profile, and Payment data. Try to place the order.



- Expected outcome: order placement fails with `“Index was out of range. Must be non-negative and less than the size of the collection”` and two orders are created in the `orderGroup`: one with the item from the active seller and other with no items, linked to the paused non-white-label seller.


#### Workaround



Do not add items from paused non-white-label sellers to carts. If needed, temporarily unpublish or ensure those sellers are not selectable in the storefront until reactivated.


