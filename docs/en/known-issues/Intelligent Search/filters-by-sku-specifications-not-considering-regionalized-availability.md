---
title: Filters by SKU specifications not considering regionalized availability
slug: filters-by-sku-specifications-not-considering-regionalized-availability
status: PUBLISHED
createdAt: 2025-08-15T19:48:13.719Z
updatedAt: 2025-08-15T19:48:13.719Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filters-by-sku-specifications-not-considering-regionalized-availability
locale: en
kiStatus: No Fix
internalReference: 1045111
---

## Summary


Filtering the search by an SKU specification will also apply a filter by SKU availability, removing products where the selected variation is stockout, but it doesn't apply to regionalized stores.

Regionalized navigations may return products where the filtered variation is unavailable because the indexed availability for an SKU specification is based on all regular and whitelabel sellers.


#### Simulation


Considering a store with two sellers and the following availability matrix for a specific product:

- size: small; seller A: available; seller B: unavailable
- size: large; seller A: unavailable; seller B: unavailable

In a navigation with "regionId: seller B", filtering by "size: small" will return the product (as it were available) and "size: large" will hide the product (because it's unavailable everywhere).


#### Workaround


N/A


