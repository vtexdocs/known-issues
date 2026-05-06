---
title: 'Replacing orders with different Sales Channel'
slug: replacing-orders-with-different-sales-channel
status: PUBLISHED
createdAt: 2024-02-16T13:02:01.000Z
updatedAt: 2024-02-16T13:05:06.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: replacing-orders-with-different-sales-channel
locale: en
kiStatus: Backlog
internalReference: 982965
---

## Summary

We have identified that it is not possible to replace a SKU in the order if the Sales Channel (SC), equal to 1, is not available for the account.

For example, account A does not have sales channel=1, only SC=2, in the order replacement request we are sending sales channel=1 and not 2.

## Simulation

Account A, does not have sales channel=1, only SC=2, in the order replacement request, when they request the replacement of a SKU, we are sent sales channel=1 and not 2, therefore, it is not possible to carry out the replacement.

## Workaround

N/A.