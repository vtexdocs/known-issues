---
title: Orders stuck in completed/on-order-completed status in fulfillment or Approved Payment status in Marketplace
slug: orders-stuck-in-completedonordercompleted-status-in-fulfillment-or-approved-payment-status-in-marketplace
status: PUBLISHED
createdAt: 2025-08-07T20:26:29.774Z
updatedAt: 2025-08-07T20:26:29.774Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-completedonordercompleted-status-in-fulfillment-or-approved-payment-status-in-marketplace
locale: en
kiStatus: Backlog
internalReference: 1218615
---

## Summary


In some cases, an order may get stuck in its initial statuses (`approve-payment`, `on-order-completed-ffm`, `on-order-completed` Or `processing`) even after being seemingly created successfully, this happens when one of the internal steps in the order creation flow fails silently, causing a **workflow desynchronization** that prevents the order from progressing normally.



#### Simulation


At the moment, this scenario cannot be reliably simulated, as it depends on intermittent or specific failures in isolated parts of the order creation process.



#### Workaround


There is currently no way to prevent this type of scenario, but the technical team can manually apply corrective actions to affected orders, allowing them to proceed normally through the workflow.



