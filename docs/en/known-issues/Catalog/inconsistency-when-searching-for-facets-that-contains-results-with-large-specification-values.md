---
title: 'Inconsistency when searching for facets that contains results with large specification values'
slug: inconsistency-when-searching-for-facets-that-contains-results-with-large-specification-values
status: PUBLISHED
createdAt: 2023-05-11T17:41:54.000Z
updatedAt: 2023-05-11T17:41:54.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inconsistency-when-searching-for-facets-that-contains-results-with-large-specification-values
locale: en
kiStatus: Backlog
internalReference: 824198
---

## Summary

The facets API has a specificationFilters field and this field can break the API return when the values registered in any specification of that category are too large

## Simulation

- In a category, create a Large Text field
- Add in the product a large value
- Save the product and wait for it to be indexed
- Call the Facets API and see that it returns no results

## Workaround

Adjust the size of the values