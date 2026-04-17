---
title: 'Partial loyalty credit input wrong behavior Checkout UI when commercial policy has 0 decimal places'
slug: partial-loyalty-credit-input-wrong-behavior-checkout-ui-when-commercial-policy-has-0-decimal-places
status: PUBLISHED
createdAt: 2026-04-17T21:12:55.811Z
updatedAt: 2026-04-17T21:12:55.811Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: partial-loyalty-credit-input-wrong-behavior-checkout-ui-when-commercial-policy-has-0-decimal-places
locale: en
kiStatus: Backlog
internalReference: 1394857
---

## Summary

Customers cannot set a partial loyalty credit amount in Checkout: the input field visually remains at 0 and accepts only a single digit, despite the API receiving the typed value. This occurs when the store’s commercial policy is configured with zero decimal digits. The formatting layer removes the decimal portion and keeps thousand separators, and the input parser then strips non-digits, resulting in an incorrect cent value length and UI desynchronization. Affects shoppers using loyalty credit with policies set to 0 decimals in Checkout UI.

## Simulation

Prerequisites:

- Commercial policy with decimal digits configured as 0.
- Loyalty/Gift Card partial usage enabled on Checkout UI.

Steps:

1. Log in to the innew account with the provided user and open the referenced orderFormId.
2. Attempt to change the partial credit amount in the loyalty credit input.
3. Observe that the UI input change into a inexpected way, and only one digit appears to be considered, while network requests show the API receiving the typed value.

## Workaround

Is there a workaround for this bug? If yes, describe it here. If not, write "N/A" or "There is no workaround available.". Do not remove this section if there is no workaround, please.