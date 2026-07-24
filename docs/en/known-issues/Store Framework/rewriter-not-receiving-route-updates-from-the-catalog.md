---
title: 'Rewriter not receiving route updates from the catalog'
slug: rewriter-not-receiving-route-updates-from-the-catalog
status: PUBLISHED
createdAt: 2024-07-16T22:24:41.000Z
updatedAt: 2026-07-24T23:48:54.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: rewriter-not-receiving-route-updates-from-the-catalog
locale: en
kiStatus: Backlog
internalReference: 1066527
---

## Summary

Some catalog updates related to routes do not arrive at the rewriter. This affects brands, categories, subcategories, and departments, in both directions:

- **New or edited routes** are not received by the rewriter. Running the bootstrap query is normally enough to sync them, but in particular cases it does not work. On the storefront, the route returns no products or displays the "something exploded" error.
- **Changed or deleted routes** leave a stale entry behind, so the URL keeps pointing to the wrong type. A deleted brand, for example, keeps resolving with `map=b`. This divergence can also cause problems on the Intelligent Search.

A useful signal for the second case: compare the path on `pageType` and on the rewriter. If `pageType` returns `fullText` while the rewriter still returns the old type, the pageType was updated and the rewriter was not.

## Simulation

1. Reproduce the missing update:

- _Creation/edit:_ create a new category/subcategory/brand route in the catalog, or edit an existing one, then try to access it on the storefront;
- _Deletion/change:_ delete an existing brand from the catalog, then look for that brand on the storefront.


2. Check what the rewriter has for the path:

    { internal { get(path: "/path") { from declarer id query disableSitemapEntry } }}

A `null` response means the rewriter never received the update: run bootstrap and, if that fails, use the `internal.save`

## Workaround

.
A response carrying the old `query`/`type` means the rewriter kept a stale entry: use the `internal.delete` workaround.

3. Try the bootstrap query first:

    { bootstrap { brands categories }}

If the route is still missing or still stale after the bootstrap, apply the workarounds below.


## **Workaround**
For routes that were removed or changed in the catalog but persist in the rewriter, delete the route manually:

    mutation { internal { delete(path: "/path") { from id resolveAs } }}


For routes that were created or edited but never arrived, add the route manually:

    mutation saveInternal($route: InternalInput!) { internal { save(route: $route) { from declarer type id query endDate binding resolveAs origin disableSitemapEntry } }}



    { "route": { "from": "", "query": { "map": "" // "b" for brands, for example }, "declarer": "vtex.store@2.x", "binding": "", "type": "", "id": "{{id}}", "origin": "vtex.routes-bootstrap@0.4.3:brand-bootstrap" }}

After either mutation, re-run the `internal.get` query to confirm the path is resolving as expected.