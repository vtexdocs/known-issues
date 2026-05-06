---
title: 'Inventory Management Search not working properly on seller portal accounts'
slug: inventory-management-search-not-working-properly-on-seller-portal-accounts
status: PUBLISHED
createdAt: 2022-11-08T18:54:46.000Z
updatedAt: 2023-02-24T18:21:10.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inventory-management-search-not-working-properly-on-seller-portal-accounts
locale: en
kiStatus: Backlog
internalReference: 694254
---

## Summary

Inventory Management Search does not behave as expected on seller portal accounts. This happens because these kind of accounts use a different version of the catalog.

The Logistics module use on this UI an API from catalogV1.

However, we don't have a proxy from seller portal catalog to this API on catalogV1.

The impact is that sometimes the return on the dropdown and on the result might be different if the customer is searching for a term.

The problem does not seem to happen when using product and sku Ids.

Another impact is if the filter is used, the name of the skus on the products don't appear on the UI.

## Simulation

1. Search for a specific product name;
2. Check if the dropdown returns the product;
3. Check if the search result returns the product.

## Workaround

Search by product Id and Sku Id.