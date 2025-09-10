---
title: The promotion usage counter is not working as expected involving order splits and incomplete orders.
slug: the-promotion-usage-counter-is-not-working-as-expected-involving-order-splits-and-incomplete-orders
status: PUBLISHED
createdAt: 2025-09-10T14:17:00.115Z
updatedAt: 2025-09-10T14:17:00.115Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-promotion-usage-counter-is-not-working-as-expected-involving-order-splits-and-incomplete-orders
locale: en
kiStatus: Backlog
internalReference: 1289805
---

## Summary


We've identified that the promotion usage counter isn't working as expected, leading to a loss of control over the number of times a promotion is applied.
The problem arises because the Checkout system is currently responsible for notifying promotion usage, while the Order Management System (OMS) is responsible for reporting cancellations.
This should reduce the usage count. However, these systems send different notifications for incomplete orders, as the order cancellation isn't reported, or when an order is split. In this scenario, the Checkout system notifies for each split order, causing the counter to malfunction and creating more orders with the promotion applied than intended. If one of these split orders is canceled, the OMS sends only one cancellation notification, causing a discrepancy in the counter.


#### Simulation


Create a promotion with a specific usage limit.
Apply the promotion to multiple orders through the Checkout system.

Cancel some of these orders through the OMS.
Note that the promotion usage counter may allow for the creation of more orders as expected.

Currently, it is not always possible to consistently reproduce this issue, as the exact root cause has not yet been determined.


#### Workaround


We don't have a workaround for this scenario at the moment!



