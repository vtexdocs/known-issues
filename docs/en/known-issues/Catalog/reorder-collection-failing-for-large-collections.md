---
title: 'Reorder Collection Failing for Large Collections'
slug: reorder-collection-failing-for-large-collections
status: PUBLISHED
createdAt: 2025-11-17T17:33:11.562Z
updatedAt: 2025-11-17T17:33:11.562Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: reorder-collection-failing-for-large-collections
locale: en
kiStatus: Backlog
internalReference: 408140
---

## Summary


In the new collections admin UI, when a user tries to reorder the product order display, the catalog GraphQL mutation that performs this action often fails


#### Simulation


1) Check a collection in the Collection Module with 1000+ SKUs
2) Try executing the reordering drag and drop action
3) See that an error message will be prompted



#### Workaround


There are no workarounds (would be creating a new collection in the correct order, but it is not a workaround by itself, just an alternative).



