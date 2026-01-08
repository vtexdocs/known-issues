---
title: 'Legacy Antifrauds cannot complete a request when the accountId is missing.'
slug: legacy-antifrauds-cannot-complete-a-request-when-the-accountid-is-missing
status: PUBLISHED
createdAt: 2026-01-08T16:18:30.747Z
updatedAt: 2026-01-08T16:18:30.747Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: legacy-antifrauds-cannot-complete-a-request-when-the-accountid-is-missing
locale: en
kiStatus: Backlog
internalReference: 496298
---

## Summary


There's an issue with approving some transactions that are related to our legacy anti-fraud connectors. This issue arises when the system fails to make the necessary request due to the absence of the accountId, which is required to retrieve payment information from the account database. You can verify this by examining the "/payment" route, where you will find the node "usedAccountId" with a value of "False" in such cases.

**{**"name": "usedAccountId","value": "False"**}**

Typically, the message found in the anti-fraud response is "Object reference not set to an instance of an object," which prevents the transaction from being approved.

Furthermore, this problem is commonly observed when a user removes their own card from the MyAccount page immediately after placing an order.


#### Simulation


Follow the aforementioned step, which involves deleting a card immediately after placing an order utilizing a legacy Antifraud.


#### Workaround


Open a ticket for Product support team.



