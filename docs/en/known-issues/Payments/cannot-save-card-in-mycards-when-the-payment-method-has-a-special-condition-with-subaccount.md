---
title: 'Cannot save card in MyCards when the payment method has a special condition with subaccount'
slug: cannot-save-card-in-mycards-when-the-payment-method-has-a-special-condition-with-subaccount
status: PUBLISHED
createdAt: 2025-08-29T22:03:35.000Z
updatedAt: 2026-09-21T19:16:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: cannot-save-card-in-mycards-when-the-payment-method-has-a-special-condition-with-subaccount
locale: en
kiStatus: Backlog
internalReference: 1283953
---

## Summary

When the payment method used for the transaction of card validation has a special condition of the type "account names" (that includes a subaccount), the card cannot be saved in MyCard.

## Simulation

1. Create a payment method that has a special condition for the "account names" and select more than 1 account.
2. Use this payment method for the transactions of card validation (the standard $1,50 transaction).
3. Try to save a card in My Cards, from My Account.
4. The card will not be saved and an error message will appear.

## Workaround

There is no workaround for this issue. We recommend that the merchant uses a different payment method for card validation transactions, without the special condition of the type "account names".