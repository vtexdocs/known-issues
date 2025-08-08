---
title: Visual merchandising rules wrongly extendeded to broader contexts
slug: visual-merchandising-rules-wrongly-extendeded-to-broader-contexts
status: PUBLISHED
createdAt: 2025-08-07T20:22:52.058Z
updatedAt: 2025-08-07T20:22:52.058Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rules-wrongly-extendeded-to-broader-contexts
locale: en
kiStatus: Backlog
internalReference: 1098688
---

## Summary


Visual merchandising rules are set for specific contexts by defining filters by attributes or search terms, but the filters are not being limited to their exclusive context, generating unexpected search results and conflicting with different merch rules for other pages.

For context, pinned and hidden products perform the same action as the promote and remove by ID actions from a manual merch rule.

The easiest example is that setting it to a category will also apply modifiers to its subcategories.


#### Simulation



- Consider the category tree "clothes > children > t-shirt".
- Create a visual merch rule to manually sort (pin) some items in both the "children" category and "t-shirt" subcategory.
- The "t-shirt" subcategory won't apply the expected sorting correctly, because it'll be under the influence of the merch rule for the "children" category


#### Workaround


It's possible to create the same type of rule through the manual editor, where you can set the "exclusive trigger" option, completely avoiding the overlap between different rules.


