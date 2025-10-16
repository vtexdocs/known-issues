---
title: SKUs & Products Import Timeout
slug: skus-products-import-timeout
status: PUBLISHED
createdAt: 2025-10-16T20:43:59.481Z
updatedAt: 2025-10-16T20:43:59.481Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: skus-products-import-timeout
locale: en
kiStatus: Backlog
internalReference: 1201280
---

## Summary


Currently, the catalog module can present a timeout in any of its operations if the amount of used data is too large.

The "Import & Export" module is one of such. Depending on the amount of products, skus and related data on the imported sheets, also on the amount of associated data to these, the operation can take too long to process (over 50s) and eventually lead to a timeout error.


#### Simulation


This issue is hard to simulate unless the user has a specific catalog setup. Attempt to import large sheets (over 1k registers) for users with a complex catalog, possibly, they will face the timeout issue.


#### Workaround


Split your data into smaller chunks.



