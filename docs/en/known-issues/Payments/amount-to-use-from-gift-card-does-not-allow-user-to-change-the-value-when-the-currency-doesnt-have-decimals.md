---
title: "\"Amount to use\" from Gift card does not allow user to change the value when the currency doesn't have decimals"
slug: amount-to-use-from-gift-card-does-not-allow-user-to-change-the-value-when-the-currency-doesnt-have-decimals
status: PUBLISHED
createdAt: 2021-03-02T17:07:27.000Z
updatedAt: 2025-05-14T16:17:31.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: amount-to-use-from-gift-card-does-not-allow-user-to-change-the-value-when-the-currency-doesnt-have-decimals
locale: en
kiStatus: Backlog
internalReference: 339664
---

## Summary

When the user is in checkout, goes to the payment session, and chooses to use the credit, the value cannot be changed. The user is allowed to use the entire amount.

## Simulation

- Set the "Number of decimal digits to be considered" to 0 in the Orders General Configuration;
- Try changing the "Amount to use" in the payment step.

## Workaround

N/A