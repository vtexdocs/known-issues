---
title: 'Transactions stuck in Authorized after approval'
slug: transactions-stuck-in-authorized-after-approval
status: PUBLISHED
createdAt: 2025-12-26T14:49:55.140Z
updatedAt: 2025-12-26T14:49:55.140Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-authorized-after-approval
locale: en
kiStatus: Backlog
internalReference: 1344363
---

## Summary


Transactions may remain stuck in **Authorized** even after all payments are successfully authorized, preventing invoicing and normal order progression. The visible symptom is the transaction not advancing to Approved despite approvals having occurred, often accompanied by duplicated or conflicting TransactionWorkFlowChangeStatus interactions.
The official documentation explains the different transaction states in more detail: Transaction Flow in Payments.

However, in transactions affected by this problem, we observe unexpected behavior:
Stuck in **Authorized**: After all payments have been approved (authorized) and the transaction has already transitioned to the Approved status, a new transition status event, TransactionWorkFlowChangeStatus, is triggered. This event incorrectly updates the status back to **Authorized**. Even though another TransactionWorkFlowChangeStatus - Approved event occurs afterward, the final status update is not properly recorded in the transaction. As a result, the transaction remains stuck in the **Authorized** state, preventing the order or transaction from progressing as expected.

To avoid this issue is important to know that the VTEX Payment Gateway uses an in-memory data model, committing changes to the database only after each request completes. Because of this, payment connectors must avoid making POST requests (such as /additional-data, /retry, or /callback) during authorization processing, as the expected data may not yet be persisted, causing deadlocks or inconsistencies.
Connectors should not call the Gateway back during the same flow it initiated, nor assume that data is immediately available in the database. Instead, they should use GET requests to retrieve transaction or payment information, wait for the authorization process to finish before sending callbacks, and handle additional processing asynchronously after the initial request completes.
By following this pattern, avoiding circular API calls, concurrent requests, and overlapping callbacks, connectors ensure stable integration and prevent data consistency or locking issues.



#### Simulation


It's not possible to simulate.


#### Workaround


Open a ticket for Produtc Support team



