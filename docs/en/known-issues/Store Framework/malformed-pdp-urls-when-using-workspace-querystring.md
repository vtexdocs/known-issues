---
title: 'Malformed PDP URLs when using workspace querystring'
slug: malformed-pdp-urls-when-using-workspace-querystring
status: PUBLISHED
createdAt: 2025-08-25T14:58:36.205Z
updatedAt: 2025-08-25T14:58:36.205Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: malformed-pdp-urls-when-using-workspace-querystring
locale: en
kiStatus: Backlog
internalReference: 1281017
---

## Summary


When using the `?workspace=` querystring on the store URL, PDP navigation breaks because the `render-runtime` incorrectly includes the `workspace` flag as part of the `skuId` query parameter. This replaces `&` with `?`, resulting in malformed URLs and preventing PDPs from loading correctly. This does not happens when you choose to open the page on a new tab.


#### Simulation



1. Access a store URL with a workspace querystring, for example: `?workspace=prod`
2. Hover over a product – the PDP URL preview shows parameters correctly using &.
3. Click on the product – the URL replaces & with ?, causing the PDP not to load.
4. Console/runtime inspection shows that render-runtime appends the workspace parameter inside the skuId query, corrupting the final URL.

#### Workaround


No reliable workaround. As a temporary measure, users can open the product in a new tab, which preserves the correct URL, but navigation in the same tab is broken.



