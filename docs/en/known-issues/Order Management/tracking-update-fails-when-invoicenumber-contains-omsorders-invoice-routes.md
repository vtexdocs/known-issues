---
title: Tracking update fails when invoiceNumber contains “/” (OMS/Orders invoice routes)
slug: tracking-update-fails-when-invoicenumber-contains-omsorders-invoice-routes
status: PUBLISHED
createdAt: 2025-10-03T14:04:55.504Z
updatedAt: 2025-10-03T14:04:55.504Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: tracking-update-fails-when-invoicenumber-contains-omsorders-invoice-routes
locale: en
kiStatus: Backlog
internalReference: 1302085
---

## Summary


When an invoice is created with a slash character in invoiceNumber (e.g., 6584634/09), subsequent API calls to add or update tracking fail.
The visible symptom is HTTP 404/400 errors on invoice tracking endpoints because “/” in the path is interpreted as a URL separator.
Accounts using integrations to update tracking via OMS are affected; Orders routes partially support encoding, but behavior is inconsistent. This is similar to a past KI-953285, about invoiceNumber propagation, but now the replication works and the breakage is specifically on tracking updates with special characters.


#### Simulation


(How to Reproduce) - Prerequisites: - Order with an invoice whose invoiceNumber contains “/” (e.g., created via Admin UI: 123456/71).

- Steps:
  - Attempt to update tracking via OMS:
    - PATCH /api/oms/pvt/orders/{orderId}/invoice/{invoiceNumber}/tracking using the raw value with slash, e.g. .../invoice/123456/789 → returns NOT FOUND due to route parsing on “/”.
  - Attempt to URL-encode the slash and update via OMS:
    - PATCH .../invoice/123456%2F71/tracking → still fails; OMS appears to auto-decode and breaks the path, returning 404/400.


#### Workaround


Prefer Admin UI for tracking edits on invoices with “/”: - Insert or update tracking information directly in the Admin order UI, which encodes the value internally.

-

If using API, avoid special characters in invoiceNumber:

  - Until a consistent API behavior is available, instruct integrators not to include “/” or other special characters in invoiceNumber when invoices will be updated via API routes (OMS/Orders).






