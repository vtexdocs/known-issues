---
title: Products are not updated after trade policies are created/updated
slug: products-are-not-updated-after-trade-policies-are-createdupdated
status: PUBLISHED
createdAt: 2025-09-03T20:12:21.495Z
updatedAt: 2025-09-03T20:12:21.495Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-are-not-updated-after-trade-policies-are-createdupdated
locale: en
kiStatus: Backlog
internalReference: 1286569
---

## Summary


After creating or updating a trade policy, the products won't be updated internally on the Catalog nor reindexed to the Search. They will be changed only after being updated directly or by other means.

This includes activating or deactivating a trade policy or changing the assigned collection.


#### Simulation



- To have a product set for all trade policies.
- Enable or disable some trade policy.
- Check SKU information via API (Get SKU).
- The changed trade policy won't be correct on the "SalesChannels" property from the API.


#### Workaround


Currently, there's no workaround for this issue. For broad scenarios, a support ticket will be required.



