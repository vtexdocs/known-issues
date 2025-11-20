---
title: 'Same option value accross different facets affecting the facet selection in a mobile version'
slug: same-option-value-accross-different-facets-affecting-the-facet-selection-in-a-mobile-version
status: PUBLISHED
createdAt: 2025-11-20T19:10:44.975Z
updatedAt: 2025-11-20T19:10:44.975Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: same-option-value-accross-different-facets-affecting-the-facet-selection-in-a-mobile-version
locale: en
kiStatus: Backlog
internalReference: 1328394
---

## Summary


In the mobile version, checkbox IDs for facet options in a PLP are not unique across different facets when options share the same value (e.g., “1”). This causes the selection to be applied to the wrong facet.

Affects only the **mobile** version of the Product Listing Page. Desktop uses unique identifiers and does not exhibit the issue.


#### Simulation



1. On the mobile version of the PLP, select a value that is the same in another facet and refresh the page.
2. Clear the filters and refresh again.
3. Select the same value in another facet; notice the selection is applied to the previous facet instead.


#### Workaround


N/A



