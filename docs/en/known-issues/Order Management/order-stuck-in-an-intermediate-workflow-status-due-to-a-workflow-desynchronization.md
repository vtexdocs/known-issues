---
title: 'Order stuck in an intermediate workflow status due to a workflow desynchronization'
slug: order-stuck-in-an-intermediate-workflow-status-due-to-a-workflow-desynchronization
status: PUBLISHED
createdAt: 2026-09-23T23:44:50.000Z
updatedAt: 2026-09-23T23:44:50.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-in-an-intermediate-workflow-status-due-to-a-workflow-desynchronization
locale: en
kiStatus: Backlog
internalReference: 1465447
---

## Summary

There are scenarios where an order can get stuck in an intermediate status of its workflow — for example (not an exhaustive list) approve-payment, on-order-completed-ffm, on-order-completed, processing, or authorize-fulfillment — even though the order was apparently created/processed successfully up to that point. This happens when one of the internal steps of the order's workflow fails silently or hits an inconsistency, causing a desynchronization that prevents the order from progressing automatically to the next status. This is not isolated to a single status or a single instance (Marketplace or Fulfillment/Seller) — it can surface at different points of the order lifecycle.

## Simulation

There's no easy way to reproduce the scenario, since it depends on intermittent or specific failures at isolated points of the order's workflow execution.

## Workaround

"N/A" If an order is found stuck in an intermediate workflow status without progressing for an unusual amount of time, open a ticket with VTEX's Product team (Order Management) so they can inspect the order and, if needed, manually resynchronize its workflow.