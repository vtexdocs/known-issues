---
title: 'Search autocomplete providing outdated URL after navigating through suggestions'
slug: search-autocomplete-providing-outdated-url-after-navigating-through-suggestions
status: PUBLISHED
createdAt: 2024-01-19T01:27:19.000Z
updatedAt: 2024-01-19T01:27:19.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-autocomplete-providing-outdated-url-after-navigating-through-suggestions
locale: en
kiStatus: Backlog
internalReference: 968604
---

## Summary

At the component "search-bar" with "autocomplete-result-list.v2", hovering the search suggestions will also change the suggested products as well as the text from the "see all {n} products" to mention the selected search, but the hyperlink from "see all" follows the original search term instead of the selected.

## Simulation

- search for a partial term
- hover the mouse over suggested terms
- click on "see all products"

## Workaround

N/A