---
title: 'Detached SKU search results not considering regionalized availability'
slug: detached-sku-search-results-not-considering-regionalized-availability
status: PUBLISHED
createdAt: 2025-12-26T19:01:27.614Z
updatedAt: 2025-12-26T19:01:27.614Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: detached-sku-search-results-not-considering-regionalized-availability
locale: en
kiStatus: Backlog
internalReference: 1344487
---

## Summary


For regionalized stores where the SKUs are detached, the product SKUs that are stockout are removed from the search result, but this does not happen.

Regionalized navigations may return stockout SKUs because one of the product SKUs is available on regular or white-label sellers.


#### Simulation


Considering a store with two sellers and the following availability matrix for a specific product:

- size: small; seller A: available; seller B: unavailable
- size: large; seller A: unavailable; seller B: unavailable

In a navigation with "regionId: seller A",  the search result will return the SKUs "size:small" and "size:large".


#### Workaround


N/A


