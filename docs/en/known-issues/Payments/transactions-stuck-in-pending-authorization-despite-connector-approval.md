---
title: 'Transactions stuck in Pending Authorization despite connector approval'
slug: transactions-stuck-in-pending-authorization-despite-connector-approval
status: PUBLISHED
createdAt: 2026-06-30T19:14:21.000Z
updatedAt: 2026-06-30T22:24:04.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-pending-authorization-despite-connector-approval
locale: en
kiStatus: Backlog
internalReference: 1427794
---

## Summary

Some payment transactions remain stuck in Pending Authorization even after the connector has returned Approved (200 OK) and the corresponding orders stay in "Payment Pending". The visible symptom is that the transaction status does not move forward and no “Started authorization retry for payment” interaction is recorded in the transaction timeline. This affects payment flows in the VTEX Payments Gateway where the worker responsible for progressing the transaction either errors before execution or is never called, leaving the order flow blocked.

## Simulation

It is not possible to simulate.

## Workaround

Transaction stuck in Pending Authorization Execute the following API to manually advance authorization: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 API reference: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request