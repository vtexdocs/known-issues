---
title: 'Transactions with the TNSPay connector being denied by error: Card not ENROLLED in 3DS'
slug: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
status: PUBLISHED
createdAt: 2025-11-14T19:34:37.601Z
updatedAt: 2025-11-14T19:34:37.601Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
locale: en
kiStatus: Backlog
internalReference: 541687
---

## Summary


The default is that they are canceled and we send two Authorize 3Ds Requests, and you still haven't received the Authorize Request response.
The second response only appears after it has already entered the cancellation flow.

The issue is due to a race condition, and this causes the payout fields to be inconsistent.
At the beginning of the process, the first log is

`Authorize using 3DS given the configurations 3DS: always MinimumValue`

The authorization method was called 2 times within 2 seconds.


#### Simulation


Cannot simulate


#### Workaround


There is no workaround