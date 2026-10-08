---
title: 'Orders cancelled when payment authorization gets no response from the Payment Gateway'
slug: orders-cancelled-when-payment-authorization-gets-no-response-from-the-payment-gateway
status: PUBLISHED
createdAt: 2026-10-08T17:32:21.000Z
updatedAt: 2026-10-08T17:32:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: orders-cancelled-when-payment-authorization-gets-no-response-from-the-payment-gateway
locale: en
kiStatus: Backlog
internalReference: 1471795
---

## Summary

Orders paid by card are cancelled about 100 seconds after being placed, even though the transaction was created and the payment data was received normally. In the order, the cancellation reason is `Creation error: The requested order couldn't be created. Try again. :: A communication error with the gateway has occurred`; in the transaction, the payment stays in `Received`, never reaches `Authorizing`, has no connector response (shown as `N/A (No payment authorization)` in transaction reports) and is cancelled about 5 minutes later with `Payment was successfully cancelled. This payment has no authorization.`. The acquirer has no record of the request and the shopper is not charged; the shopper waits on the payment-processing screen until the order fails.


It affects only the authorization step: This is not a general issue; other orders of the same account are authorized normally, and the same purchase placed again a few minutes later goes through.

## Simulation

It is not possible to simulate.

## Workaround

There is no workaround available. The shopper must place the order again.