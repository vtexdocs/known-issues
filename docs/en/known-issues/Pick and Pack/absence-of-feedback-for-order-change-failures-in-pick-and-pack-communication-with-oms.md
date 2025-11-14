---
title: 'Absence of Feedback for Order Change Failures in Pick and Pack (Communication with OMS)'
slug: absence-of-feedback-for-order-change-failures-in-pick-and-pack-communication-with-oms
status: PUBLISHED
createdAt: 2025-11-14T19:35:48.455Z
updatedAt: 2025-11-14T19:35:48.455Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: absence-of-feedback-for-order-change-failures-in-pick-and-pack-communication-with-oms
locale: en
kiStatus: Backlog
internalReference: 1275957
---

## Summary



The order modification flow in Pick and Pack, integrated with the OMS (Order Management System), has significant limitations regarding communicating results and errors back to the picker (order picker).

Regardless of the reason—whether the rejection is due to payment, limit restrictions, or system errors—the Pick and Pack app does not provide any kind of direct notification or explicit feedback to the picker about the result of the change attempt. All processing and validation of these changes take place on backend systems and are submitted via API (changeOrderV2), but the outcome is never communicated to the end user.

Consequently, the picker may operate based on outdated order information, not knowing if their action was truly accepted, rejected, or if any corrective action is necessary, and the merchant will not know that the order in the OMS did not include the changes made during the Picking and Packing process.


#### Simulation




1. The picker requests an order modification (add, remove, or replace an item) using the Pick and Pack app.
2. The request is sent to the OMS, which validates whether the change is possible and, when necessary, triggers external systems (e.g., payment gateway, rules engine, limits, or stock availability).
3. If there is any impediment (insufficient balance, commercial rule, product/quantity limit, system error), OMS rejects the change.
4. The Pick and Pack app continues to display the version of the order after the process of Picking and Packing, without indicating to the picker that the change was rejected or not applied in any way.


#### Workaround




- The operational team should implement active monitoring of the OMS after change attempts, identifying orders whose modification was rejected.
- Pickers or Merchants should be informed manually through internal routines or messaging when changes were not applied so that the actual order situation is clear, especially when reversals are required.
- It is recommended to establish checklists to confirm orders before closing packaging, by validating in OMS if the intended changes were effectively applied.



