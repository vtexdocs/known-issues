---
title: Broken carts when adding unavailable Assembly Option
slug: broken-carts-when-adding-unavailable-assembly-option
status: PUBLISHED
createdAt: 2025-10-15T20:35:37.698Z
updatedAt: 2025-10-15T20:35:37.698Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: broken-carts-when-adding-unavailable-assembly-option
locale: en
kiStatus: Backlog
internalReference: 1308431
---

## Summary



When adding an item with assembly options to a cart that:

- Has a known shopper location;
- Already has an available item in the cart with the same assembly option;
- Selects a seller that is not able to fulfill the added item due to this scenario.

The cart will enter a faulty state where it can't be accessed and no operation can be done on it.


#### Simulation



This is not easy to replicate, and multiple factors may impact seller selection.


- Create a cart and add location data;
- Add an available item with an assembly option;
- Add an item with the same assembly that selects a seller that is unable to fulfill the cart;
- A communication error will be thrown and the cart will enter the faulty state.


#### Workaround


N/A



