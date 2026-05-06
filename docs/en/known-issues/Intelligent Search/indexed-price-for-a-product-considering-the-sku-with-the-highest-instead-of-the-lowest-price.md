---
title: 'Indexed price for a product considering the SKU with the highest instead of the lowest price'
slug: indexed-price-for-a-product-considering-the-sku-with-the-highest-instead-of-the-lowest-price
status: PUBLISHED
createdAt: 2023-05-09T14:39:44.000Z
updatedAt: 2023-08-18T17:23:52.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: indexed-price-for-a-product-considering-the-sku-with-the-highest-instead-of-the-lowest-price
locale: en
kiStatus: Fixed
internalReference: 822120
---

## Summary

The indexed price, which is a single value for the whole product (along with its SKUs), and used to sort and filter the products in the Intelligent Search, is considering the highest price among the SKUs, while the expected is to consider the SKU with the lowest price – along with additional rules about the trade policy and sellers from the SKUs.

## Simulation

- to have an item with multiple SKUs with different prices
- apply a filter by price, usually via the "price range" filter
- observe that it will be based on the more expensive SKU instead of the cheapest one

## Workaround

N/A