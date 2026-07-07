---
title: 'Sorting by discount ignores Sales Channel context'
slug: sorting-by-discount-ignores-sales-channel-context
status: PUBLISHED
createdAt: 2026-07-07T20:33:35.000Z
updatedAt: 2026-07-07T20:33:35.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sorting-by-discount-ignores-sales-channel-context
locale: en
kiStatus: Backlog
internalReference: 1431337
---

## Summary

When using Intelligent Search with different prices per sales channel, sorting items by discount doesn't work correctly.

Trade policies do not consider discount or promotional price variations. Updated promotions are discovered while rendering the content (so they are always correct on the product card) but don't affect discount-based sorting (made in a previous moment).

As a result, discount percentages used to rank products reflects the indexed promotion, producing an incorrect sort order on PLPs.

## Simulation

In a store with specific promotions or discounts for specific sales channels, access any PLP while sorting by best discount (`OrderByBestDiscountDESC` / `discount:desc`) — you will notice that the order does not reflect the discounts applicable to the active sales channel, as the index holds only the indexed discount values.

## Workaround

N/A