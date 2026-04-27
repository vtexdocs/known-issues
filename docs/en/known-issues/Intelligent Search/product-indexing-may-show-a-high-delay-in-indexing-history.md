---
title: 'Product indexing may show a high delay in Indexing History'
slug: product-indexing-may-show-a-high-delay-in-indexing-history
status: PUBLISHED
createdAt: 2026-04-27T16:51:42.048Z
updatedAt: 2026-04-27T16:51:42.048Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-indexing-may-show-a-high-delay-in-indexing-history
locale: en
kiStatus: Backlog
internalReference: 1398224
---

## Summary

Indexing History page in the Admin may show a high indexing delay for some products.

This behavior may happen even though the product has already been correctly indexed and is up to date in search and storefront.

## Simulation

1. In VTEX Admin, go to the **Indexing History** page for search/catalog indexing.
2. Look for a product whose row shows a high delay value in the Indexing History list.
 3. When opening the indexing details, the indexing is stuck for many hours.

To validate if the product is up to date in search and storefront:

1. Open the product's PDP for the affected product.
2. Compare the expected information with the PDP information.

## Workaround

N/A