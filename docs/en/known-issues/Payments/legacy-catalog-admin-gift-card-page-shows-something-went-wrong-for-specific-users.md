---
title: 'Legacy Catalog Admin Gift Card page shows “Something went wrong” for specific users'
slug: legacy-catalog-admin-gift-card-page-shows-something-went-wrong-for-specific-users
status: PUBLISHED
createdAt: 2026-04-30T16:24:07.038Z
updatedAt: 2026-04-30T16:24:07.038Z
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

1. Access the legacy Gift Card page: _/admin/Site/Vale.aspx._
2. Apply a malformed filter value (e.g., pasting a label+code string like `“Código: AAAA-XXXX-BBBB-YYYY”` instead of a pure redemption code). The page persists the filter per user+page in the database.
3. The UI reloads with a "Something went wrong" error.

## Workaround

This workaround requires another user able to access the Gift Card page without facing the error.


1. In the broken page, get the _VtexIdclientAutCookie_ **from the user facing the issue** and save it (it will be used on step 8).
2. Successfully access the Gift Card page **with another user** and open the browser devtools/inspect (F12).
3. Open the "Network" tab in devtools. In the VTEX admin, open the filters menu and click the button "_Clear Search Filters_".
4. Look for the **POST method** request in the "Network" tab called "_Vale.aspx_". In the _Payload_ of this request, you must see a field defined as: `ctl00$Conteudo$ctlFiltro$btnLimpar  Clear Search Filters`
5. With the right button, click on the request name (_Vale.aspx_) and select the option "_Copy as cURL (bash)_".
6. Open Postman or a similar API tool.
7. Import/paste the copied request.
8. In the **Headers** tab, change the "_Cookie_" to "_VtexIdclientAutCookie_" and set the **value from the user facing the issue**.
9. Send the request.
10. Refresh the page **that was showing the error**. It is expected to load correctly now.