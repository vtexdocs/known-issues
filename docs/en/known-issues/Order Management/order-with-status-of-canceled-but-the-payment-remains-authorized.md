---
title: 'Order with status of canceled but the payment remains authorized'
slug: order-with-status-of-canceled-but-the-payment-remains-authorized
status: PUBLISHED
createdAt: 2021-08-26T15:39:43.000Z
updatedAt: 2024-06-28T17:45:42.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-status-of-canceled-but-the-payment-remains-authorized
locale: en
kiStatus: Fixed
internalReference: 420019
---

## Summary

In some cases where the order is incomplete or canceled when there is any communication failure with the Gateway, the payment remains authorized and/or approved, not entering the cancellation flow and the amount paid is not automatically refunded. Also, transactional emails can be accidentally sent, which also allows payment of bank slips, as the URL will go with it.

## Simulation

There's no way to simulate. But we have some cases that this happened before.

## Workaround

N/A