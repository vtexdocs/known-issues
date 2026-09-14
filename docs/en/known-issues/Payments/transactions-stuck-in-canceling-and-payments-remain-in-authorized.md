---
title: 'Transactions stuck in "Canceling" and payments remain in "Authorized"'
slug: transactions-stuck-in-canceling-and-payments-remain-in-authorized
status: PUBLISHED
createdAt: 2025-10-17T15:42:19.000Z
updatedAt: 2026-09-14T22:02:49.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-canceling-and-payments-remain-in-authorized
locale: en
kiStatus: Backlog
internalReference: 1309418
---

## Summary

Some transactions remain in the Canceling status while their corresponding payments stay in Authorized, without progressing to the final Finished or Canceled state. The issue occurs when the Payments Worker fails to update the payment status after receiving the cancellation request, which can be caused by internal or external factors.

## Simulation

It is not possible to simulate.

## Workaround

There is no workaround.