---
title: 'Search results may not display products from the synonyms'
slug: search-results-may-not-display-products-from-the-synonyms
status: PUBLISHED
createdAt: 2025-10-09T12:51:37.308Z
updatedAt: 2025-10-09T12:51:37.308Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-results-may-not-display-products-from-the-synonyms
locale: en
kiStatus: Backlog
internalReference: 1094028
---

## Summary


When searching for products from a term that has synonyms, Intelligent Search may not retrieve the products from the synonyms.

This behavior happens because products associated with the synonym did not reindex to be linked to a product after adding or updating a synonym. It is caused by the re-index notification being lost in the process.


#### Simulation


To ensure that this issue is happening, be aware of the following evidence:

1 - The number of results differs from each other.

- On **Admin > Storefront > Intelligent Search > Synonyms**, create or update an unidirectional synonym.
- Then, on **Admin > Storefront > Intelligent Search >  Explained Search**, compare the results when searching for the original term and the synonym.
- When comparing the results, the results when searching for the synonym don't include all the products when searching for the original specific term.

2 - The last re-index date of a product is older than the date of the synonym creation.

- Choose one product from the original term that does not appear when searching using the synonym.
- Compare the dates between the last re-index date of the product (**Admin > Storefront > Intelligent Search >  Indexing history** ) and the creation/update date of the synonym (**Admin > Storefront > Intelligent Search > Synonyms**).
- If the last re-index date of a product is older than the date of the synonym creation, then this case can fit with this KI.


#### Workaround


Open a ticket to the CX team with the evidence information so that we can re-index the affected products.


