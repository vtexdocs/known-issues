---
title: 'disableSitemapEntry flag not respected by sitemap generation'
slug: disablesitemapentry-flag-not-respected-by-sitemap-generation
status: PUBLISHED
createdAt: 2026-01-15T19:42:39.002Z
updatedAt: 2026-01-15T19:42:39.002Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: disablesitemapentry-flag-not-respected-by-sitemap-generation
locale: en
kiStatus: Backlog
internalReference: 1351681
---

## Summary


Setting disableSitemapEntry: true on internal routes does not prevent those routes from being included in the generated sitemap. Affected merchants see disabled routes still appearing in brand/category/product sitemaps even after attempting to regenerate the sitemap. This impacts storefronts using the unified sitemap pipeline for Store Framework, FastStore, or legacy, especially when trying to de-index specific routes.


#### Simulation


1) Query an internal route via GraphQL to confirm current properties:
{ internal { get(path: "/") { from type declarer id resolveAs origin disableSitemapEntry } } }

2) Save the route with disableSitemapEntry set to true using:
mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id query endDate binding resolveAs origin disableSitemapEntry } } } with variables including "disableSitemapEntry": true (matching the route fields retrieved in step 1).

3) Wait for sitemap generation (note: forcing generateSitemap has no effect in the unified pipeline which runs once per day).

4) Observe that the route still appears in the sitemap XML (e.g., brand-0.xml), despite disableSitemapEntry being set to true earlier


#### Workaround


Open a support ticket so we can install and use the HKignore version of the vtex.store-sitemap.



