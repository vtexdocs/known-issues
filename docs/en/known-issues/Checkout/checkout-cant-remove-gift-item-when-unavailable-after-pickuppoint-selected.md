---
title: "Checkout can't remove gift item when unavailable after pickup-point selected"
slug: checkout-cant-remove-gift-item-when-unavailable-after-pickuppoint-selected
status: PUBLISHED
createdAt: 2021-05-04T13:58:58.000Z
updatedAt: 2023-01-30T16:37:08.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-cant-remove-gift-item-when-unavailable-after-pickuppoint-selected
locale: en
kiStatus: Backlog
internalReference: 363885
---

## Summary

When using an item in a cart with a gift promotion benefit, the item within cannot be removed if it is unavailable after pickup-point selection.

## Simulation

- create a cart with a regular item and a gift (to be offered through a promotion)
- choose to pickup in point, but through an option that doesn't have the gift item available
- it'll present the message to choose a different pickup option or remove the item from the cart, which is a button/link as a call to action
- clicking on the option to remove the item won't work due to the issue when the item is a gift

## Workaround

N/A