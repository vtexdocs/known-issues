---
title: 'Manual sorting of collections doesn''t work as expected'
slug: manual-sorting-of-collections-doesnt-work-as-expected
status: PUBLISHED
createdAt: 2025-08-12T18:34:41.253Z
updatedAt: 2025-08-12T18:34:41.253Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: manual-sorting-of-collections-doesnt-work-as-expected
locale: en
kiStatus: Fixed
internalReference: 295245
---

## Summary



Manual sorting of collections doesn't work as expected. There are two ways to sort SKUs using a collection:


1. Using the ContentPlaceHolder control type collection;
2. Using a search or search context of a Landing Page with the SearchResult control (in this case, the querystring _O=productClusterOrder_{ProductClusterId}%20asc_ must be used).

In both cases, the system supports sorting up to **30** SKUs of the collection. When the collection has more than 30 SKUs, all spare SKUs will be listed BEFORE those positioned between 1 and 30.


> This behavior is observed in all VTEX stores, including those developed using VTEX IO.



#### Simulation




1. Create a collection;
2. Manually insert more than 30 SKUs;
3. Save the collection;
4. Create a template with ContentPlaceHolder or SearchResult;
5. Set up the association of the ContentPlaceHolder with the collection or set the search in the folder search context;
6. Wait a few minutes for the cache to expire;
7. Access the page and note that the first ordered items will be items placed after 30.


#### Workaround



As a workaround, we have the following options:


- Use collections with only 30 items, if it's essential to apply manual sorting;
- Use the Release Date field, register the dates in the desired sequence, and use the field to sort the collection.


