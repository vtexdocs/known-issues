---
title: 'Search API returns Timeout when querying large Master Data entities without filters'
slug: search-api-returns-timeout-when-querying-large-master-data-entities-without-filters
status: PUBLISHED
createdAt: 2025-12-11T13:04:39.464Z
updatedAt: 2025-12-11T13:04:39.464Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: search-api-returns-timeout-when-querying-large-master-data-entities-without-filters
locale: en
kiStatus: Backlog
internalReference: 1338401
---

## Summary


Master Data Search API requests may experience timeouts when querying Data Entities containing a massive volume of documents (e.g., tens or hundreds of millions). This occurs because the search operation defaults to calculating the exact total number of matching records. On extremely large datasets, this calculation requires a full scan that exceeds the API's timeout limit.

#### Simulation



1. Identify a Master Data Entity with a very high volume of documents (e.g., > 50 million).
2. Perform a generic `GET` search request to the Search API without applying specific or indexed filters.
3. Note that the request takes a long time to process and eventually fails with a Timeout error (408 Request Timeout).


#### Workaround


To mitigate this issue, ensure that search queries include specific filters—preferably on indexed fields—to reduce the scope of the database scan. Avoid broad, unfiltered searches on large entities.



