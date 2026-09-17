---
title: 'Buyer sees a generic error instead of the order confirmation screen, and the order was created'
slug: buyer-sees-a-generic-error-instead-of-the-order-confirmation-screen-and-the-order-was-created
status: PUBLISHED
createdAt: 2021-09-03T18:50:10.000Z
updatedAt: 2026-09-17T16:09:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: buyer-sees-a-generic-error-instead-of-the-order-confirmation-screen-and-the-order-was-created
locale: en
kiStatus: No Fix
internalReference: 425142
---

## Summary

Intermittently, the last step of the purchase fails and the buyer sees a generic error screen instead of the order confirmation screen, even though the order was created successfully.
Because the confirmation screen is never shown, the buyer tends to go back one page. The cart is already empty, and since the buyer does not know the order exists, there is a risk of building a new cart and buying the same thing again.

## Simulation

Not reproducible — the scenario is intermittent.
To confirm a case, check that:

1. The buyer saw a generic error screen at the end of the purchase.
2. The order was created successfully.
3. The cart was empty when the buyer went back.

## Workaround

N/A