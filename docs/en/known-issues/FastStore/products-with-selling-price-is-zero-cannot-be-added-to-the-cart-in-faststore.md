---
title: 'Products with selling price is zero cannot be added to the cart in FastStore'
slug: products-with-selling-price-is-zero-cannot-be-added-to-the-cart-in-faststore
status: PUBLISHED
createdAt: 2025-11-14T19:21:49.300Z
updatedAt: 2025-11-14T19:21:49.300Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: products-with-selling-price-is-zero-cannot-be-added-to-the-cart-in-faststore
locale: en
kiStatus: Backlog
internalReference: 1216105
---

## Summary


Products with selling price is zero cannot be added to the cart, this issue occurs because the FastStore platform does not accept products with a price of the SKU is zero.


#### Simulation


Register a product with a SKU with zero price in the catalog;
Trying to add to cart, you receive the following message: "The desired quantity for item {nameProduct} is note available";
And the cart remains empty;


#### Workaround


To enable it to be added to the cart, configure a 100% discount price for the product, restricting the promotion depending on the shipping method selected, so that the promotion is only granted once shipping has been selected.



