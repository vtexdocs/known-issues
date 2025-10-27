---
title: 'Native Sitemap is not fully integrated with Faststore'
slug: native-sitemap-is-not-fully-integrated-with-faststore
status: PUBLISHED
createdAt: 2025-10-13T14:41:34.265Z
updatedAt: 2025-10-13T14:41:34.265Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: native-sitemap-is-not-fully-integrated-with-faststore
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


**For stores using v1 and v2,** a proxy to point to the correct domain is possible. This is something that the client needs to customize and will solve only the sitemap itself, but the hCMS pages will not be added to the sitemap. Unfortunately, we still have no workaround for the hCMS pages on v1 and v2 stores.

We suggest using domain unification for **stores using v3** (webops). This is what you need to check before following:

1. Check if you have correctly renamed the file  `faststore.config`  to `discovery.config` You can follow this release note
2. Update dependencies: checking this release note. You must use only `@faststore/cli` as a dependency
3. Update the store to the most recent framework version: you can check it on the faststore repo https://github.com/vtex/faststore

Now you can update the domains of your store to use a single domain:

From

    storeUrl: "https://www.domain.com (https://www.domain.com/)",secureSubdomain: "https://secure.domain.com (https://secure.domain.com/)",checkoutUrl: "https://secure.domain.com/checkout",loginUrl: "https://secure.domain.com/api/io/login",accountUrl: "https://secure.domain.com/api/io/account",To

    storeUrl: "https://www.domain.com (https://www.domain.com/)",secureSubdomain: "https://www.domain.com (https://www.domain.com/)",checkoutUrl: "https://www.domain.com/checkout",loginUrl: "https://www.domain.com/api/io/login",accountUrl: "https://www.domain.com/api/io/account",
Important to point out that the domain unification will also not solve the issue of the hCMS pages being available on the sitemap for stores using V3.


