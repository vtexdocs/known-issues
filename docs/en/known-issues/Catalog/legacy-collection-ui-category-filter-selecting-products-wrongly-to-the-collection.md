---
title: 'Legacy collection UI category filter selecting products wrongly to the collection'
slug: legacy-collection-ui-category-filter-selecting-products-wrongly-to-the-collection
status: PUBLISHED
createdAt: 2022-06-02T14:48:34.000Z
updatedAt: 2022-12-20T16:36:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-collection-ui-category-filter-selecting-products-wrongly-to-the-collection
locale: en
kiStatus: Backlog
internalReference: 590934
---

## Summary

Eventually, depending on the number of products that we have inside a category, if we select the categories filters on the legacy collection UI, it may return products that do not belong to these categories.

## Simulation

- Create a collection using the legacy collection UI;
- Insert products using the categories filter, the categories should have a large number of products.
- The collection sometimes may have products that do not belong to this category.

## Workaround

- On the legacy Collection UI, create a filter to remove the category from this product.