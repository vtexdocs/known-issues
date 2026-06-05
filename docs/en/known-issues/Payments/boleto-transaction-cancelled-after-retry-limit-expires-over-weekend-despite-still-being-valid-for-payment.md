---
title: 'Boleto transaction cancelled after retry limit expires over weekend despite still being valid for payment'
slug: boleto-transaction-cancelled-after-retry-limit-expires-over-weekend-despite-still-being-valid-for-payment
status: PUBLISHED
createdAt: 2021-05-27T21:52:23.000Z
updatedAt: 2026-06-05T20:31:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: boleto-transaction-cancelled-after-retry-limit-expires-over-weekend-despite-still-being-valid-for-payment
locale: en
kiStatus: No Fix
internalReference: 374288
---

## Summary

When a **boleto bancário** (bank slip) is created with a due date falling on a **weekend**, the transaction may be **cancelled before the customer has a chance to pay it**, even though the boleto is still valid for payment on the next business day.
This happens because the system is configured to poll the payment status (via **CieloV3** or **BrasPag**) every 30 minutes for 7 consecutive calendar days — totalling **336 attempts**. If those 7 days expire on a weekend, the retry limit is reached and the transaction gets cancelled. However, the boleto remains valid and the customer can still pay it on Monday, causing the payment to be accepted by the bank while the order is already cancelled on the VTEX side.

## Simulation

To reproduce, a boleto must be created on a Monday with a payment term that expires on a Saturday or Sunday, so that the 336 retry attempts are exhausted over the weekend before the next business day.

## Workaround

There is no workaround available.