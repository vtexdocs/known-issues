---
title: 'Checkout UI breaks after new address is added on Address Form in Chile B2B stores'
slug: checkout-ui-breaks-after-new-address-is-added-on-address-form-in-chile-b2b-stores
status: PUBLISHED
createdAt: 2026-03-13T19:50:30.840Z
updatedAt: 2026-03-13T19:50:30.840Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-breaks-after-new-address-is-added-on-address-form-in-chile-b2b-stores
locale: en
kiStatus: Backlog
internalReference: 1378467
---

## Summary

In Chilean stores which uses the B2B Suite, after adding a new address through the UI's Address Form "Deliver in another address" option and inserting State and Neighborhood, it's not possible to insert Street and Number information through the UI, which breaks the interface and prevents the order placement (Finish Order button keeps loading indefinitely)

## Simulation

1. Log in to the B2B site in a non-custom workspace, with the native B2B theme, using a complete profile linked to an organization with addresses registered in its cost center
2. Create a cart with a random item and follow to the Shipping step
3. Select "Change delivery options" -> "Deliver in another address"
4. Select "State" and "Neighborhood" (in Chile, "Región" and "Comuna", respectively)
5.

One of the following scenarios will happen:

  1. The addressForm displays the option to add `number` and `street`, but, when adding them through the UI, the `/shippingData` request with this information does not occur
  2. The addressForm doesn't display the option to add `number` and `street`

In both cases, the last `/shippingData` request made updates the orderForm only with `neighborhood` and `state`; `street` and `number` remain empty, which prevents Order Placement.

## Workaround

There is no current workaround.