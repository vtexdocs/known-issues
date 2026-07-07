---
title: 'Price-based filters ignore Sales Channel and Regionalization context'
slug: pricebased-filters-ignore-sales-channel-and-regionalization-context
status: PUBLISHED
createdAt: 2026-07-07T20:38:08.000Z
updatedAt: 2026-07-07T20:38:08.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: pricebased-filters-ignore-sales-channel-and-regionalization-context
locale: en
kiStatus: Backlog
internalReference: 1431340
---

## Summary

When using Intelligent Search along with sales channel variation or regionalization (`regionId`), filters by price range don't work correctly.

Regionalization and trade policies affect availability/stock sort and filtering, but price sort and filtering always uses the base-indexed price. This also extends to the filter “promotion=yes”.

Since actual prices are resolved at render time, both the **price facet filter** and **priceRange filter** may return products whose effective regional or trade-policy price falls outside the requested range, and vice versa.

## Simulation

In a store with different prices by region or sales channel, access any PLP while applying a price range filter or the promotion facet — you will notice that results include products whose actual contextual price does not match the selected filter, as the index holds only the base price regardless of `regionId` or sales channel.

## Workaround

N/A