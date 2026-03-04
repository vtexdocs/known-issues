---
title: 'Legacy Catalog Admin Gift Card page shows “Something went wrong” for specific users'
slug: legacy-catalog-admin-gift-card-page-shows-something-went-wrong-for-specific-users
status: PUBLISHED
createdAt: 2026-03-04T20:07:21.730Z
updatedAt: 2026-03-04T20:07:21.730Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: legacy-catalog-admin-gift-card-page-shows-something-went-wrong-for-specific-users
locale: en
kiStatus: Backlog
internalReference: 1373636
---

## Summary

Some users cannot access the Gift Card page in the legacy Catalog Admin (e.g., /admin/Site/Vale.aspx). The screen shows a generic “Something went wrong” error. The issue is user-specific and occurs when an invalid filter becomes persisted server-side for that page and user, causing internal calls to Gift Card System to return HTTP 400.

## Simulation

1) Access the legacy Gift Card page: _/admin/Site/Vale.aspx. _
2) Apply a malformed filter value (e.g., pasting a label+code string like `“Código: AAAA-XXXX-BBBB-YYYY”` instead of a pure redemption code). The page persists the filter per user+page in the database.
3) The UI reloads with a "Something went wrong" error.

## Workaround

N/A