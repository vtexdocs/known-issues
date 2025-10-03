---
title: Transactions remain in pending authorization despite connector approval
slug: transactions-remain-in-pending-authorization-despite-connector-approval
status: PUBLISHED
createdAt: 2025-10-03T19:09:28.031Z
updatedAt: 2025-10-03T19:09:28.031Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-in-pending-authorization-despite-connector-approval
locale: en
kiStatus: -
internalReference: 1302349
---

## Summary


Transactions can get stuck in pending authorization even after the payment connector returns a 200 OK with status "approved." Affected users see orders remaining in "payment pending" and transactions not progressing to Authorized/Approved. This could impact any flow where the gateway approves, but the internal worker does not advance the transaction state.


#### Simulation


It is not possible to simulate.


#### Workaround



- Trigger the authorization advancement manually via Payments Gateway API:
- POST /api/pvt/transactions/{transactionId}/authorization-request
- Reference: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request


