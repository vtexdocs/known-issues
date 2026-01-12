---
title: 'Custom routes missing from Sitemap for subaccounts'
slug: custom-routes-missing-from-sitemap-for-subaccounts
status: PUBLISHED
createdAt: 2026-01-12T14:41:12.505Z
updatedAt: 2026-01-12T14:41:12.505Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: custom-routes-missing-from-sitemap-for-subaccounts
locale: en
kiStatus: Backlog
internalReference: 1349623
---

## Summary


Custom routes are correctly returned by the custom-routes endpoint but do not appear in the store’s sitemap.xml. Affected storefront(s) see sitemap.xml generated without the custom routes entries, even after setting disableSitemapEntry=false and regenerating the sitemap. This is linked to the sitemap generator relying on an identity route that does not list sub-accounts.


#### Simulation


Store Framework store with sub-account setup (e.g., lojapuket) and store-sitemap app enabled and configured

1 - Access the workspace admin used for validation. Confirm app “Enable apps routes source” is active (vtex.store-sitemap installed).
2 - Verify that custom routes are returned at /_v/public/sitemap/custom-routes.
3 - Open the store’s sitemap.xml and observe custom routes are not present.


#### Workaround


Open a support ticket to install the hkignore for the Sitemap app.



