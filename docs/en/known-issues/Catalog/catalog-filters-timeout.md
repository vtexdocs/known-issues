---
title: 'Catalog Filters Timeout'
slug: catalog-filters-timeout
status: PUBLISHED
createdAt: 2023-10-19T20:11:21.000Z
updatedAt: 2026-10-23T23:32:36.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filters-timeout
locale: en
kiStatus: Backlog
internalReference: 922350
---

## Summary

For stores with a large quantity of skus (5 million or more), often, when filtering using the catalog UI's filters, either for the main menu or for the reports section, if the filter query returns a very large result, the UI times out (504 gateway timeout)

## Simulation

There is no reliable way to simulate it consistently - only specific large queries for few accounts end up in the error.

## Workaround

Filter for smaller chunks of products when using the catalog UI filters.