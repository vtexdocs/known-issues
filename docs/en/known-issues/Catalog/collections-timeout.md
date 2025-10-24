---
title: 'Collections Timeout'
slug: collections-timeout
status: PUBLISHED
createdAt: 2025-10-02T19:53:52.135Z
updatedAt: 2025-10-02T19:53:52.135Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-timeout
locale: en
kiStatus: Fixed
internalReference: 434026
---

## Summary


Often, when attempting to save data for a collection group using the collections application, under the path /admin/a and attempting to Save Group, the user will, in cases of large catalogs (large amount of categories, brands, products), face a timeout error message and won't be able to save their changes.

This also can happen for the new collections module.


#### Simulation


1) Go to the CMS UI application using a store that has a large catalog base, for instance, >10000 products.
2) Go to "Product Clusters (Collections) and select "_new group_"
3)  Create a group and then select a few checkboxes in the form
4) Attempt to save these changes
5) If the request takes longer than 50 seconds to save, which is often the case in accounts with a large amount of data, the request will be stopped by and the data will not be saved.


#### Workaround


Using our collections API endpoints: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection?endpoint=post-/api/catalog/pvt/collection, however, it is important to note that in some cases, where there's a large amount of data being updated, the timeout may still occur via API.


