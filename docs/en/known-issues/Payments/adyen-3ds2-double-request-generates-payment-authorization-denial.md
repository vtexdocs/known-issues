---
title: 'Adyen 3DS2 double request generates payment authorization denial'
slug: adyen-3ds2-double-request-generates-payment-authorization-denial
status: PUBLISHED
createdAt: 2023-08-18T23:12:05.000Z
updatedAt: 2026-07-02T15:40:28.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyen-3ds2-double-request-generates-payment-authorization-denial
locale: en
kiStatus: No Fix
internalReference: 884154
---

## Summary

When a 3DS2 payment is processed through the Adyen connector, a duplicate authorization request is occasionally sent. This causes the payment to be automatically denied by Adyen, and the order gets stuck in a failed state, even in cases where the charge was already processed on Adyen's side.

Authorization response:

`{"status":409,"errorCode":"704","message":"request already processed or in progress","errorType":"validation"}`

Following the message:

`Not expected Response [].`

Because VTEX does not receive a successful authorization response, no settlement is triggered, and an automated refund cannot be issued.

## Simulation

Unable to reproduce. No consistent pattern has been identified to trigger the duplicate request.

## Workaround

Not available.