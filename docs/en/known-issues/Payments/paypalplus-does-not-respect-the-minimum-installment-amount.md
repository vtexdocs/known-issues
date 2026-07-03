---
title: 'PayPalPlus does not respect the minimum installment amount'
slug: paypalplus-does-not-respect-the-minimum-installment-amount
status: PUBLISHED
createdAt: 2021-05-18T21:34:28.000Z
updatedAt: 2026-07-03T15:23:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: paypalplus-does-not-respect-the-minimum-installment-amount
locale: en
kiStatus: No Fix
internalReference: 370271
---

## Summary

The minimum installment amount configured in a PayPalPlus payment condition is not enforced at checkout. Customers are presented with installment options below the configured minimum, regardless of the value set in the payment condition settings.
This happens because PayPalPlus sends the available installment options inside its authorization response, VTEX does not send a request specifying the restriction. Since the installment rules are defined by PayPal on their side, VTEX cannot override them.
A secondary behavior is also observed: when an existing minimum installment value is modified or removed, the checkout may continue to enforce the previous value even after saving and re-indexing.

## Simulation

1. Configure a PayPalPlus payment condition with a minimum installment amount (e.g., R$30).
2. Add a product to the cart whose total would allow installments below that minimum.
3. Proceed to checkout and select PayPalPlus as the payment method.
4. Observe that installment options below the configured minimum are still displayed.

## Workaround

Not available for the core limitation, PayPal controls its own installment rules and VTEX cannot override them.
For cases where a previously set minimum persists after being updated or removed: delete the existing payment condition and create a new one from scratch with the desired configuration. Editing the existing condition may not propagate the change correctly.