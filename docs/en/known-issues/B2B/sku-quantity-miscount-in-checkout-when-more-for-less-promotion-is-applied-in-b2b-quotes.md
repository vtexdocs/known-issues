---
title: 'SKU quantity miscount in checkout when More for Less promotion is applied in B2B Quotes'
slug: sku-quantity-miscount-in-checkout-when-more-for-less-promotion-is-applied-in-b2b-quotes
status: PUBLISHED
createdAt: 2025-11-17T17:41:31.944Z
updatedAt: 2025-11-17T17:41:31.944Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: sku-quantity-miscount-in-checkout-when-more-for-less-promotion-is-applied-in-b2b-quotes
locale: en
kiStatus: Backlog
internalReference: 1281922
---

## Summary


When a more for less promotion (or any promotion that splits items) is applied in B2B Quotes for a SKU, once you go to checkout, the first group of the SKU splitted will remain in the cart, but the second won't. In other words, cart checkout miscalculates the total units for the SKU.


#### Simulation



- Create a quote with 12 units of a SKU that has a more for less promotion applied for each 10 units.
- The B2B Quotes app will split the SKU in 1 item with 10 units (and the promotion applied) and 1 item with 2 units (with the total price without promotion).
- Go to checkout.
- The first item with 10 units will appear at checkout, the second (with 2 units) won't.


#### Workaround


NA


