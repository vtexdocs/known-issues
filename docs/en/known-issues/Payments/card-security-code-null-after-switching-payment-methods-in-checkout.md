---
title: 'Card Security Code Null After Switching Payment Methods in Checkout'
slug: card-security-code-null-after-switching-payment-methods-in-checkout
status: PUBLISHED
createdAt: 2021-10-05T16:35:35.000Z
updatedAt: 2026-06-19T16:01:07.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: card-security-code-null-after-switching-payment-methods-in-checkout
locale: en
kiStatus: Backlog
internalReference: 442772
---

## Summary

When a user fills in the card security code for a credit or debit card, then switches to a different payment method and switches back, the security code appears to still be filled in the UI — but it's actually empty. This causes different outcomes depending on the card type:

- **Credit Card:** The transaction fails to start and an error is shown at checkout before it is sent to provider
- **Debit Card:** The transaction starts and it is sent to provider without card security code

## Simulation

1. Create a cart and complete profile and logistics info until you reach the payment step.
2. Fill in card details on the native card interface (credit or debit).
3. Switch to a different payment method.
4. Switch back to the card from step 2 — notice the security code field still looks filled.
5. Complete any remaining required fields without touching the security code.
6. Attempt to place the order.

## Workaround

After switching payment methods, clear the security code field and re-enter it before placing the order.