---
title: 'Wrong delivery date shown when editing scheduled delivery of distinct items'
slug: wrong-delivery-date-shown-when-editing-scheduled-delivery-of-distinct-items
status: PUBLISHED
createdAt: 2021-01-28T18:04:07.000Z
updatedAt: 2026-09-17T16:14:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: wrong-delivery-date-shown-when-editing-scheduled-delivery-of-distinct-items
locale: en
kiStatus: No Fix
internalReference: 328873
---

## Summary

After the buyer picks different scheduled delivery dates for two distinct items, goes to the payment step and comes back to edit the delivery, the dates are shown incorrectly on screen. Only the display is wrong — the order keeps the dates that were actually selected.

## Simulation

1. Have scheduled delivery available for 2 distinct items.
2. Add both items to the cart.
3. Choose the scheduled delivery option.
4. Select different delivery dates for each item — the dates are shown correctly.
5. Save and go to the payment step.
6. Go back to edit the delivery information — the dates are now shown incorrectly (in the reported case, the second item's window of 12h–18h was displayed wrong).

## Workaround

N/A