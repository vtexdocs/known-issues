---
title: Native Sitemap is not fully integrated with Faststore Webops
slug: native-sitemap-is-not-fully-integrated-with-faststore-webops
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: native-sitemap-is-not-fully-integrated-with-faststore-webops
locale: en
kiStatus: Backlog
internalReference: 1220872
---

## Summary


Faststore uses the `vtex.store-sitemap` app from IO to build the store's sitemap, but right now it is not fully integrated. The pages created on the hCMS, for example, are not accessible on the sitemap, and the URLs of the sitemap can point to the secure environment.


#### Simulation



- Go to the GraphQL IDE of your Faststore store and generate the sitemap through the app `vtex.store-sitemap`
- You'll see that the hCMS pages are not there, and the final domain is not correct (it is using the secure domain)


#### Workaround


For stores using v1 and v2, a proxy to point to the correct domain is possible. This is something that the client needs to customize and will solve only the sitemap itself, but the hCMS pages will not be added to the sitemap. Unfortunately, we still have no workaround for the hCMS pages on v1 and v2 stores.
We suggest using domain unification for stores using v3 (webops). Confirm if your store is correctly updated and open a ticket with product support so we can activate this feature.



