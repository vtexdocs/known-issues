---
title: 'Payments Admin Defense Mode settings page fails to load (permissions and GET /admin/iframe/transactions/settings 500)'
slug: payments-admin-defense-mode-settings-page-fails-to-load-permissions-and-get-adminiframetransactionssettings-500
status: PUBLISHED
createdAt: 2026-01-09T15:29:59.632Z
updatedAt: 2026-01-09T15:29:59.632Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payments-admin-defense-mode-settings-page-fails-to-load-permissions-and-get-adminiframetransactionssettings-500
locale: en
kiStatus: Backlog
internalReference: 1348945
---

## Summary


Users with a custom License Manager role cannot access the Payments Defense Mode settings page in Admin, even when they appear to hold the expected permission. The visible symptom is a failure to load the page with a 500 error on the GET to /admin/iframe/transactions/settings (dev tools). This affects users accessing Admin > Transactions > Settings (Defense Mode) using non-owner/admin roles in Payments.

The visual symptom is erro when try to access the page:
`{"name": "HttpError", "statusCode": 404, "message": "No admin page found for current URL"'}`


#### Simulation



- Prerequisites:
  - User assigned a custom role that includes PCI Gateway > Payment-ManageStore > Manage Store.
- Steps:
  1. In Admin, navigate directly to /admin/transactions/settings (Defense Mode settings).
  2. Observe that the page fails to load, and the network panel records a 500 on GET /admin/iframe/transactions/settings.

###


#### Workaround


Access the page directly via the URL /admin/transactions/settings



