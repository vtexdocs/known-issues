---
title: Visual merchandising rule not applied to the selected category
slug: visual-merchandising-rule-not-applied-to-the-selected-category
status: PUBLISHED
createdAt: 2025-10-16T20:01:41.466Z
updatedAt: 2025-10-16T20:01:41.466Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rule-not-applied-to-the-selected-category
locale: en
kiStatus: Backlog
internalReference: 1157326
---

## Summary


Visual merchandising rules applied to any category level that is not the department (1st level), as category and subcategories (2nd and 3rd leves), aren't working.


#### Simulation



- create a visual merchandising rule
- apply a single filter limiting it to a given category
- select some itens to be pinned or hidden
- check the storefront for this category; the rule won't be applied


#### Workaround


Declaring the full category path avoid the problem. It means, for a subcategory you need to declare its parent levels (category and department).



