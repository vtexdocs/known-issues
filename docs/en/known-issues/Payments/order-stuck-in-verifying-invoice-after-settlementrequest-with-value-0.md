---
title: 'Order stuck in Verifying Invoice after settlement-request with value 0'
slug: order-stuck-in-verifying-invoice-after-settlementrequest-with-value-0
status: PUBLISHED
createdAt: 2026-01-09T15:50:37.200Z
updatedAt: 2026-01-09T15:50:37.200Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-verifying-invoice-after-settlementrequest-with-value-0
locale: en
kiStatus: Backlog
internalReference: 1349027
---

## Summary


Orders can remain stuck in **Verifying Invoice** even though the acquirer has credited the payment. The visible symptom is that OMS does not move the order to Invoiced because the VTEX Gateway settlement record is missing on the `/api/pvt/transactions/{transactionId}/settlements`. This occurs when a service/app calls the /settlement-request API with amount 0, which pushes the transaction status to finished without a proper settlement entry, blocking invoicing flows.


#### Simulation



- Prerequisites:
  - A transaction authorized and auto-captured by the gateway (e.g., total amount captured by the connector).
  -

Ability to call the VTEX Gateway /settlement-request API.



- Steps:
  1. Perform an initial capture (automatic or manual) for the full amount (e.g., 100).
  2. Make a partial settlement request (e.g., 50) so the transaction goes to settling.
  3. Then call /settlement-request with value 0. The transaction transitions to finished.
  4.

Any subsequent attempt to request capture/settlement for the remaining amount fails because the transaction is already finished, and OMS won’t find a proper settlement entry in /api/pvt/transactions/{transactionId}/settlements; the order remains in Verifying Invoice.





#### Workaround


Do not call /settlement-request with amount 0 from merchant/integration apps. Validate integration logic to always send the correct captured amount.



