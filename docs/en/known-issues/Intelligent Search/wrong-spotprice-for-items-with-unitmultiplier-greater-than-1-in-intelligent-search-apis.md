---
title: 'Wrong SpotPrice for items with UnitMultiplier greater than 1 in Intelligent Search APIs'
slug: wrong-spotprice-for-items-with-unitmultiplier-greater-than-1-in-intelligent-search-apis
status: PUBLISHED
createdAt: 2023-11-11T00:25:53.000Z
updatedAt: 2023-11-11T00:25:53.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: wrong-spotprice-for-items-with-unitmultiplier-greater-than-1-in-intelligent-search-apis
locale: en
kiStatus: Backlog
internalReference: 934687
---

## Summary

In the Intelligent Search APIs (GraphQL or REST), the `spotPrice` property from the object `items.sellers.commertialOffer` is wrong for items where the `unitMultiplier` is greater than `1`.

The `spotPrice` should represent the cheapest payment method in its single installment option in order to show the "cash price", with a discount (if any), but in this case, it ends up returning the regular price for the item.

It does not happen for items where the multiplier is lower than `1` (fracioned items).

## Simulation

At the Intelligent Search's REST API or GraphQL, check the property for items in this specific scenario.

## Workaround

The right value for `spotPrice` can be retrieved from the `Installments` array inside the same `commertialOffer` object.