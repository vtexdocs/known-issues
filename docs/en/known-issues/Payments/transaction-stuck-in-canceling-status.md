---
title: 'Transaction stuck in "canceling" status'
slug: transaction-stuck-in-canceling-status
status: PUBLISHED
createdAt: 2021-01-23T01:47:19.000Z
updatedAt: 2026-05-28T19:52:10.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-canceling-status
locale: en
kiStatus: No Fix
internalReference: 327248
---

## Summary

Transactions processed through the **MundiPagg** payment connector can get stuck in **"Canceling"** status indefinitely, even after multiple cancellation requests are sent. The connector does not return a successful cancellation response, leaving the VTEX Gateway unable to transition the transaction to **"Canceled"**.
As a result, the order remains frozen in the OMS and the client's inventory stays blocked.

> ⚠️ This issue is **specific to the MundiPagg connector** (`affiliations_mundipagg`). If the transaction is using a different connector, this KI does not apply.

## Simulation

It's not possible to simulate.

## Workaround

There's no workaround available right now.