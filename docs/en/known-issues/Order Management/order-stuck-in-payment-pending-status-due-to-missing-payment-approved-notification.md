---
title: 'Order stuck in Payment Pending status due to missing payment approved notification'
slug: order-stuck-in-payment-pending-status-due-to-missing-payment-approved-notification
status: PUBLISHED
createdAt: 2025-09-05T12:09:40.816Z
updatedAt: 2025-09-05T12:09:40.816Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-in-payment-pending-status-due-to-missing-payment-approved-notification
locale: en
kiStatus: Backlog
internalReference: 1031035
---

## Summary



When an order is in the "Payment Pending" status, a payment notification is expected to be registered to the Orders module. During this stage, issues in event processing may occur.
The OMS is notified through a callback endpoint triggered when the Gateway receives a postback message. This message is generated whenever a transaction reaches specific states (such as _Approved_) and is then processed by a worker who instructs the Gateway to call the callback endpoint, updating the OMS about the new transaction state.
In these cases, the postback is sent successfully, the OMS receives it and responds with success, but the order remains stuck due to an unlogged error in the OMS.
In other words, the Gateway completes its role correctly, while some error in the OMS processing prevents the order from progressing.


#### Simulation



There's no way to simulate this behavior.


#### Workaround



Please contact our support team so they can use the internal troubleshooter tool



