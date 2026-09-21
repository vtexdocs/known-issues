---
title: 'Checkout UI fails to update orderForm when a cart has packages that share the same delivery window'
slug: checkout-ui-fails-to-update-orderform-when-a-cart-has-packages-that-share-the-same-delivery-window
status: PUBLISHED
createdAt: 2026-09-21T18:28:37.000Z
updatedAt: 2026-09-21T18:28:37.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-fails-to-update-orderform-when-a-cart-has-packages-that-share-the-same-delivery-window
locale: en
kiStatus: Backlog
internalReference: 1463913
---

## Summary

In carts with more than one scheduled delivery package, the delivery window is not saved for the second package when the same date and time window is selected for both. The checkout saves the window only for the first package, leaving the second without one.

As a result, the "Go to payment" button does not respond, no error message is displayed, and no request is sent to the checkout API. Although the UI shows a delivery window selected for both packages, only the first one is saved in the orderForm.

This affects carts where items are split into two packages, each with its own scheduled delivery option, such as items shipped from different warehouses or under different delivery conditions.

## Simulation

- Enable scheduled delivery for two SLAs/shipping methods.
- Add two items to the cart - each one should receive different shipping methods.
- Go to the page `#/shipping`.
- Select the same scheduled delivery date and time for both packages.
- Try to proceed to payment.


**Expected result:** Shopper should be able to proceed to payment.

**Actual result:** Shopper cannot proceed to payment.

## Workaround

Select a different delivery window for the second package and then select the desired delivery window again.