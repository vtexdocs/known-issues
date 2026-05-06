---
title: 'Product category information from dataLayer with a wrong sorting'
slug: product-category-information-from-datalayer-with-a-wrong-sorting
status: PUBLISHED
createdAt: 2021-01-27T14:55:26.000Z
updatedAt: 2023-02-27T21:49:07.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: product-category-information-from-datalayer-with-a-wrong-sorting
locale: en
kiStatus: Fixed
internalReference: 328415
---

## Summary

The product category information in the dataLayer at checkout pages is shown in the wrong sorting. This is represented by the "categoryTree" property.

They'll follow their IDs, sorted from low to high, which may not represent the expected hierarchy for this information.

## Simulation

Add a product to the cart and compare the properties "productCategoryIds" and "productCategories" from the orderForm with the property "categoryTree" from the dataLayer.

## Workaround

The same information can be retrieved from the orderForm API instead of the dataLayer.