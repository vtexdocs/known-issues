---
title: 'Payment Stuck in "Received" Status — Transaction does not progress to "Approved" status'
slug: payment-stuck-in-received-status-transaction-does-not-progress-to-approved-status
status: PUBLISHED
createdAt: 2026-05-22T17:27:29.000Z
updatedAt: 2026-05-25T14:51:07.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-stuck-in-received-status-transaction-does-not-progress-to-approved-status
locale: en
kiStatus: Backlog
internalReference: 1411012
---

## Summary

In some cases, a payment **appears without a visible status** in the admin (PCI Gateway) and remains stuck with `"status": "Received"` in the database, as if the authorization flow was never initiated for that specific payment. This occurs even when the transaction itself has already advanced (e.g., to `Authorized`), and other payments within the same transaction may have progressed normally.
The affected payment has no `authorization date`, null `tid`/`nsu`, and empty `ConnectorResponses`, indicating the authorization request was either never sent or never registered for that payment entry.

## Simulation

It is not possible to simulate.

## Workaround

Open a ticket for Product support team.