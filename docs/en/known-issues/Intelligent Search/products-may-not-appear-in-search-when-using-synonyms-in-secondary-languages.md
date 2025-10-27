---
title: 'Products may not appear in search when using synonyms in secondary languages'
slug: products-may-not-appear-in-search-when-using-synonyms-in-secondary-languages
status: PUBLISHED
createdAt: 2025-08-12T17:19:23.086Z
updatedAt: 2025-08-12T17:19:23.086Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: products-may-not-appear-in-search-when-using-synonyms-in-secondary-languages
locale: en
kiStatus: Backlog
internalReference: 1268282
---

## Summary


During indexing, Intelligent Search applies normalization to synonym terms, but it does not normalize product names in secondary languages when matching those synonyms.

Because of this mismatch, synonyms with accents may fail to match product names in non-primary languages, and the affected products may not appear in the search results.

Affected languages:

- `ca-ES` - catalan


#### Simulation


Follow the steps hereafter to simulate the scenario:
1 - Create a synonym with accents in the affected locale.
2 - After the product has been reindexed (**Admin** > **Indexing History**), search for products that contain the searched synonyms.

The result does not retrieve the expected products where the original terms of the product name have accents.


#### Workaround


N/A


