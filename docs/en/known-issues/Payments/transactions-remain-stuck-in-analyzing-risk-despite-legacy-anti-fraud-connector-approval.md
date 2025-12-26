---
title: 'Transactions remain stuck in Analyzing Risk despite legacy anti fraud connector approval'
slug: transactions-remain-stuck-in-analyzing-risk-despite-legacy-anti-fraud-connector-approval
status: PUBLISHED
createdAt: 2025-12-26T14:40:53.581Z
updatedAt: 2025-12-26T14:40:53.581Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-analyzing-risk-despite-legacy-anti-fraud-connector-approval
locale: en
kiStatus: Backlog
internalReference: 1344359
---

## Summary


In some cases, the Transaction Worker fails to advance the transaction to the expected status, even after receiving a successful response (200 OK) from the legacy connector. As a result, transactions may remain stuck in **Analyzing Risk** and the corresponding orders stay in "**Payment Pending**". This behavior can occur when the legacy connector correctly returns an approved response, but the internal process that updates the transaction status does not execute properly.


#### Simulation


It is not possible to simulate.


#### Workaround


Open a ticket for Product support team.




