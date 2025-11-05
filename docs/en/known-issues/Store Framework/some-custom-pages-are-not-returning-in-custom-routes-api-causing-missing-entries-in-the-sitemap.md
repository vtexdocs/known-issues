---
title: 'Some custom pages are not returning in Custom Routes API causing missing entries in the sitemap'
slug: some-custom-pages-are-not-returning-in-custom-routes-api-causing-missing-entries-in-the-sitemap
status: PUBLISHED
createdAt: 2025-11-05T17:24:28.686Z
updatedAt: 2025-11-05T17:24:28.686Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: some-custom-pages-are-not-returning-in-custom-routes-api-causing-missing-entries-in-the-sitemap
locale: en
kiStatus: Backlog
internalReference: 1319581
---

## Summary


In stores with a high number of custom pages, some of them do not appear in the Custom Routes API, which prevents them from being included in the store's sitemap.


#### Simulation



- Identify an account that has a high volume of custom routes.
- Make a call to the Custom Routes API to list the routes.
- Check the response and observe that some custom pages created are not listed in the return.
- Access the new sitemap generated for the store.
- Verify that the pages missing from the API response are also not present in the sitemap.


#### Workaround


N/A



