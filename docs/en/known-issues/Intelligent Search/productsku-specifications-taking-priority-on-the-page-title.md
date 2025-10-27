---
title: 'Product/SKU specifications taking priority on the page title'
slug: productsku-specifications-taking-priority-on-the-page-title
status: PUBLISHED
createdAt: 2025-08-12T18:37:43.501Z
updatedAt: 2025-08-12T18:37:43.501Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: productsku-specifications-taking-priority-on-the-page-title
locale: en
kiStatus: Backlog
internalReference: 1089440
---

## Summary


It's expected that the page title will be based on the last or initial filters. Filters from product/SKU specifications are always set as the last one from the breadcrumb, which takes place as the page title.

In cases of a full-text search, the specification value that is alphabetically less than the searched term, but the closest to this searched term, will take priority as the title. For example, if you search for `jeans` and filters by `size=G` and then `material=Chiffon`, the size G will take priority as a page title.


#### Simulation


Navigating in a page like "/summer-2024?map=productclusternames" and applying any filter that is not an SKU specification will keep the page title as "Summer 2024", but a filter like "size=M" will take priority and the title will be shown as "M".


#### Workaround


N/A


