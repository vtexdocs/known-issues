---
title: 'Deleted product may still appears in Intelligent Search after a concurrent update'
slug: deleted-product-may-still-appears-in-intelligent-search-after-a-concurrent-update
status: PUBLISHED
createdAt: 2026-11-10T23:21:02.000Z
updatedAt: 2026-11-10T23:22:03.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: deleted-product-may-still-appears-in-intelligent-search-after-a-concurrent-update
locale: en
kiStatus: Backlog
internalReference: 1483590
---

## Summary

Deactivated products can still be returned in the searches of Intelligent Search. This happens when an active product is saved just before it is deactivated. The indexer history records the deletion as completed, but the product stays in the search index.

## Simulation

1. Update (save) a product in Catalog.
2. Deactivate the same product right after the save. The save and the deactivation are processed at almost the same time.
3. Check the indexer history for the product. It shows the deletion as completed.
4. Search for the product in Intelligent Search using its product ID.


**Expected behavior:** The product does not appear in Intelligent Search.
**Actual behavior:** The product appears in Intelligent Search.

## Workaround

Open a ticket to reindex the affected products.