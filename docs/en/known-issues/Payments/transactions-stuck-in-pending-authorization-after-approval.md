---
title: 'Transactions stuck in Pending Authorization after approval'
slug: transactions-stuck-in-pending-authorization-after-approval
status: PUBLISHED
createdAt: 2025-12-26T14:53:56.723Z
updatedAt: 2025-12-26T14:53:56.723Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-pending-authorization-after-approval
locale: en
kiStatus: Backlog
internalReference: 1344365
---

## Summary


Transactions may remain stuck in **Pending Authorization** even after all payments are successfully authorized, preventing invoicing and normal order progression. The visible symptom is the transaction not advancing to Approved despite approvals having occurred, often accompanied by duplicated or conflicting TransactionWorkFlowChangeStatus logs.
The official documentation explains the different transaction states in more detail: Transaction Flow in Payments.

The transaction gets stuck in the **Pending Authorization** status, even when all payments have already been authorized.

Those issue can often be identified by duplicated or conflicting TransactionWorkFlowChangeStatus logs, such as Approved followed by **Pending Authorization**, or missing the final Approved event entirely — leading to an inconsistent or frozen transaction state.

To avoid this issue is important to know that the VTEX Payment Gateway uses an in-memory data model, committing changes to the database only after each request completes. Because of this, payment connectors must avoid making POST requests (such as /additional-data, /retry, or /callback) during authorization processing, as the expected data may not yet be persisted, causing deadlocks or inconsistencies.
Connectors should not call the Gateway back during the same flow it initiated, nor assume that data is immediately available in the database. Instead, they should use GET requests to retrieve transaction or payment information, wait for the authorization process to finish before sending callbacks, and handle additional processing asynchronously after the initial request completes.
By following this pattern, avoiding circular API calls, concurrent requests, and overlapping callbacks, connectors ensure stable integration and prevent data consistency or locking issues.



#### Simulation


It's not possible to simulate.


#### Workaround


Open a ticket for Produtc Support team



