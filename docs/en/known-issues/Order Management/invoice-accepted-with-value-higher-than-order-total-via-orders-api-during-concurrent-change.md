---
title: 'Invoice accepted with value higher than order total via Orders API during concurrent Change'
slug: invoice-accepted-with-value-higher-than-order-total-via-orders-api-during-concurrent-change
status: PUBLISHED
createdAt: 2026-01-09T14:22:52.499Z
updatedAt: 2026-01-09T14:22:52.499Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: invoice-accepted-with-value-higher-than-order-total-via-orders-api-during-concurrent-change
locale: en
kiStatus: Backlog
internalReference: 1348894
---

## Summary


Orders can receive invoices with a value higher than the final order total when an order Change action (for example, partial cancellation) is still being processed concurrently.
The visible symptom is an invoice JSON showing an amount greater than the final order value.
This affects scenarios where invoicing is triggered at the same time as Changes, such as “handling” status flows that auto-invoice while a value-reduction Change is still in progress.

#### Simulation



**Prerequisites**

- Use the Orders API endpoint:
`POST /api/orders/pvt/document/{orderId}/invoices`
- Have an integration that:
  - Triggers invoicing on a status change (for example, `handling`), and
  - Almost simultaneously sends a partial cancellation / value-reduction Change for the same order.
**Steps**

1. Trigger the “handling” (or similar) status so that the system/integration attempts to invoice using the order’s `updatedOrderValue`.
2. Within a very short time window (for example, 50–1000 ms), send a Change request that reduces the order value (partial cancellation).
3. Observe that the invoice may be accepted with the **pre-Change** amount, resulting in an invoice value greater than the final order total after the Change finishes processing.

##


#### Workaround


**Sequence controls in the integration**

- The integration that calls the invoice endpoint must implement controls to ensure that the value-reduction Change has finished **before** invoicing.
- To do this, the integration should:
  - Query the Change status via the appropriate endpoint (for example, the endpoint that returns the Change object for the order), and
  - Validate that the `finished` field is `true` before sending the invoice request.
- Once `finished = true`, it means the Change has completed and the order totals are updated, so the invoice with the new (reduced) amount can be safely sent.



