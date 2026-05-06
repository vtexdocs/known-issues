---
title: 'Seller commission updates does not index binded skus'
slug: seller-commission-updates-does-not-index-binded-skus
status: PUBLISHED
createdAt: 2023-08-31T14:44:23.000Z
updatedAt: 2024-09-30T15:09:39.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-commission-updates-does-not-index-binded-skus
locale: en
kiStatus: Backlog
internalReference: 891162
---

## Summary

When the merchant updates the seller commission on the Seller Management UI the binded skus related to this seller are not automatically indexed.

Our checkout system uses the `stockkeepingunitbyid` API to get the updated information of the sku.

On this API we have the object SkuSellers that contains the commission information. But if the sku is not indexed this object gets outdated.

This implicates in the checkout getting the old value for the commission.

## Simulation

1. Change the seller commission on the Seller Management UI.
2. Wait for cache time, around 10min.
3. Check that on the checkout simulation that the commission is outdated.

## Workaround

To prevent closing orders with the outdated commission value, the merchant can manually index the affected skus.