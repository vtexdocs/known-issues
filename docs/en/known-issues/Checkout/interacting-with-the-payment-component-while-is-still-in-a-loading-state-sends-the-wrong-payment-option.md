---
title: 'Interacting with the payment component while is still in a loading state sends the wrong payment option'
slug: interacting-with-the-payment-component-while-is-still-in-a-loading-state-sends-the-wrong-payment-option
status: PUBLISHED
createdAt: 2023-12-13T01:07:44.000Z
updatedAt: 2026-07-09T14:54:00.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-payment-component-while-is-still-in-a-loading-state-sends-the-wrong-payment-option
locale: en
kiStatus: No Fix
internalReference: 952086
---

## Summary

When a shopper selects a payment sub-option (e.g., EFECTY, PSE, Boleto) while the payment component is still loading on the checkout page, a race condition causes the wrong option to be sent to the orderForm. Instead of the option the shopper selected, the first available sub-option is submitted. The order fails to be created, and the shopper sees an error asking them to review their payment information.

## Simulation

- Add items to the cart and proceed to the payment step.
- While the payment component is still loading, click on a payment method that has multiple sub-options.
- Select any sub-option other than the first one in the list.
- Attempt to place the order.
- Observe that the order fails, the first sub-option in the list was submitted instead of the one selected.
- Note: the behavior is intermittent, as it depends on timing during the loading state.

## Workaround

Wait for the payment component to fully load before selecting a payment method or any of its sub-options. Proceed with the selection only after all options are visible and the loading indicator has disappeared.