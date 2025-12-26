---
title: 'Transactions remain stuck in Authorized despite connector approval'
slug: transactions-remain-stuck-in-authorized-despite-connector-approval
status: PUBLISHED
createdAt: 2025-12-26T14:37:19.993Z
updatedAt: 2025-12-26T14:37:19.993Z
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


In some cases, the Transaction Worker fails to advance the transaction to the expected status, even after receiving a successful response (200 OK) from the connector. As a result, transactions may remain stuck in **Authorized** and the corresponding orders stay in **"Payment Pending"**. This behavior can occur when the connector correctly returns an approved response, but the internal process that updates the transaction status does not execute properly.


#### Simulation


It is not possible to simulate.


#### Workaround


Open a ticket for Product support team.



