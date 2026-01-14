---
title: 'Magazine Luiza SKU creation fails with misleading “already exists” error when data is unchanged'
slug: magazine-luiza-sku-creation-fails-with-misleading-already-exists-error-when-data-is-unchanged
status: PUBLISHED
createdAt: 2026-01-14T19:08:50.630Z
updatedAt: 2026-01-14T19:08:50.630Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magazine-luiza-sku-creation-fails-with-misleading-already-exists-error-when-data-is-unchanged
locale: en
kiStatus: Backlog
internalReference: 1351096
---

## Summary


When attempting to create or resend a SKU to Magazine Luiza, the operation fails with the error message Bridge:

> _“Product cannot be saved because sku {sku} already exists.”_

However, the SKU **already exists in the marketplace with identical data**, and no actual duplication attempt is being made.


#### Simulation



1. Have an existing SKU already created in Magazine Luiza.
2. Send the same SKU again through the VTEX → Bridge SKU → Magalu flow **without any changes in its payload**.
3.

The marketplace responds with the error:

> _“Product cannot be saved because sku {sku} already exists.”_



#### Workaround


N /A



