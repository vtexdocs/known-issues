---
title: 'Reorder Collection Failing for Large Collections'
slug: reorder-collection-failing-for-large-collections
status: PUBLISHED
createdAt: 2026-01-29T19:35:45.873Z
updatedAt: 2026-01-29T19:35:45.873Z
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


In the new Collections admin UI, when a user tries to reorder the product order display, the catalog GraphQL mutation that performs this action often fails due to a timeout in the operation.


#### Simulation


1) Open a collection in admin that contains a large volume of products
2) Execute the reordering drag and drop or manually selecting the new position of the product
3) An error message will be prompted on the screen


#### Workaround


N/A

