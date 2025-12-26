---
title: 'Transactions remain stuck in Pending Authorization despite connector approval'
slug: transactions-remain-stuck-in-pending-authorization-despite-connector-approval
status: PUBLISHED
createdAt: 2025-12-26T14:33:21.484Z
updatedAt: 2025-12-26T14:33:21.484Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-pending-authorization-despite-connector-approval
locale: en
kiStatus: Backlog
internalReference: 1344356
---

## Summary


In some cases, the Transaction Worker fails to advance the transaction to the expected status, even after receiving a successful response (200 OK) from the connector. As a result, transactions may remain stuck in Pending Authorization and the corresponding orders stay in **"Payment Pending"**. This behavior can occur when the connector correctly returns an approved response, but the internal process that updates the transaction status does not execute properly.



#### Simulation


It is not possible to simulate.


#### Workaround


Transaction stuck in Pending Authorization Execute the following API to manually advance authorization: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 API reference: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request



