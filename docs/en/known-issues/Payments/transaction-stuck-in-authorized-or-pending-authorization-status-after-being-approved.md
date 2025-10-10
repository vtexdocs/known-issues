---
title: Transaction Stuck in Authorized Or Pending Authorization Status After Being Approved
slug: transaction-stuck-in-authorized-or-pending-authorization-status-after-being-approved
status: PUBLISHED
createdAt: 2025-10-10T14:10:07.832Z
updatedAt: 2025-10-10T14:10:07.832Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-authorized-or-pending-authorization-status-after-being-approved
locale: en
kiStatus: Backlog
internalReference: 1037765
---

## Summary


In a standard transaction flow, once all payments have been successfully authorized, the transaction is expected to change its status to _Approved_.
The official documentation explains the different transaction states in more detail: Transaction Flow in Payments.

However, in transactions affected by this problem, we observe two types of unexpected behaviors:

1. **Stuck in Authorized:** After all payments have been approved (authorized) and the transaction has already transitioned to the _Approved_ status, a new transition status event, `TransactionWorkFlowChangeStatus`, is triggered. This event incorrectly updates the status back to _Authorized_. Even though another `TransactionWorkFlowChangeStatus - Approved` event occurs afterward, the final status update is not properly recorded in the transaction. As a result, the transaction remains stuck in the _Authorized_ state, preventing the order or transaction from progressing as expected.
2.

**Stuck in Pending Authorization:** Sometimes, the transaction gets stuck in the _Pending Authorization_ status, even when all payments have already been authorized.



These issues can often be identified by duplicated or conflicting `TransactionWorkFlowChangeStatus` logs, such as _Approved_ followed by _Authorized_, or missing the final _Approved_ event entirely — leading to an inconsistent or frozen transaction state.

In September 2025, we performed an operation in the VTEX gateway to ensure status consistency, which reduced the number of cases by 97%. However, this issue may still occur due to improper usage of payment connectors.
A new Known Issue has been opened to track these recent cases, where you can also find more details about the best practices that should be implemented by the connectors:

https://newhelp.vtex.com/en/known-issues/transactions-stuck-in-authorized-or-pending-authorization-after-approval?utm_source=old_portal&utm_medium=redirect&utm_campaign=portal_transition


#### Simulation


It's not possible to simulate.


#### Workaround


Support team can call internal APIs to move the transaction forward.


