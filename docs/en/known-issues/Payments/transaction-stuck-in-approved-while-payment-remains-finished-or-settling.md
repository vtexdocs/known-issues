---
title: 'Transaction stuck in Approved while payment remains finished or settling'
slug: transaction-stuck-in-approved-while-payment-remains-finished-or-settling
status: PUBLISHED
createdAt: 2026-03-20T15:12:41.664Z
updatedAt: 2026-03-20T15:12:41.664Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-approved-while-payment-remains-finished-or-settling
locale: en
kiStatus: Backlog
internalReference: 1381639
---

## Summary

Transactions become stuck Approved status when the corresponding payment remains Settling or Finished, transaction does not transition to Finished, and attempts to capture return error when there are partial refunds or partial cancel and a divergence between actions and requests in the settlements route.

## Simulation

It's not possible to reproduce the error.

## Workaround

There is no workaround available.