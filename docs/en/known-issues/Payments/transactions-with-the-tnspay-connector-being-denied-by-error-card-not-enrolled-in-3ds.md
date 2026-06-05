---
title: 'Transactions with the TNSPay connector being denied by error: Card not ENROLLED in 3DS'
slug: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
status: PUBLISHED
createdAt: 2022-03-14T16:21:44.000Z
updatedAt: 2026-06-05T21:21:11.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
locale: en
kiStatus: No Fix
internalReference: 541687
---

## Summary

When using the **TNSPay** connector with **3DS authentication** configured, a race condition causes the authorization method to be called **twice within 2 seconds**. The second authorization response only arrives after the transaction has already entered the cancellation flow, resulting in the transaction being denied with the error:

> `Card not ENROLLED in 3DS`

The payout fields also end up in an inconsistent state as a consequence of the duplicate authorization attempt.
The issue is identifiable by the following log appearing twice at the start of the transaction:

> `Authorize using 3DS given the configurations 3DS: always MinimumValue`

## Simulation

Unable to reproduce in a controlled environment. The race condition occurs intermittently in production.

## Workaround

There is no workaround