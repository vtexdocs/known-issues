---
title: 'Catalog Search API limited to 2500 results'
slug: catalog-search-api-limited-to-2500-results
status: PUBLISHED
createdAt: 2025-11-06T13:45:56.133Z
updatedAt: 2025-11-06T13:45:56.133Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-search-api-limited-to-2500-results
locale: en
kiStatus: No Fix
internalReference: 891184
---

## Summary


When using Catalog Search API the maximum results obtained is 2500, even if there are more products.
The pagination is up to 50 products and it works correctly until the parameter _from reaches the number of 2500. When they set `_from` above 2500 they get `"Parameter _from can't be greater than 2500."`


#### Simulation


This situation can happen when requesting the API using postman or using the shared catalog on seller portal accounts (it uses the same API on the UI).

When using API: - make the request using the paramenter `_from` above 2500
When using Shared Catalog: - skip the pagination on available products tab until you reach 2500. The next pages won't update and will show the same results as the page before 2500.


#### Workaround


N/A



