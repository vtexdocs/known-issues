---
title: 'Catalog API accepts list of items but UI does not reflect'
slug: catalog-api-accepts-list-of-items-but-ui-does-not-reflect
status: PUBLISHED
createdAt: 2026-01-09T12:13:24.163Z
updatedAt: 2026-01-09T12:13:24.163Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-accepts-list-of-items-but-ui-does-not-reflect
locale: en
kiStatus: Backlog
internalReference: 1348787
---

## Summary



Currently for the text type of field in the catalog APIs, the system is allowing to created list of items, separated by "," but UI does not reflect the whole list and only shows the last item included.


#### Simulation



Create a new text field and using the catalog APIs created the values in list separated by "," like below example:
"Text1" , "Text2".
The API will accept creating a list while the UI won't show the list and only the last value


#### Workaround


Don't use the text type field to create list of values.



