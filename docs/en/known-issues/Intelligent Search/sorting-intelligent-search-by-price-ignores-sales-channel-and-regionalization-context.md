---
title: 'Sorting Intelligent Search by price ignores Sales Channel and Regionalization context'
slug: sorting-intelligent-search-by-price-ignores-sales-channel-and-regionalization-context
status: PUBLISHED
createdAt: 2022-05-03T06:21:53.000Z
updatedAt: 2026-07-07T20:41:30.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sorting-intelligent-search-by-price-ignores-sales-channel-and-regionalization-context
locale: en
kiStatus: Fixed
internalReference: 571101
---

## Summary

When using Intelligent Search along with regionalization (`regionId`) or sales channel variation, sorting items by price doesn't work correctly.

Regionalization and sales channels can sort only by the availability/stock information, not considering price variations – which are always tied to the same indexed price. The updated prices are discovered while rendering the content (so they are always correct) but don't affect sorting (made in a previous moment), which extends to promotions and price range filters.

This is also a problem for items available only under a regionalized context. If the "seller 1" and its comprehensive white-label options are stockout, the item won't have a price (it'll be zero), which discards the item from filters or may put them at the end of the results.

## Simulation

In a store with different prices per whitelabel seller using regionalization or sales channel, or with items unavailable for the "seller 1", access any PLP with a filtered/regionalized by the applicable dimension while sorting by price - you will notice that product prices will not be sorted as expected.

## Workaround

N/A