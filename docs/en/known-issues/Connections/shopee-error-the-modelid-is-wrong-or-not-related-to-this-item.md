---
title: 'Shopee Error “The model_id is wrong or not related to this item”'
slug: shopee-error-the-modelid-is-wrong-or-not-related-to-this-item
status: PUBLISHED
createdAt: 2025-09-15T17:42:17.844Z
updatedAt: 2025-09-15T17:42:17.844Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-error-the-modelid-is-wrong-or-not-related-to-this-item
locale: en
kiStatus: Backlog
internalReference: 1292317
---

## Summary


After migrating some accounts from the previous version of the Shopee connector, users encounter the following error when attempting to update SKUs:
`The model_id is incorrect or does not correspond to this item`


#### Simulation


This is dependent on Shopee’s product-model linkage and may not be consistently reproducible. When it occurs, the pattern observed was:

- In Bridge > Products for Shopee, updates for one or more SKUs fail with “The model_id is wrong or not related to this item”.
- The affected SKUs are variations under a Shopee product (item) where the platform expects a specific model_id linkage; VTEX SKUs mapped to that Shopee item trigger the error during update attempts.


#### Workaround


N/A



