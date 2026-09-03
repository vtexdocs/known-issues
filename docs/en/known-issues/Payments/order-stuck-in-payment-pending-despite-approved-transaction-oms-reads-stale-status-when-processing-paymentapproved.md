---
title: 'Order Stuck in Payment Pending Despite Approved Transaction (OMS Reads Stale Status When Processing payment-approved)'
slug: order-stuck-in-payment-pending-despite-approved-transaction-oms-reads-stale-status-when-processing-paymentapproved
status: PUBLISHED
createdAt: 2026-09-03T16:57:14.000Z
updatedAt: 2026-09-03T16:57:14.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-payment-pending-despite-approved-transaction-oms-reads-stale-status-when-processing-paymentapproved
locale: en
kiStatus: Backlog
internalReference: 1456295
---

## Summary

An order can remain stuck in "Payment Pending" even though the transaction has genuinely reached **"Approved"** in Payments (with no reversion, as confirmed by the transaction logs), and the `payment-approved` postback was received correctly by the OMS without delay.
**The failure occurs in a separate, subsequent step:** while processing the notification, the OMS (`SalesOrderSystem::CreateAuthorization`, state `approve-payment`) performs an independent status check against the Gateway. In affected cases, this check returns **"Authorized"** (a stale read), even though the transaction had already reached **"Approved"** in Payments. This prevents the `approve-payment` transition from being completed, and no automatic retry was observed afterward, meaning the order can remain stuck indefinitely.

## Simulation

It is not possible to simulate.

## Workaround

Open a ticket with VTEX requesting the payment approved notification to be resent to OMS.