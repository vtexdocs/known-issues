---
title: 'Catalog export for attachment cuts > 50 characters'
slug: catalog-export-for-attachment-cuts-50-characters
status: PUBLISHED
createdAt: 2023-12-14T16:46:42.000Z
updatedAt: 2023-12-14T16:46:42.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-export-for-attachment-cuts-50-characters
locale: en
kiStatus: Backlog
internalReference: 953161
---

## Summary

When importing data for attachments in the catalog module, if the said attachment is over 50 characters long, the string is cut, leading to no updates for this data.

## Simulation

1 - create an attachment with a name over 50 characters long, for instance, "This is a very long attachment name that is created to test an issue".

2 - associate it to a product

3 - export this data using the UI /admin/Site/Relatorio_Skus.aspx

4 - Check the column related to this and it will be displayed as "`This is a very long attachment name that is create`" (exactly at 50 characters).

5 - you will need to manually adjust this information if you want to properly import it

## Workaround

Update attachments via API, UI, or manually change their incorrect string in the sheet.