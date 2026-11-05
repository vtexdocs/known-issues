---
title: 'Transaction stuck in "Cancelling" although the payment provider confirmed the cancellation'
slug: transaction-stuck-in-cancelling-although-the-payment-provider-confirmed-the-cancellation
status: PUBLISHED
createdAt: 2026-11-05T18:17:04.000Z
updatedAt: 2026-11-05T18:19:09.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-cancelling-although-the-payment-provider-confirmed-the-cancellation
locale: en
kiStatus: Backlog
internalReference: 1481557
---

## Summary

The transaction stays in `Cancelling` indefinitely, even though the payment provider confirmed the cancellation, and the store receives repeated e-mails with the subject `gateway-cancelamento-manual-requerido` asking for a manual cancellation. The transaction interactions show `Could not cancel payment` after the successful cancellation response. It mostly affects native split transactions cancelled after an antifraud rejection.

## Simulation

It is not possible to simulate.

## Workaround

Open a ticket to PS Payments with the affected transaction IDs. The `gateway-cancelamento-manual-requerido` e-mails can be ignored for transactions in which the payment provider confirmed the cancellation. If the provider did not confirm it, cancel the authorization directly with the provider before opening the ticket.