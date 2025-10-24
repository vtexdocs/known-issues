---
title: 'Switching seller types do not trigger an indexing'
slug: switching-seller-types-do-not-trigger-an-indexing
status: PUBLISHED
createdAt: 2025-10-16T20:59:37.740Z
updatedAt: 2025-10-16T20:59:37.740Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: switching-seller-types-do-not-trigger-an-indexing
locale: en
kiStatus: Backlog
internalReference: 1242193
---

## Summary


The VTEX platform offers 2 distinct options for seller types as of the writing of this issue: 1 (broad seller) and 2 (regionalized seller).

The seller type can be changed via API https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog_system/pvt/seller, however, when doing so, all items that are sold by this seller should be indexed, otherwise, side effects such as items that should be appearing for specific available sellers are not correctly updated.


#### Simulation


1 - Switch the isBetterScope property of a seller in your store.

2 - Check an item's indexing history after this movement and you will be able to see that its indexed data was not updated


#### Workaround


Reindexing the database after updating the given seller.



