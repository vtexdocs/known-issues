---
title: 'Transactions created without any payment get stuck in “Canceling”'
slug: transactions-created-without-any-payment-get-stuck-in-canceling
status: PUBLISHED
createdAt: 2025-10-28T14:06:12.549Z
updatedAt: 2025-10-28T14:06:12.549Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-created-without-any-payment-get-stuck-in-canceling
locale: en
kiStatus: Backlog
internalReference: 1314444
---

## Summary


Transactions that were created without any associated payment remain indefinitely in the “Canceling” status. The visible symptom is that force-cancel actions and standard cancel flows do not complete, leaving the transaction locked. This affects transactions with no payment timeline or connector tied to them.


#### Simulation


It is not possible to simulate.


#### Workaround


N/A.



