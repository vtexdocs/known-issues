---
title: Order stuck in on-order-completed-ffm (Fulfillment) or on-order-completed (Marketplace) even after successful creation (isCompleted: true)
slug: order-stuck-in-onordercompletedffm-fulfillment-or-onordercompleted-marketplace-even-after-successful-creation-iscompleted-true
status: PUBLISHED
createdAt: 2025-10-13T13:13:37.908Z
updatedAt: 2025-10-13T13:13:37.908Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-in-onordercompletedffm-fulfillment-or-onordercompleted-marketplace-even-after-successful-creation-iscompleted-true
locale: en
kiStatus: Fixed
internalReference: 1218615
---

## Summary


In some cases, an order may get stuck in its initial statuses (`on-order-completed-ffm`, `on-order-completed` ) even after being seemingly created successfully, this happens when one of the internal steps in the order creation flow fails silently, causing a **workflow desynchronization** that prevents the order from progressing normally.




#### Simulation


At the moment, this scenario cannot be reliably simulated, as it depends on intermittent or specific failures in isolated parts of the order creation process.




#### Workaround


There is currently no way to prevent this type of scenario, but the technical team can manually apply corrective actions to affected orders, allowing them to proceed normally through the workflow.
Note: In cases where the reservation has expired (status=4), manual adjustment is not possible!!



