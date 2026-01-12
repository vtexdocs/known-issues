---
title: 'Transactions remain stuck despite connector approval'
slug: transactions-remain-stuck-despite-connector-approval
status: PUBLISHED
createdAt: 2026-01-12T20:35:37.559Z
updatedAt: 2026-01-12T20:35:37.559Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-despite-connector-approval
locale: en
kiStatus: Backlog
internalReference: 1302349
---

## Summary


In some cases, the **Transaction Worker** fails to advance the transaction to the expected status, even after receiving a successful response (**200 OK** with status `"approved"`) from the connector. As a result, transactions may remain stuck in **Pending Authorization**, **Authorized**, or **Analyzing Risk**, and the corresponding orders stay in **Payment Pending**. This behavior can occur when the connector correctly returns an approved response, but the internal process that updates the transaction status does not execute properly.

> **Important:** Following the impact analysis and internal alignment at (Dec/2025), this KI was **split into four more specific KIs**, each one focused on a particular status in which the transaction remains stuck after the connector approval:
>
> 1. **[KI] Transactions remain stuck in Pending Authorization despite connector approval**
> 2. **[KI] Transactions remain stuck in Authorized despite connector approval**
> 3. **[KI] Transactions remain stuck in Analyzing Risk despite legacy anti-fraud connector approval**
> 4. **[KI] Transactions remain stuck in Analyzing Risk despite AFPP connector approval**

The text above reflects the original consolidated description used before this split and should be read as the **umbrella/root KI** for these four derived KIs.


#### Simulation


It is not possible to simulate.


#### Workaround


The workaround depends on the current transaction status:


- Scenario 1 – Transaction stuck in Pending Authorization Execute the following API to manually advance authorization: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 API reference: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request
- Scenario 2 – Transaction stuck in Authorized
- Scenario 3 – Transaction stuck in Analyzing Risk
For scenarios 2 and 3, it is necessary to open a ticket for Product.



