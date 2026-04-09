---
title: 'Collection title is not displayed when accessing through ?map=productClusterIds query in multilanguage accounts'
slug: collection-title-is-not-displayed-when-accessing-through-mapproductclusterids-query-in-multilanguage-accounts
status: PUBLISHED
createdAt: 2026-04-09T19:01:36.293Z
updatedAt: 2026-04-09T19:01:36.293Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: collection-title-is-not-displayed-when-accessing-through-mapproductclusterids-query-in-multilanguage-accounts
locale: en
kiStatus: Backlog
internalReference: 1390606
---

## Summary

When changing the store's language in a collection page through `?map=productClusterIds`, the collection title and breadcrumbs may disappear.

Although collections are not meant to be language-dependent, the current indexing flow may handle empty collection-related values in a way that results in this unexpected behavior on the shelf.

## Simulation

1 - Access a collection page through `?map=productClusterIds`.
2 - When the collection page is opened, the title and breadcrumbs disappear.

## Workaround

Access the collection page through `?map=productClusterNames`.