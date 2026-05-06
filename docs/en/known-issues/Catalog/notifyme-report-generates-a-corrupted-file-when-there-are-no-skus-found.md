---
title: 'Notify-me report generates a corrupted file when there are no SKUs found'
slug: notifyme-report-generates-a-corrupted-file-when-there-are-no-skus-found
status: PUBLISHED
createdAt: 2023-12-20T20:13:14.000Z
updatedAt: 2023-12-20T20:13:14.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: notifyme-report-generates-a-corrupted-file-when-there-are-no-skus-found
locale: en
kiStatus: Backlog
internalReference: 956264
---

## Summary

When the 'Notify Me' report has no SKUs, attempting to export it will generate a corrupted file to Excel

## Simulation

- Check if the 'Notify Me' report is empty
- If yes, click on "Export to Excel"
- Download the file and check if it is possible to open it

## Workaround

Open the file in another software or populate the report to be able to export