---
title: 'Transactions remain stuck in Authorized despite connector approval'
slug: transactions-remain-stuck-in-authorized-despite-connector-approval
status: PUBLISHED
createdAt: 2025-12-26T17:37:00.000Z
updatedAt: 2026-05-22T17:44:43.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-authorized-despite-connector-approval
locale: en
kiStatus: Backlog
internalReference: 1344357
---

## Summary

In some cases, the Transaction Worker fails to advance the transaction to the expected status, even after receiving a successful response (200 OK) from the connector. As a result, transactions may remain stuck in _Authorized,_ and the corresponding orders stay in _"Payment Pending"_. This behavior can occur when the connector correctly returns an approved response, but the internal process that updates the transaction status does not execute properly.

This issue corresponds to scenario: _"Silence after Authorized"_, where five distinct root causes were identified sharing the same surface symptom but different failure mechanisms. The other causes are:

- ClearSale antifraud retry loop due to `NullReferenceException` in the connector. Ticket #1059028
- ClearSale antifraud retry loop due to `address.number=null` . Ticket #496298
- Payment stuck in `Received` status post-authorization, without visible status in the UI. Ticket #1411012.
- Status regression `Approved` → `Authorized` caused by a secondary connector callback, resolved together with this KI.

## Simulation

It is not possible to simulate.

## Workaround

Open a ticket for Product support team.