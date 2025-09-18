---
title: Shopee Cannot update price because the product has Shopee-exclusive promotions
slug: shopee-cannot-update-price-because-the-product-has-shopeeexclusive-promotions
status: PUBLISHED
createdAt: 2025-09-18T19:43:10.269Z
updatedAt: 2025-09-18T19:43:10.269Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-cannot-update-price-because-the-product-has-shopeeexclusive-promotions
locale: en
kiStatus: -
internalReference: 1294478
---

## Summary


In the Bridge, some items that are part of Shopee-exclusive promotions return the following error when attempting to update price or stock:
_“Cannot update price for [item variation] because the product has promotion.”_
## Simulation



1. Search for the SKU in the Bridge.
2. Attempt to update price or stock.
3. Error message is displayed in the Bridge.## Workaround


Remove the product from the promotion directly in **Shopee Seller Center**.
Once the promotion is removed, standard Bridge price and inventory updates will be accepted again by Shopee.


