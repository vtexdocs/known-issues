---
title: Filters by SKU specifications not considering specific trade policy
slug: filters-by-sku-specifications-not-considering-specific-trade-policy
status: PUBLISHED
createdAt: 2025-10-16T20:29:17.242Z
updatedAt: 2025-10-16T20:29:17.242Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filters-by-sku-specifications-not-considering-specific-trade-policy
locale: en
kiStatus: Backlog
internalReference: 1160165
---

## Summary


Filtering the search by an SKU specification will also apply a filter by SKU availability, removing products where the selected variation is stockout, but it doesn't consider the specific trade policy.

Browsing different trade policies may show products where the filtered variation is unavailable because the indexed availability for an SKU specification is based on all trade policies (any available).


#### Simulation


Considering a store with two trade policies and the following availability matrix for a specific product:

- size: small; trade policy 1: available; trade policy 2: unavailable
- size: large; trade policy 1: unavailable; trade policy 2: unavailable

In a navigation on trade policy 2, filtering by "size: small" will return the product (as it were available) and "size: large" will hide the product (because it's unavailable everywhere).


#### Workaround


N/A


