---
title: 'Orders stuck in “request-cancel” on marketplace when seller invoices at the same time (cancel vs invoice race condition)'
slug: orders-stuck-in-requestcancel-on-marketplace-when-seller-invoices-at-the-same-time-cancel-vs-invoice-race-condition
status: PUBLISHED
createdAt: 2026-04-30T17:56:43.866Z
updatedAt: 2026-04-30T17:56:43.866Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-requestcancel-on-marketplace-when-seller-invoices-at-the-same-time-cancel-vs-invoice-race-condition
locale: en
kiStatus: Backlog
internalReference: 1400005
---

## Summary

Orders can become permanently stuck in the marketplace with status “request-cancel” and workflowIsInError: true when a cancellation request from the marketplace races with the seller’s invoice event by a few hundred milliseconds. The visible symptom is that the marketplace order does not move to Canceled or Invoiced, while the seller order remains Invoiced; attempts to adjust status via API/UI fail. This affects marketplace↔seller scenarios across delivery types and payments (not limited to pickup/Pix), as confirmed with Americanas and Cobasi examples. Engineering identified this as an architectural race condition and is planning remediation.

## Simulation

There is not an easy way to reproduce the scenario.

## Workaround

Process/refund the transaction to compensate the customer, as was done for impacted orders.