---
title: 'Shipping cost calculation button has to be clicked twice'
slug: shipping-cost-calculation-button-has-to-be-clicked-twice
status: PUBLISHED
createdAt: 2021-05-24T16:04:02.000Z
updatedAt: 2026-09-17T16:11:54.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-cost-calculation-button-has-to-be-clicked-twice
locale: en
kiStatus: No Fix
internalReference: 372268
---

## Summary

In checkout, the shipping cost calculation sometimes does not run when the buyer clicks the button the first time — the click only highlights the button, and the calculation runs on the second click. Intermittent. The expected behavior is for the calculation to happen automatically after the address is entered.

## Simulation

1. Open a cart with any products in it.
2. Go to the address step and enter an address (e.g. "Avenida la Marina, 2400, San Miguel, Peru").
3. Click the shipping cost calculation button — nothing is calculated, the button is only highlighted.
4. Click the button again — the calculation runs.
If the button works on the first click, leave the checkout flow and come back to checkout: the button then stops doing the validation it was doing before.

## Workaround

N/A