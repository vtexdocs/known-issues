---
title: 'Invoice accepted with value higher than order total via Orders API during concurrent Change'
slug: invoice-accepted-with-value-higher-than-order-total-via-orders-api-during-concurrent-change
status: PUBLISHED
createdAt: 2026-01-29T14:38:22.509Z
updatedAt: 2026-01-29T14:38:22.509Z
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


In some cases, when a **Change** and an **invoice** submission happen almost at the same time for the same order, the system may rely on out-of-date information about the invoiced amount.
This can cause:

- **Invoice with a value higher than the final order total** (the invoice is accepted based on the order value before the reduction Change is fully completed).
- **Order stuck in** `payment-approved` **even with a valid invoice** (the invoice exists in an external system but is not found by the workflow at validation time, which interprets the situation as a partial invoice and does not move the order to `invoiced`).
In both scenarios, the root cause is the near-simultaneous execution of **Change** and **Invoice**, which leads to inconsistencies between the actual invoiced amount and the final order state.


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



