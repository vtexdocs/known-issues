---
title: 'Faststore is sending search events on collection pages with the collection ID to IS reports'
slug: faststore-is-sending-search-events-on-collection-pages-with-the-collection-id-to-is-reports
status: PUBLISHED
createdAt: 2025-10-16T20:28:33.905Z
updatedAt: 2025-10-16T20:28:33.905Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-is-sending-search-events-on-collection-pages-with-the-collection-id-to-is-reports
locale: en
kiStatus: Fixed
internalReference: 1159040
---

## Summary


When a search event is made on a collection page on Faststore stores, the IS analytics module response also contains the collection ID. This can have bad effects on the autocomplete as well.


#### Simulation



- Try entering a collection page
- Wait for the IS analytics module to be updated with that information
- The collection ID will appear where only the collection name should be


#### Workaround


N/A



