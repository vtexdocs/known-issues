---
title: 'Transactions stuck in Authorized or Pending Authorization after approval'
slug: transactions-stuck-in-authorized-or-pending-authorization-after-approval
status: PUBLISHED
createdAt: 2026-01-12T21:00:16.551Z
updatedAt: 2026-01-12T21:00:16.551Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-authorized-or-pending-authorization-after-approval
locale: en
kiStatus: Backlog
internalReference: 1304667
---

## Summary


Transactions may remain stuck in Authorized or Pending Authorization even after all payments are successfully authorized, preventing invoicing and normal order progression. The visible symptom is the transaction not advancing to Approved despite approvals having occurred, often accompanied by duplicated or conflicting `TransactionWorkFlowChangeStatus` logs.
The official documentation explains the different transaction states in more detail: Transaction Flow in Payments.

However, in transactions affected by this problem, we observe two types of unexpected behaviors:

1. **Stuck in Authorized:** After all payments have been approved (authorized) and the transaction has already transitioned to the _Approved_ status, a new transition status event, `TransactionWorkFlowChangeStatus`, is triggered. This event incorrectly updates the status back to _Authorized_. Even though another `TransactionWorkFlowChangeStatus - Approved` event occurs afterward, the final status update is not properly recorded in the transaction. As a result, the transaction remains stuck in the _Authorized_ state, preventing the order or transaction from progressing as expected.
2.

**Stuck in Pending Authorization:** Sometimes, the transaction gets stuck in the _Pending Authorization_ status, even when all payments have already been authorized.



These issues can often be identified by duplicated or conflicting `TransactionWorkFlowChangeStatus` logs, such as _Approved_ followed by _Authorized_, or missing the final _Approved_ event entirely — leading to an inconsistent or frozen transaction state.

To avoid this issue is important to know that the VTEX Payment Gateway uses an in-memory data model, committing changes to the database only after each request completes. Because of this, payment connectors must avoid making POST requests (such as `/additional-data`, `/retry`, or `/callback`) during authorization processing, as the expected data may not yet be persisted, causing deadlocks or inconsistencies.
Connectors should not call the Gateway back during the same flow it initiated, nor assume that data is immediately available in the database. Instead, they should use GET requests to retrieve transaction or payment information, wait for the authorization process to finish before sending callbacks, and handle additional processing asynchronously after the initial request completes.
By following this pattern, avoiding circular API calls, concurrent requests, and overlapping callbacks, connectors ensure stable integration and prevent data consistency or locking issues.

In addition to the behavior described above, this parent known issue was later split into two more specific KIs to better delimit the business and technical flows and improve prioritization, as aligned in our internal discussion:

- **[KI] Transactions stuck in Authorized after approval** – Zendesk ticket **1344363**
https://vtexhelp.zendesk.com/agent/tickets/1344363
- **[KI] Transactions stuck in Pending Authorization after approval** – Zendesk ticket **1344365**
https://vtexhelp.zendesk.com/agent/tickets/1344365

For up-to-date descriptions, symptoms, impact, metrics, and troubleshooting steps, **always use the child KIs above**.
This parent KI is kept only for historical tracking and linkage of older escalations and should **not** be used as the main reference going forward.


#### Simulation


It's not possible to simulate.


#### Workaround


Support team can call internal APIs to move the transaction forward.


