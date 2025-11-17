---
title: 'Drag and Drop issue on Site Editor'
slug: drag-and-drop-issue-on-site-editor
status: PUBLISHED
createdAt: 2025-11-17T17:30:08.983Z
updatedAt: 2025-11-17T17:30:08.983Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: drag-and-drop-issue-on-site-editor
locale: en
kiStatus: Backlog
internalReference: 685103
---

## Summary


Customers cannot use the drag and drop feature in the site editor to upload images, this probably occurs duo our new implementation of our new CMS Media Management.


#### Simulation



Go to any account and try to upload a banner image through drag and drop

 ![](https://vtexhelp.zendesk.com/attachments/token/VImrMx2X11Cyb9sePaOFJJbj2/?name=inline785506209.png)
https://share.vidyard.com/watch/RXWHL4QYir7i5h1U4zuEuJ


#### Workaround


Upload images without use drag and drop, or,

Try to roll back to an older version of admin-pages without some fixes and CMS Media Management, that is the version of admin-pages 4.43.1

Run `vtex install vtex.admin-pages@4.43.1`
This will solve the issue about drag and drop, but other issues can show up again