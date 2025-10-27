---
title: 'Specific characters removed from the filtered search URL'
slug: specific-characters-removed-from-the-filtered-search-url
status: PUBLISHED
createdAt: 2025-10-16T20:41:50.623Z
updatedAt: 2025-10-16T20:41:50.623Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: specific-characters-removed-from-the-filtered-search-url
locale: en
kiStatus: Backlog
internalReference: 1196131
---

## Summary


Some special characters, such as the comma, may be removed from the filter's URL. This may generate a collision between products with different values.


#### Simulation



Two different products with an attribute Size and values "2,5" and "25" will use the same URL: "/size/25".

Although you may see the two filter values to be selected in the store, they will result in the same products


#### Workaround


N/A


