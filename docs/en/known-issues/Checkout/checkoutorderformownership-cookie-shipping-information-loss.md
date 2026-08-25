---
title: 'CheckoutOrderFormOwnership Cookie shipping information loss'
slug: checkoutorderformownership-cookie-shipping-information-loss
status: PUBLISHED
createdAt: 2026-08-25T23:44:17.000Z
updatedAt: 2026-08-25T23:44:17.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkoutorderformownership-cookie-shipping-information-loss
locale: en
kiStatus: Backlog
internalReference: 1452215
---

## Summary

In some cases, when advancing from checkout's `shipping` step to `payment` step, `CheckoutOrderFormOwnership` cookie loses address information leading to shipping data being masked.

## Simulation

Simulation in this case is not completely straightforward, the issue may or may not present itself.


- In a store with `CheckoutOrderFormOwnership` cookie validation active;
- Fill shipping information and proceed to payment step;
- Shipping/Address data will be masked.

## Workaround

N/A. Contact Product Support asking to deactivate and report which of the cases it fits.