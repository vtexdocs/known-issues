---
title: 'Shipping Preview wrongly showing unavailability message for pick-up in a cart with gift'
slug: shipping-preview-wrongly-showing-unavailability-message-for-pickup-in-a-cart-with-gift
status: PUBLISHED
createdAt: 2023-03-03T19:53:54.000Z
updatedAt: 2025-01-29T14:16:35.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-showing-unavailability-message-for-pickup-in-a-cart-with-gift
locale: en
kiStatus: Backlog
internalReference: 764457
---

## Summary

When you add the "selectedSla" (it must be a pick-up) and "selectedAddresses" via API in a cart with gift promotion, the store is configured for geolocation and uses polygons, the shipping preview will show an unavailability message for the pick-up, which it was selected via API. This behavior will impact the purchase flow since it won't allow moving forward after the shipping.

## Simulation

- Configure geolocation and polygons;
- Configure a gift promotion for an item;
- Add the item to the cart;
- Send the "selectedSla" as pick-up and "selectedAddresses" via API;
- Access the cart in the UI, you will see an unavailability message even though the API is correct.

## Workaround

Switch the option to Delivery and go back to Pick-Up