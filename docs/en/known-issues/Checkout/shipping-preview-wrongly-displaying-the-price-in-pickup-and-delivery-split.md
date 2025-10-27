---
title: 'Shipping Preview wrongly displaying the price in pickup and delivery split'
slug: shipping-preview-wrongly-displaying-the-price-in-pickup-and-delivery-split
status: PUBLISHED
createdAt: 2025-10-16T20:37:24.820Z
updatedAt: 2025-10-16T20:37:24.820Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-price-in-pickup-and-delivery-split
locale: en
kiStatus: Fixed
internalReference: 1181570
---

## Summary


The delivery price displayed in the shipping preview (cart) is incorrect when there is a split between pick up, offered by seller A, and delivery, offered by seller B, and both sellers offer a delivery SLA with the same name. For example:


- Item 1, offered by Seller A, with SLAs: pickup X and delivery X
- Item 2, offered by Seller B, with SLAs: pickup Y and delivery X

When you select "Pick up in store":

- Item 1 has pickup X
- Item 2 has delivery X with a higher price than the one registered in the store.


#### Simulation



- Add two or more items to the cart, where a different seller fulfills each item;
- Make sure one of the items is not available for pickup;
- Both sellers must offer an SLA with the same name.\


#### Workaround


N/A


