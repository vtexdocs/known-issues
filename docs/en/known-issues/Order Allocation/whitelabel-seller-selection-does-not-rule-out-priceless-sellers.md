---
title: 'Whitelabel seller selection does not rule out priceless sellers'
slug: whitelabel-seller-selection-does-not-rule-out-priceless-sellers
status: PUBLISHED
createdAt: 2021-01-26T17:03:43.000Z
updatedAt: 2026-09-21T17:23:22.000Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: whitelabel-seller-selection-does-not-rule-out-priceless-sellers
locale: en
kiStatus: Fixed
internalReference: 327853
---

## Summary

The logic in choosing a whitelabel seller does not rule out sellers where the product is priceless. In a scenario where there is more than one applicable seller, the checkout returned the seller with `availability: "withoutPriceFulfillment"`. Making the UI intermittent, sometimes simulating with a seller that has no price on the product, sometimes simulating another seller with price on the product. In this way, the user received notification that he could not buy the product, but still managed to complete the purchase (thanks to the seller that there was a price).

The checkout should immediately discard the seller that has no price in this context, returning only what has a price.

Note: This behavior can cause whitelabel sellers that have no price to be chosen over sellers that have a price, which will present you as unavailable while it could be provided from another option.

## Simulation

Have two sellers for a respective product, where one seller has a registered price and the other does not.

## Workaround

The store must either enable price inheritance OR remove from stock.
Once this is done, it is important to be aware that this does not influence the seller selection algorithm, as it does not consider the price. So one thing is separate from the other.