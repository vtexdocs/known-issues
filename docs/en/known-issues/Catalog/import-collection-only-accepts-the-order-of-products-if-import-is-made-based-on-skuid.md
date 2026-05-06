---
title: 'Import collection only accepts the order of products if import is made based on "skuId"'
slug: import-collection-only-accepts-the-order-of-products-if-import-is-made-based-on-skuid
status: PUBLISHED
createdAt: 2023-12-15T16:34:57.000Z
updatedAt: 2023-12-21T18:54:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: import-collection-only-accepts-the-order-of-products-if-import-is-made-based-on-skuid
locale: en
kiStatus: Fixed
internalReference: 953862
---

## Summary

When importing a spreadsheet of products into a collection, the user can choose to select the products either by "skuId", "productId", "skuRefId" or "productRefId".

However, the order of the products in the collection is only being respected when the spreadsheet is using "skuId".

## Simulation

1. Create a new collection;
2. Use import spreadsheet to add products;
3. Choose a field different from "skuId" to fill out the spreadsheet;
4. Check that the order of products on the collections is different than the order on the spreadsheet.

## Workaround

Use the column "skuId" to fill out the spreadsheet.