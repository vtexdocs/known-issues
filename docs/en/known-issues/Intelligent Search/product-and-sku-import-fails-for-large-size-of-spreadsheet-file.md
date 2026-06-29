---
title: 'Product and SKU import fails for large size of spreadsheet file'
slug: product-and-sku-import-fails-for-large-size-of-spreadsheet-file
status: PUBLISHED
createdAt: 2026-06-29T17:31:05.000Z
updatedAt: 2026-06-29T17:31:05.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-and-sku-import-fails-for-large-size-of-spreadsheet-file
locale: en
kiStatus: Backlog
internalReference: 1427405
---

## Summary

When merchants import Products and SKUs by spreadsheet, the upload may fail even when the sheet is split into smaller batches by row count. The visible symptom is a `413 Request entity too large` error during the import flow.

This affects scenarios in which the spreadsheet file size exceeds the current import flow's supported limit, which is approximately 4.5 MB.

## Simulation

1. Open the **Admin** and go to the **Products and SKUs** import flow.
2. Prepare a spreadsheet file whose total file size is greater than 4.5 MB.
3. Upload the file in the import flow.
4. Notice that the request fails during upload and may return a `413 Request entity too large` error before reaching the backend processing flow.

## Workaround

Split the import into smaller spreadsheet files of approximately 4.5 MB whenever possible and upload each file separately.