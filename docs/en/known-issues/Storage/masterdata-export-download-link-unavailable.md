---
title: 'Masterdata Export Download Link Unavailable'
slug: masterdata-export-download-link-unavailable
status: PUBLISHED
createdAt: 2025-11-14T19:39:28.534Z
updatedAt: 2025-11-14T19:39:28.534Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: masterdata-export-download-link-unavailable
locale: en
kiStatus: Backlog
internalReference: 613864
---

## Summary


Currently, for data entities with several fields, when there's an attempt to export a sheet and download it, both via email or directly via the UI, the download link does not save the file onto your browser.



#### Simulation


1 - for a data entity in which you have several fields, try to export all of its fields at the same time or several registers

2 - the download link will not generate a file onto your browser

 ![](https://vtexhelp.zendesk.com/attachments/token/nQdUqbk7BiOK5RcigZhNZR9Rr/?name=image.png)


#### Workaround


**Right-click on the Download link and copy the link, then paste the link in another tab and the download will start or** fetch data via API https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search and/or download data into several, smaller spreadsheets