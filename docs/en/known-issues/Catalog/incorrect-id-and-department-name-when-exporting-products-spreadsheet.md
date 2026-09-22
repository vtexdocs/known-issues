---
title: 'Incorrect ID and department name when exporting products spreadsheet'
slug: incorrect-id-and-department-name-when-exporting-products-spreadsheet
status: PUBLISHED
createdAt: 2023-04-03T20:37:08.000Z
updatedAt: 2026-09-22T22:47:02.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrect-id-and-department-name-when-exporting-products-spreadsheet
locale: en
kiStatus: Fixed
internalReference: 783363
---

## Summary

When exporting a product spreadsheet, the department's name and ID are exported incorrectly, even if they belong to a different department in the product catalog or in queries through the APIs.

## Simulation

1. Access the Catalog through the Admin;
2. Navigate to Import and Export;
3. Export the product and SKUs spreadsheet.

## Workaround

There is no workaround. However, this information can be discarded. When you import a spreadsheet for product and category upgrades, this column is not considered. Only the Id Categoria column is.