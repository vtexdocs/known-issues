---
title: 'Admin Collection Brand List Timeout'
id: 4de4lqAIhr9mU77EPAbvq1
status: PUBLISHED
createdAt: 2022-08-17T15:58:26.950Z
updatedAt: 2024-07-01T18:48:37.335Z
publishedAt: 2024-07-01T18:48:37.335Z
firstPublishedAt: 2022-08-17T15:58:27.573Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: admin-collection-brand-list-timeout
locale: en
kiStatus: No Fix
internalReference: 639905
---

## Summary


Currently, for stores that have 4000+ brands on their catalog, the following brand listing does not load any brands when attempting to create a new collection:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Catalog/admin-collection-brand-list-timeout_1.png)

This occurs due to a timeout (you can see that there's a long load time and then it displays as "no brands").






## Simulation


1 - Go to the new admin collections module on a store with 4000+ brands. ex: mystore.vtex.com/admin/collections.

2- Click on the + create collections button

3 - a spinner will be shown for ~50s and then a message of "no brands", which is incorrect.





## Workaround


n/a

