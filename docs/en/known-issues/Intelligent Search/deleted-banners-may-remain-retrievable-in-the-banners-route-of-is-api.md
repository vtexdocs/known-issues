---
title: Deleted banners may remain retrievable in the Banners route of IS API
slug: deleted-banners-may-remain-retrievable-in-the-banners-route-of-is-api
status: PUBLISHED
createdAt: 2025-09-22T14:07:32.408Z
updatedAt: 2025-09-22T14:07:32.408Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: deleted-banners-may-remain-retrievable-in-the-banners-route-of-is-api
locale: en
kiStatus: Backlog
internalReference: 1295586
---

## Summary


Deleted banners may still be retrieved in the Banners route in the Intelligent Search API, even though it does not retrieved in the **Admin > Banners**.


#### Simulation


Follow the steps hereafter to simulate the scenario:

1. Execute the route Get list of banners registered for query.
2. The route retrieves the banners related to a search/filter.
3. In the **Admin > Banners**, search for one of the banners retrieved in the API.
4. The banner search will return no results.


#### Workaround


Open a ticket with the CX team and include evidence to request the full deletion of the banner.



