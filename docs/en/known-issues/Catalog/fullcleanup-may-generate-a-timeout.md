---
title: Fullcleanup May Generate a Timeout
slug: fullcleanup-may-generate-a-timeout
status: PUBLISHED
createdAt: 2025-10-02T19:29:30.417Z
updatedAt: 2025-10-02T19:29:30.417Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: fullcleanup-may-generate-a-timeout
locale: en
kiStatus: Backlog
internalReference: 1228132
---

## Summary


In the `/admin/Site/fullcleanup.aspx` interface, using this procedure for accounts with multiple products, brands, or categories generates a timeout, which typically results in a 500 error and no output when performing the operation.


#### Simulation


1) Create over ~5k products in a store. (this is just a rough estimate, it may happen for more or less products than that)

2) Try running the delete products & SKUs procedure on the FullCleanUp interface: `.myvtex.com/admin/site/fullcleanup.aspx`

A 500 response will be returned along with a timeout error


#### Workaround


Ask the support team to perform this action.



