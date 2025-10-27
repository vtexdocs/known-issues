---
title: 'Delay in canceling the order in Marketplace'
slug: delay-in-canceling-the-order-in-marketplace
status: PUBLISHED
createdAt: 2025-08-12T18:46:34.439Z
updatedAt: 2025-08-12T18:46:34.439Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delay-in-canceling-the-order-in-marketplace
locale: en
kiStatus: Backlog
internalReference: 1242813
---

## Summary


This KI describes the scenario where the Marketplace or Fulfillment requests the cancellation of an order. This cancellation is accepted in fulfillment; however, it can take a few minutes or even longer in some cases for the status to be updated in the Marketplace. This delay occurs because there are multiples writes of the order in S3 (database) during the cancellation flow, changing the status from "cancel" to "canceled" and updating other cancellation information. Given the current implementation of the cancellation flow, which operates asynchronously without a lock, this behavior can occur, and inconsistencies might arise in the workflow interactions. For instance, the status may go to "canceled" but then revert to "cancel" due to the lack of locking in the operations. Consequently, this could affect the feed/hook since there would be two notifications of the canceled status.

This scenario affects the deny process via the UpdateTask API, causing the task to remain unupdated. However, the request is successfully canceled. In this case, it is necessary to update the task.

However, this scenario is rare and does not have a significant impact because there are retries in the workflow that ensure a certain level of consistency; nonetheless, it may take a while—for the information to be updated.


#### Simulation


It is not possible to simulate this scenario, as it does not always occur!


#### Workaround


We do not have a workaround for this scenario, so the workflow retry is necessary to correct the status!



