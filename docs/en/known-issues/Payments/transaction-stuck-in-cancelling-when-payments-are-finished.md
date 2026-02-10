---
title: 'Transaction stuck in "Cancelling" when payments are "Finished"'
slug: transaction-stuck-in-cancelling-when-payments-are-finished
status: PUBLISHED
createdAt: 2026-02-10T21:45:01.819Z
updatedAt: 2026-02-10T21:45:01.819Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-cancelling-when-payments-are-finished
locale: en
kiStatus: Backlog
internalReference: 1363196
---

## Summary


Transactions remain in cancelling status and cannot be cancelled when the related payment(s) have already been completed/settled. The visible symptoms include the error message `"The transaction with Id = could not be cancelled. A transaction must have all its payments cancelled to be cancelled."`.



#### Simulation


- Steps:
  - Create an order that will undergo partial capture;
  - Ensure the payment(s) are settled/completed by the gateway while the transaction is not settled yet;
  - Attempt to cancel part of the value. The transaction will remain in "cancelling" status



#### Workaround


Open a ticket to PS Payments

