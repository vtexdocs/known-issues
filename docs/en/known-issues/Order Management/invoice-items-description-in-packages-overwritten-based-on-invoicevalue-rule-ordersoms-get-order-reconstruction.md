---
title: 'Invoice items description in packages overwritten based on invoiceValue rule (Orders/OMS GET Order reconstruction)'
slug: invoice-items-description-in-packages-overwritten-based-on-invoicevalue-rule-ordersoms-get-order-reconstruction
status: PUBLISHED
createdAt: 2025-11-25T12:52:51.759Z
updatedAt: 2025-11-25T12:52:51.759Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: invoice-items-description-in-packages-overwritten-based-on-invoicevalue-rule-ordersoms-get-order-reconstruction
locale: en
kiStatus: Backlog
internalReference: 1330069
---

## Summary


When sending an invoice via Orders Invoice Notification API with custom items[].description, the description shown later in GET Order (packages.items[].description) may be replaced by the product name. The visible symptom is that some orders display the product name instead of the custom description provided in the invoice payload. This affects OMS/Orders consumers that rely on packages.items descriptions for logistics, fiscal or ERP reconciliation, especially when invoiceValue is equal to or greater than the total order value. Engineering confirmed this is long-standing behavior tied to GET Order reconstruction, not a transient outage.


#### Simulation



- Prerequisites:
  - An order ready to receive an invoice.
  - Ability to POST invoice to Orders Invoice Notification API and later GET the order from OMS API.
-

Steps:

1) Send an invoice POST with items and a custom description per item (e.g., items[].description = "1010").



2) Case A: Set invoiceValue greater than or equal to the total order value. After the invoice is processed, call GET /api/oms/pvt/orders/{orderId}. Observe packages.items[].description is reconstructed as the item name (overwrites the custom description).



3) Case B: Set invoiceValue less than the total order value. After processing, call GET /api/oms/pvt/orders/{orderId}. Observe the original items from the submitted invoice are preserved, including the custom description you sent.



4) If you omit description entirely in the invoice items, GET Order will show packages.items[].description auto-filled with the product name.



- Notes:
  - Engineering highlighted this reconstruction occurs on every GET Order and is backed by existing tests validating the replace-when-invoiceValue>=order.Value behavior.


#### Workaround


N/A



