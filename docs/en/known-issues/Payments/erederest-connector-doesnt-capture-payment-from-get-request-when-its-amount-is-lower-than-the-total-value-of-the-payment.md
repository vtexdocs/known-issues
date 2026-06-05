---
title: "ERedeRest connector doesn't capture payment from GET request when its amount is lower than the total value of the Payment"
slug: erederest-connector-doesnt-capture-payment-from-get-request-when-its-amount-is-lower-than-the-total-value-of-the-payment
status: PUBLISHED
createdAt: 2022-09-22T23:56:07.000Z
updatedAt: 2026-06-05T20:43:22.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: erederest-connector-doesnt-capture-payment-from-get-request-when-its-amount-is-lower-than-the-total-value-of-the-payment
locale: en
kiStatus: No Fix
internalReference: 664081
---

## Summary

In cases there's a partial cancellation, for example, in the Payment itself before starting settlement operation, our connector for ERedeRest is not able to advance to Payment Capture status because the amount captured by the provider doesn't correspond what is initially approved because there is a conditional in our connector code that says so.

## Simulation

Create a transaction with ERedeRest, right after authorization send a partial cancellation, and then capture the rest of the payment amount. In addition, this bug will only occur if the first request has a timeout or any way we can't get the first response, and then we will perform a new GET request to verify this payment, so even though the status comes as "Approved" we won't advance status because the amount returned is lower than the value of the transaction.

## Workaround

There is no workaround available.