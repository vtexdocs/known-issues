---
title: 'Products not being correctly matched when the productName contains numbers'
slug: products-not-being-correctly-matched-when-the-productname-contains-numbers
status: PUBLISHED
createdAt: 2023-03-01T18:54:58.000Z
updatedAt: 2023-10-19T12:08:10.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: products-not-being-correctly-matched-when-the-productname-contains-numbers
locale: en
kiStatus: Fixed
internalReference: 762525
---

## Summary

When the seller sends a sku to the marketplace, the Matcher system is responsible for consulting the marketplace catalog and verify if there is already a similar product to the seller's skus.
It does that primarly by the ProductName.

However, this search is not always working when in this product Name there are number characters.

## Simulation

1. Seller sends skus to the marktplace with numbers on the Product Name;
2. The skus will be approved separately (instead of having a match) on the marketplace catalog.

## Workaround

Send the product without numbers on its name.