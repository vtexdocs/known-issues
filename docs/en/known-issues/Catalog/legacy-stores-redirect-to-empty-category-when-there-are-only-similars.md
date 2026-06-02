---
title: 'Legacy Stores Redirect to Empty Category when there are Only Similars'
slug: legacy-stores-redirect-to-empty-category-when-there-are-only-similars
status: PUBLISHED
createdAt: 2026-05-28T20:25:12.000Z
updatedAt: 2026-06-02T22:20:31.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-stores-redirect-to-empty-category-when-there-are-only-similars
locale: en
kiStatus: Backlog
internalReference: 1413684
---

## Summary

Currently, there is the option to register a similar category in the catalog module, which will make products from said category also load on the former's search result.

However, if the main category has no available products, the system redirects the user to a "not found" before it enters the logic of fetching the similar items, consequenly, it doesnt ever load the similar products

## Simulation

1 - in a category with no available nor howing items, register a similar category with active, showing items
2 - try to load the first category, nothing will be shown
3 - add at least 1 showing item in the first category - all

## Workaround

add at least 1 item, even if set as "show if unavailable", in the main category