---
title: Deleted banner may still appear on PLP
slug: deleted-banner-may-still-appear-on-plp
status: PUBLISHED
createdAt: 2025-09-22T17:22:04.664Z
updatedAt: 2025-09-22T17:22:04.664Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: deleted-banner-may-still-appear-on-plp
locale: en
kiStatus: Backlog
internalReference: 1295586
---

## Summary


Deleted banner may still appear in PLP and retrieved in the Banners route in the Intelligent Search API, even though it does not appear in the **Admin > Banners** anymore**.**


#### Simulation


Follow the steps hereafter to simulate the scenario:

1. Execute the route Get list of banners registered for query using a search/filter that matches the deleted banner_._
2. The route retrieves the banner.
3. In the **Admin > Banners**, search for the banner retrieved in the API.
4. The banner search returns no results.


#### Workaround


Open a ticket with the CX team and include evidence to request the full deletion of the banner.



