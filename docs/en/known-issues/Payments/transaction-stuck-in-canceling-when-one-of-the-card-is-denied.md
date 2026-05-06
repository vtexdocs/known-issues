---
title: 'Transaction stuck in canceling when one of the card is denied'
slug: transaction-stuck-in-canceling-when-one-of-the-card-is-denied
status: PUBLISHED
createdAt: 2021-09-13T04:30:47.000Z
updatedAt: 2025-04-22T20:02:43.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-canceling-when-one-of-the-card-is-denied
locale: en
kiStatus: No Fix
internalReference: 429082
---

## Summary

When an order is placed with two card, where one is approved and the other is refused, it happens that the order is stuck with captured value and is no automatically canceled. The transaction locked in is cancelling

##

## Simulation

1. Make a purchase with two credit cards.
2. One of the cards is declined.

## Workaround

There is no solution to complete the cancellation, but it is possible to refund the amount captured.


## **Internal Notes**
When trying to cancel the transaction, the error occurs:

    {"error": {"code": "1","message": "Object reference not set to an instance of an object.","exception": null }}

Even though the correct value and cart data are passed.