---
title: SKU Specification filters aren't loaded when the SKU is only available in a Whitelabel seller
slug: sku-specification-filters-arent-loaded-when-the-sku-is-only-available-in-a-whitelabel-seller
status: PUBLISHED
createdAt: 2025-08-12T18:59:26.753Z
updatedAt: 2025-08-12T18:59:26.753Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sku-specification-filters-arent-loaded-when-the-sku-is-only-available-in-a-whitelabel-seller
locale: en
kiStatus: Fixed
internalReference: 431888
---

## Summary


Since a recent update in the Search behavior, unavailable SKUs' specification filters are not shown in the search result pages.

If a store's architecture rely solely on white label sellers for product availability, the specification filters aren't shown either, because the sellers' availability is not being considered in the search filters.


#### Simulation


Have zero product availability for a specific search result (search term, department, brand, etc.) in the main store. Even if a white label seller's availability is being shown on the shelves, the filters related to SKU specifications won't show up.


#### Workaround


Have product availability in the main store. This way, all SKU specification filters will be available.

If this doesn't suit the business' operation, it is possible to customize the front in order to not allow customers to buy items from the main storage.


