---
title: "Save card doesn't work for PayU due to the amount of validation"
slug: save-card-doesnt-work-for-payu-due-to-the-amount-of-validation
status: PUBLISHED
createdAt: 2021-02-15T20:17:51.000Z
updatedAt: 2026-06-05T21:23:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: save-card-doesnt-work-for-payu-due-to-the-amount-of-validation
locale: en
kiStatus: No Fix
internalReference: 334891
---

## Summary

When trying to save a card using the PayU affiliation at stores from Argentina (Latam) they return an error because of the low amount that we charge to validate the credit card. Because of that, it is not possible to use this functionality.

## Simulation

1. Go to a store that uses PayU as an affiliation
2. Try to save the card on MyAccounts
3. Check the transaction that was generated due to that
4. It will have the following error:

    Connector Code: ERROR - Message: Unexpected response: property: order.description, message: El tamaño debe estar entre 1 y 255 - Source Message: property: order.description, message: El tamaño debe estar entre 1 y 255

##

## Workaround

There is no workaround for that at the moment.