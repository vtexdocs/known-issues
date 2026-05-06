---
title: "Seller Portal Product Doesn't Load When Without Images"
slug: seller-portal-product-doesnt-load-when-without-images
status: PUBLISHED
createdAt: 2023-05-02T13:58:34.000Z
updatedAt: 2023-05-02T13:58:34.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-portal-product-doesnt-load-when-without-images
locale: en
kiStatus: Backlog
internalReference: 800480
---

## Summary

For seller portal accounts, if you have a product without images for every sku, the product UI will not load properly.

## Simulation

1. create a product without any images on all of its skus using the seller portal admin ( /admin/products)
2. try acessing its product information, the data will keep loading indefinitely.

## Workaround

Add images to the items.