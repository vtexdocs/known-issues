---
title: 'Group name is not automatically updated on Intelligent Search'
slug: group-name-is-not-automatically-updated-on-intelligent-search
status: PUBLISHED
createdAt: 2025-09-24T18:20:23.232Z
updatedAt: 2025-09-24T18:20:23.232Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: group-name-is-not-automatically-updated-on-intelligent-search
locale: en
kiStatus: Fixed
internalReference: 821481
---

## Summary


Currently, there are 2 distinct collection modules:

1) The New Collections Module
2) The legacy CMS Module

This difference is detailed here: https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3moFonW33dgOYDrU21Z1X0

The legacy module has two distinct data clusters, the collection (A) and the group name (B)

 ![](https://vtexhelp.zendesk.com/attachments/token/Wb85umTatjLPwTTdZ53985WHt/?name=image.png)

However, the new collections module only displays the collection name, not its GroupName:

 ![](https://vtexhelp.zendesk.com/attachments/token/dXcYFigMd8BCKPCaF5wlvcUhZ/?name=image.png)

The Intelligent Search results are based on the Group Name, which is why, on cases that updates are done only on the new UI, the results are not reflected on the front end and the search queries.



#### Simulation


1 - create a collection using either UI
2 - update the collection on the new application only, making no changes to the legacy.
3 - check the search results and see it'll not be updated.



#### Workaround


Manually update the GroupName on the legacy UI and click "Save Group" to reindex the collection.



