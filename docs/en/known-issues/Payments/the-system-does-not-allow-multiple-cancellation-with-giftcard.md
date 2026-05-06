---
title: 'The system does not allow multiple cancellation with Giftcard'
slug: the-system-does-not-allow-multiple-cancellation-with-giftcard
status: PUBLISHED
createdAt: 2020-11-24T19:45:14.000Z
updatedAt: 2024-06-25T13:51:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-system-does-not-allow-multiple-cancellation-with-giftcard
locale: en
kiStatus: Backlog
internalReference: 309117
---

## Summary

The system is not sending the partial cancellation of a Giftcard transaction.
We also found a scenario where the same thing happens, however the cancelation works. This leaves the refund amount higher than the transaction amount because the value refunded is the first partial refund + the second refund with the full amount.

## Simulation

Find a transaction where a partial refund/cancellation was requested using Giftcard.

## Workaround

There's no workaround, however, the user can add the refundable credit via admin UI.