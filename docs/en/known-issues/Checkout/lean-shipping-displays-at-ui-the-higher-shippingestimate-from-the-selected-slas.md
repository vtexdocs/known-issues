---
title: 'Lean shipping displays at UI the higher shippingEstimate from the selected SLAs'
slug: lean-shipping-displays-at-ui-the-higher-shippingestimate-from-the-selected-slas
status: PUBLISHED
createdAt: 2025-11-12T02:22:20.968Z
updatedAt: 2025-11-12T02:22:20.968Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-displays-at-ui-the-higher-shippingestimate-from-the-selected-slas
locale: en
kiStatus: Backlog
internalReference: 1126188
---

## Summary


In carts that have package split between delivery and pickup, Lean shipping displays at the UI the `shippingEstimate` of the cheapest delivery option available for at least one of the items from the Pickup package instead of the one from the selected Pickup Option. In the known cases, the delivery SLA displayed was the highest `shippingEstimate` among the selected SLAs.

As an example: there are four products in the cart and three of them have pickup as `selectedSla` and `4h` of `shippingEstimate`. The last item will be delivered from store, has `3bd` of `shippingEstimate` and this SLA is the cheapest delivery SLA available for at least one of the items from the Pickup Package. At checkout UI, the `shippingEstimate` will be:

-pickup package: `3bd`
-delivery package: `3bd`

The shipping estimate for pickup is `3bd`, even though this isn't the right information.


#### Simulation


1- Create a cart with products from the same seller and distinct delivery channels.
2- Insert the postal code
3- try to select a pickup in point.


#### Workaround


N/A



