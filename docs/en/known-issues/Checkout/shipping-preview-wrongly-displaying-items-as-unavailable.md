---
title: 'Shipping preview wrongly displaying items as unavailable'
slug: shipping-preview-wrongly-displaying-items-as-unavailable
status: PUBLISHED
createdAt: 2025-10-16T20:41:37.843Z
updatedAt: 2025-10-16T20:41:37.843Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-items-as-unavailable
locale: en
kiStatus: Backlog
internalReference: 1194442
---

## Summary


In some cases the shipping preview component may display unsynchronised information from the cart, leading to a wrong state showing available items as unavailable for delivery.

Reloading the page fixes the shipping preview information.


#### Simulation


The issue may present itself in diferent contexts but can be reliably replicate following the steps below:

- Configure a `maxNumberOfWhiteLabelSellers` of `1`;
- Add an item `X` to the cart delivered by seller `A`;
- Add the address to the shipping preview component;
- Add an item to the cart that can be delivered from a diferent seller than `A` that is also able to deliver item `X` ;
- A new seller will be selected that can deliver both items;
- The shipping preview will show one item as unavailable for delivery.


#### Workaround


N/A



