---
title: 'Sitemap returns "Error fetching sitemap data"'
slug: sitemap-returns-error-fetching-sitemap-data
status: PUBLISHED
createdAt: 2025-11-05T17:53:11.541Z
updatedAt: 2025-11-05T17:53:11.541Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: sitemap-returns-error-fetching-sitemap-data
locale: en
kiStatus: Backlog
internalReference: 1319643
---

## Summary


Some stores are experiencing the error "Error fetching sitemap data" when attempting to access the main `/sitemap.xml` file. This prevents standard bots and crawlers from accessing the store's sitemap structure.


#### Simulation



- Access the main sitemap URL of an affected store (e.g., `https://www.{storedomain}.com/sitemap.xml`).
- Observe that instead of returning the XML index, the system returns the message "Error fetching sitemap data".


#### Workaround


Install the hotfix version of the sitemap app on the affected account: `vtex.store-sitemap@2.18.4-hkignore`



