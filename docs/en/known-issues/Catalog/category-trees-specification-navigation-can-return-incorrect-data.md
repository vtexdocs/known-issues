---
title: Category tree's specification navigation can return incorrect data
slug: category-trees-specification-navigation-can-return-incorrect-data
status: PUBLISHED
createdAt: 2025-10-16T20:36:27.358Z
updatedAt: 2025-10-16T20:36:27.358Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: category-trees-specification-navigation-can-return-incorrect-data
locale: en
kiStatus: Backlog
internalReference: 1179682
---

## Summary


Currently, when navigating the category tree, if an user navigates to "Field (SKU)" and then "Values" for a specification and then goes back to the category tree view via clicking the breadcrumb link:

 ![](https://vtexhelp.zendesk.com/attachments/token/qtPOrJ9QkBSTLEALtov7At2nI/?name=image.png)

And then navigates back to the same speficiation form, the previously listed specification values will not be listed anylonger.


#### Simulation


1 - In the category tree, go to any category with registered groups and fields, then right click it and access the option "Fields (SKU)"

2 - In the list of SKU fields, look for a specification field that has specification values for it.

3 - Click the "Values" option and they will be listed

4 - Then, in the breadcrumb, click in the "Categories" link

5 - Repeat steps 1 to 3, the same fields will not be shown again, as if they were not present in the catalog.


#### Workaround


Manage specification values via API or spreadsheet

And/or

If said issue happens to you, log out or clear your browser cookies to reset your cache



