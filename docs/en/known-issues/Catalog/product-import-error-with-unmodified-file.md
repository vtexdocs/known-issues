---
title: 'Product Import Error with Unmodified file'
slug: product-import-error-with-unmodified-file
status: PUBLISHED
createdAt: 2026-05-04T12:06:58.640Z
updatedAt: 2026-05-04T12:06:58.640Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-import-error-with-unmodified-file
locale: en
kiStatus: Backlog
internalReference: 1400586
---

## Summary

Currently, we have an issue with Import/Export module, that basically consists in unmodified files from Export conflict with Import.

## Simulation

Download a file in the new Export module, example "Products and SKUs", without saving any change in the Excel file try to Import the same file using the Import module same option "Products and SKUs" this will result in an error, due to the format from the export conflicts with the Import. But any attempt to save any change in the Excel file will solve the issue.

## Workaround

Download the Excel file, and apply and change and save, but doing so the Import will accept the file.