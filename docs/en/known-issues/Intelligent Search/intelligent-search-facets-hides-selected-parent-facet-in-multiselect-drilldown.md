---
title: 'Intelligent Search Facets hides selected parent facet in multiselect drill-down'
slug: intelligent-search-facets-hides-selected-parent-facet-in-multiselect-drilldown
status: PUBLISHED
createdAt: 2026-07-08T21:55:44.000Z
updatedAt: 2026-07-08T21:55:44.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-facets-hides-selected-parent-facet-in-multiselect-drilldown
locale: en
kiStatus: Backlog
internalReference: 1432016
---

## Summary

When using Intelligent Search category facets, the facet response may become inconsistent after combining multiple selections from the same category level with a child category selection.

In this scenario, selected parent category facets that are not related to the selected child category facet may stop appearing in the API response, even though they are still applied.

At the same time, the child category facet response may continue to show values that are inconsistent with the returned parent category facets.

As a result, the filters shown to the user may not match the filters that were actually selected, which can make navigation and filter removal more difficult.

## Simulation

In a store using Intelligent Search category facets, select multiple values from the same category level.

Then select a child category facet related to only part of the current selection.

After that, parent category facets that are not related to the selected child category facet may stop appearing in the API response, even though they are still applied.

At the same time, the child category facet response may continue to show values that are inconsistent with the returned parent category facets.

## Workaround

N/A