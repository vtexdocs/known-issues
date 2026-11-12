---
title: 'Saved-card payment uses the BIN of a previously typed card in Checkout (card UI keeps the typed card number after switching to a saved card)'
slug: savedcard-payment-uses-the-bin-of-a-previously-typed-card-in-checkout-card-ui-keeps-the-typed-card-number-after-switching-to-a-saved-card
status: PUBLISHED
createdAt: 2026-11-12T17:39:36.000Z
updatedAt: 2026-11-12T17:39:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: savedcard-payment-uses-the-bin-of-a-previously-typed-card-in-checkout-card-ui-keeps-the-typed-card-number-after-switching-to-a-saved-card
locale: en
kiStatus: Backlog
internalReference: 1484421
---

## Summary

If a shopper types a new card number and then switches to a saved card, the payment is created with a payment rule chosen for the typed card, but the saved card is the one charged. This happens because the card UI keeps the typed card number after the switch and sends it to the Gateway along with the saved card’s `accountId`. The Gateway picks the payment rule from the first 6 digits of that number. As a result, the shopper can get an installment option or issuer-restricted rule meant for another bank’s card, and the acquirer may decline the payment. Switching between two saved cards, with no number typed, is not affected.

## Simulation

With a logged-in shopper that has saved cards, and a payment rule restricted to a specific issuer (e.g. offering more installments):

1. In Payment → Credit card, choose to use a new card and type a card from the issuer of the restricted rule.
2. Go back to the saved card list and select a saved card from another issuer.
3. Place the order.

The installments shown on screen are recalculated for the saved card, but the payment is created with the restricted rule of the typed card’s issuer, while the saved card is charged.

## Workaround

If the shopper typed a card number and then wants to pay with a saved card:

- reload the payment page before selecting the saved card, **or**
- clear the card number field before going back to the saved card list.