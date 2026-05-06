---
title: 'Price range disregards sales policy'
slug: price-range-disregards-sales-policy
status: PUBLISHED
createdAt: 2021-01-08T19:37:43.000Z
updatedAt: 2024-01-19T19:13:25.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: price-range-disregards-sales-policy
locale: en
kiStatus: Backlog
internalReference: 322764
---

## Summary

The price range filter, which is configured from the options category, considers the price that is registered in all of the store's sales policies, which means that it will always display the lowest registered value from any sales policy, possibly displaying a product that is not in the price range of the that particular sales policy.

## Simulation

1. Register different prices in different sales policies for the same SKU;
2. Create price ranges in the category in which the registered prices have different ranges;
3. In the sales policy of the SKU with the highest price, filter by price range
4. Notice that the considered SKU value belongs to another sales policy, because the filter only looks at the lowest value of any policy.

## Workaround

There is no available workaround for this scenario.