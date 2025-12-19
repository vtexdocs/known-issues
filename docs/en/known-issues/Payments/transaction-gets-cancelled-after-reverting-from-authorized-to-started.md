---
title: 'Transaction gets cancelled after reverting from Authorized to Started'
slug: transaction-gets-cancelled-after-reverting-from-authorized-to-started
status: PUBLISHED
createdAt: 2025-12-19T13:48:45.493Z
updatedAt: 2025-12-19T13:48:45.493Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-gets-cancelled-after-reverting-from-authorized-to-started
locale: en
kiStatus: Backlog
internalReference: 1341471
---

## Summary


Some payments approved and captured by the connector later move into Cancelling and end as Cancelled without a customer cancel action. The visible symptom is transactions that were Authorized/Captured suddenly show Cancelling, and internal logs show an invalid status transition attempt from Started to Authorized, indicating the workflow reverted to a previous state.
The issue affects VTEX Payments Gateway workflow when an invalid transition occurs and triggers the cancel flow after a timeout.


#### Simulation


It's not possible to simulate


#### Workaround


No workaround available at this time.



