---
title: Transaction with antifraud doesn't update to "settling" when "riskApproved" log is missing
slug: transaction-with-antifraud-doesnt-update-to-settling-when-riskapproved-log-is-missing
status: PUBLISHED
createdAt: 2025-10-16T20:38:20.813Z
updatedAt: 2025-10-16T20:38:20.813Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-with-antifraud-doesnt-update-to-settling-when-riskapproved-log-is-missing
locale: en
kiStatus: Backlog
internalReference: 1184723
---

## Summary


Sometimes, when the Antifraud provider approves the transaction, we can see that the gateway receives the message of approved by antifraud, but it doesn't update the transaction to "riskApproved" status. When it happens, the transaction is stuck in Authorized or Approved even after the settlement is done by the payment provider.


#### Simulation


There is no assertive way of reproducing this error, since it's intermittent.


#### Workaround


Open a ticket to Product Support - Payments, in order to manually proceed with the transaction flow.


