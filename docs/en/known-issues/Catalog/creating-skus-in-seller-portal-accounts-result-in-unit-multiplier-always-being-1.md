---
title: 'Creating SKUs in seller portal accounts result in unit multiplier always being 1'
slug: creating-skus-in-seller-portal-accounts-result-in-unit-multiplier-always-being-1
status: PUBLISHED
createdAt: 2026-01-09T18:08:49.709Z
updatedAt: 2026-01-09T18:08:49.709Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: creating-skus-in-seller-portal-accounts-result-in-unit-multiplier-always-being-1
locale: en
kiStatus: No Fix
internalReference: 1186329
---

## Summary


Currently, when using a "seller portal" type of VTEX account, when a user creates an SKU, its unit multiplier is always set to 1, regardless of the initially inserted value, when using the admin's UI. It leads to miscalculation of the product price when its unitMultiplier is higher than 1.


#### Simulation


1 - Using a seller portal account, create a SKU
2 - In the SKU's setting, insert any number, aside from 1, in the unit multiplier field
3 - Create the SKU, hit save
4 - The unit multiplier will have been overwritten to 1


#### Workaround


N/A


