---
title: Shopee Error Item tier-variation level not same when updating migrated products
slug: shopee-error-item-tiervariation-level-not-same-when-updating-migrated-products
status: PUBLISHED
createdAt: 2025-09-01T20:17:06.904Z
updatedAt: 2025-09-01T20:17:06.904Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-error-item-tiervariation-level-not-same-when-updating-migrated-products
locale: en
kiStatus: Backlog
internalReference: 1284853
---

## Summary


Migrated products from the previous integration version cannot be updated in the marketplace when the _tier variations_ (SKUs) structure is modified. Bridge returns  error message: _"Item tier-variation level not same"_.


#### Simulation



- Migrate a product from the previous integration version with existing _tier variations_.
- Modify the _tier variations_ structure (e.g., SKU combinations or levels).
- Try to update the product in Bridge.
- The system returns the error: _"Item tier-variation level not same"_


#### Workaround


N/A


