---
title: 'Shopee The level of tier-variation not change'
slug: shopee-the-level-of-tiervariation-not-change
status: PUBLISHED
createdAt: 2025-09-08T20:33:30.517Z
updatedAt: 2025-09-08T20:33:30.517Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-the-level-of-tiervariation-not-change
locale: en
kiStatus: Backlog
internalReference: 1262367
---

## Summary


In a few cases, when creating a product with variations on Shopee, an error occurs where part of the structure is created successfully, but the variations (SKUs) are not. This prevents price and stock updates from being applied to the product and logs the following error message in Bridge: **"The level of tier-variation not change"**.


#### Simulation



- The product is successfully created on Shopee.
- The creation of variations (Models) fails.
- On retry, the system attempts to recreate the structure and receives the error **"The level of tier-variation not change"** in Bridge.


#### Workaround


N/A


