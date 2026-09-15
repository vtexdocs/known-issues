---
title: 'Checkout shipping step does not advance to payments step in Argentina'
slug: checkout-shipping-step-does-not-advance-to-payments-step-in-argentina
status: PUBLISHED
createdAt: 2021-01-15T18:35:41.000Z
updatedAt: 2026-09-15T17:30:56.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-shipping-step-does-not-advance-to-payments-step-in-argentina
locale: en
kiStatus: Backlog
internalReference: 324775
---

## Summary

In Argentine stores, some postal codes leave the shopper stuck on the shipping step: the address is auto-completed from the postal code, but the resolved `city` is not an accepted value in the `vtex.address-form` ARG country rules, so the address never validates. Because the `city` field is auto-completed, it is not rendered in the form; the shopper has no invalid field to correct, and no error message is shown.
The address is therefore never persisted and the step silently refuses to advance. Only postal codes whose city resolves to a single value are affected — codes that resolve to multiple cities render a `Ciudad` select and work normally.

## Simulation

- In an ARG store, add any available SKU to the cart and complete the profile step.
- On the shipping step, enter an affected postal code (e.g. `1687`).
- Fill street and number. No city field is rendered.
- Click "Go to payment" — nothing happens; no error is shown.
- Control: repeat with an unaffected postal code (e.g. `1688`) — the step advances normally.
- To confirm a reported case: check that `shippingData.address.street` is still `null` in the orderForm after the shopper filled the form.

## Workaround

There is no workaround available.